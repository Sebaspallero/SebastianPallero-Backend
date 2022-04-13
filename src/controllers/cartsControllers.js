import cartsManager from "../models/cartsManager.js";

const getAllCartProducts = (req,res)=>{
    let carts = cartsManager.getCarts();
    res.send(carts);
}

const getCart = (req,res)=>{
    let cart = cartsManager.getCart()
    res.send(cart)
}

const addCart = (req,res)=>{
    let cart =req.body
    cartsManager.setCart(cart)
    res.send({id:cart.id})
}

export default{
    getAllCartProducts,
    getCart,
    addCart,
}