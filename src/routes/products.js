import express from 'express'
import productsControllers from '../controllers/productsControllers.js'
const router = express.Router(); //Router con Mayus.



const adminMiddleware = (req,res,next)=>{
    if(req.headers.authorization){
        next();
    }
    else(
        res.send({
            status: '-1',
            message: `ruta:${req.url} - método: ${req.method} no autorizado`
        })
    )
}

router.get('/',productsControllers.getAllProducts)
router.get('/:pid',productsControllers.getProduct)
router.post('/',adminMiddleware,productsControllers.addProduct)
router.delete('/:pid',adminMiddleware,productsControllers.deleteProduct)
router.put('/:pid',adminMiddleware,productsControllers.updateProduct)


export default router;
