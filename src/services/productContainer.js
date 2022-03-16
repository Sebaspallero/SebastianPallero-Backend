export default class ProductContainer{

    constructor(){
        this.products = [];
    }

    getAllProducts = () =>{
        return this.products;
    }

    getProduct = (number)=>{
        this.products.filter((product)=> {
            return product.id == number;
        });
    }

    saveProduct = (product)=>{
        this.products.push(product)
    }
}

