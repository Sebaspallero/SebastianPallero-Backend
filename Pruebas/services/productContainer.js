export default class ProductContainer{

    constructor(){
        this.products = [];
    }

    getAllProducts = () =>{
        return this.products;
    }

    getProduct = (url)=>{
        let findId = this.products.filter(product => product.id == url)
        return (findId)
    }

    saveProduct = (product)=>{
        this.products.push(product)
    }
}

