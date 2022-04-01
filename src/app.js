import express from 'express'
import productsRouter from './routes/products.js'
import __dirname from './utils.js'
import {Server} from 'socket.io'
import messageInfo from './messageInfo.js'

const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
});

app.use (express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname +'/public'));

const io = new Server(server);
const log = []
let chatBot = 'ChatBot'

io.on('connection', socket=>{

    //Message submit to client
    socket.on('chatMessage',msg =>{
        log.push(messageInfo(msg.user,msg.message,socket.id));
        io.emit('message',messageInfo(msg.user,msg.message,socket.id))
        console.log(log)
    });

    //Welcomes the user (only them).
    socket.emit('message',messageInfo(chatBot,'Welcome User to the chat!'));

    //Broadcast to everyone (but you) that someone connects.
    socket.broadcast.emit('message',messageInfo(chatBot,'A user has joined the chat!'));

    //Runs when a user disconnects.
    socket.on('disconnect',()=>{
        io.emit('message',messageInfo(chatBot,'User left the chat'))
    });
})


app.use('/products',productsRouter);

//CONFIGURAR MULTER

//io = global => everyone - - send a message to everyone
//socket = local=> only you - - single client 
//broadcast => everyone except you - - all clients except the client that is connecting
