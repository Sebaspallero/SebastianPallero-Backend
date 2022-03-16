export default class ProductContainer{

    constructor(){
        this.products = [];
    }

    getAllProducts = () =>{
        return this.products;
    }

    getProduct = ()=>{
      
    }

    saveProduct = (product)=>{
        this.products.push(product)
    }
}