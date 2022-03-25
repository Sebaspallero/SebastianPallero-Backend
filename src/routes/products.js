import express from 'express'


const router = express.Router(); //Router con Mayus.

let products = []


router.get ('/',(req,res)=>{
    if (products == 0) return res.status(400).send({error:'No products on the list'});
    res.send({status:'succes', payload:products})
})

router.post('/',(req,res) =>{
    let product = req.body;
    let id = {id:products.length+1}
    product = {...product, ...id}
    products.push(product);
    res.send({status:'succes', message:'Product saved'})
})

router.get('/:id',(req,res)=>{
    let url = parseInt(req.params.id)
    const findProduct = products.filter((product)=>{return product.id == url;});
    if (url == NaN) return res.status(400).send({error:'ID must be a number'}); // NOT WORKING
    if (url <= 0) return res.status(400).send({error:'ID must be higher than 0'});
    if (url > products.length) return res.status(400).send({error:'Product does not exist, try a different ID'});
    res.send({
        message:'This is your product',
        product: findProduct
    });
})


export default router;