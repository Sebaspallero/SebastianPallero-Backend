//DESAFIO N°5
const http = require ('http')

const server = http.createServer((request,response)=>{

    let idNum = Math.round(Math.random()*10);
    let titleNum = Math.round(Math.random()*10);
    let priceNum = (Math.random()*9999.99).toFixed(2);
    let thumbNum = Math.round(Math.random()*10);

    const obj = {
        id: idNum,
        title: `Producto ${titleNum}`,
        price: priceNum,
        thumbnail: `Producto ${thumbNum}`
    }

    const objString = JSON.stringify(obj);
    response.end(objString);
    
})

server.listen(8080, ()=>{
    console.log("Escuchando al puerto 8080")
})