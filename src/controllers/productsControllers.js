import productManager from "../models/productManager.js";

const getAllProducts =(req,res)=>{
    let products = productManager.getProducts();
    if (products == 0) return res.status(400).send({error:'No products on the list'});
    res.status(200).send(products)
}

const getProduct = (req,res)=>{
    let url = parseInt(req.params.pid);
    let product = productManager.getProductById(url);
    if (isNaN(url)) return res.status(400).send({error:'ID must be a number'});
    if (url <= 0) return res.status(400).send({error:'ID must be higher than 0'});
    if (url > productManager.getProducts().length) return res.status(400).send({error:'Product does not exist, try a different ID'});
    res.status(200).send(product);
}

const addProduct = (req,res)=>{
    let product = req.body;
    productManager.setProduct(product);
    res.status(200).send({message:'Product Added'})
}

const deleteProduct=(req,res)=>{
    let url = parseInt(req.params.pid);
    productManager.deleteProduct(url);
    if (isNaN(url)) return res.status(400).send({error:'ID must be a number'});
    if (url <= 0) return res.status(400).send({error:'ID must be higher than 0'});
    if (url > productManager.getProducts().length) return res.status(400).send({error:'Product does not exist, try a different ID'});
    res.status(200).send({message:'Product Deleted'})
}

const updateProduct=(req,res)=>{
    let url = parseInt(req.params.pid);
    let changes = req.body
    productManager.updateProduct(url,changes);
    if (isNaN(url)) return res.status(400).send({error:'ID must be a number'});
    if (url <= 0) return res.status(400).send({error:'ID must be higher than 0'});
    if (url > productManager.getProducts().length) return res.status(400).send({error:'Product does not exist, try a different ID'});
    res.status(200).send({message:'Product Updated'})
}

export default{
    getAllProducts,
    getProduct,
    addProduct,
    deleteProduct,
    updateProduct
}