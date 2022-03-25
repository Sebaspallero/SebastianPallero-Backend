/* import express from 'express'
import ProductContainer from '../services/productContainer.js';

const router = express.Router(); //Router con Mayus.
const productService = new ProductContainer();



router.get ('/',(req,res)=>{
    if (productService.getAllProducts() == 0) return res.status(400).send({error:'No products on the list'});
    res.send(productService);
})



router.get('/:id',(req,res)=>{
    let url = (req.params.id)
    if (url == NaN) return res.status(400).send({error:'ID must be a number'}); // NOT WORKING, RETURNS 3rd ERROR
    if (url <= 0) return res.status(400).send({error:'ID must be higher than 0'});
    if (url > productService.getProduct(url)) return res.status(400).send({error:'Product does not exist, try a different ID'});
    res.send({
        message:'This is your product',
        product: productService.getProduct(url)
    });
})



router.post('/',(req,res) =>{
    let id = productService.getAllProducts().length+1
    let {title,price,thumbnail} = req.body;
    let product = productService.saveProduct({title,price,thumbnail,id});
    res.send({message:'Product saved'})
})

export default router; */
