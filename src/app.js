//Desafio 7
import express from 'express'
import {array} from './archivos.js'

const app = express();
const PORT = 8080;
const server = app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

let visitasItem = 0
let visitasItems = 0
let productos = array

app.get('/items', async(req,res)=>{
    res.send({
        items: productos,
        cantidad: productos.length}
        )
        (++visitasItems)
})

app.get('/item-random', async(req,res)=>{
    let randomProduct = (productos)=>{ return productos [Math.floor(Math.random() * productos.length)]};
    res.send(
        {item: (randomProduct(productos))}
    )
    (++visitasItem)
})


app.get('/visitas',async(req,res)=>{
    res.send(`Visitas en la sección Items: ${visitasItem} - Visitas en la sección Item: ${visitasItems}`)
})