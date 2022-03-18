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
    let url = (req.params.id)
    if (url == NaN) return res.status(400).send({error:'ID must be a number'});
    if (url <= 0) return res.status(400).send({error:'ID must be higher than 0'});
    if (url > productService.getProduct(url)) return res.status(400).send({error:'Product does not exist, try a different ID'});
    res.send({
        message:'This is your product',
        product: productService.getProduct(url)
    });
})

app.post('/api/products',(req,res) =>{
    let id = productService.getAllProducts().length+1
    let {title,price,thumbnail} = req.body;
    let product = productService.saveProduct({title,price,thumbnail,id});
    res.send({message:'Product saved'})
})
