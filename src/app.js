import express from 'express'
import ProductContainer from './services/productContainer.js';


const app = express();
const PORT = 8080;
const server = app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})


app.use (express.json());
app.use(express.urlencoded({extended:true}));

const productService = new ProductContainer();

app.get ('/api/products',(req,res)=>{
    if (productService.getAllProducts() == 0) return res.status(400).send({error:'No products on the list'});
    res.send(productService);
})

app.get('/api/product/:id',(req,res)=>{
    let url = parseInt(req.params)
    res.send(productService.getProduct(url));
})

app.post('/api/products',(req,res) =>{
    let id = productService.getAllProducts().length+1
    let {title,price,thumbnail} = req.body;
    let product = productService.saveProduct({title,price,thumbnail,id});
    res.send({message:'Product saved'})
})
