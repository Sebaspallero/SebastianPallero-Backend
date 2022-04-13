import express from 'express'
import cartsControllers from '../controllers/cartsControllers.js';

const router = express.Router();

router.get('/:cid/products',cartsControllers.getAllCartProducts);
router.get('/:cid',cartsControllers.getCart);
router.post('/',cartsControllers.addCart)

export default router;