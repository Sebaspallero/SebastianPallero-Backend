class productsManager{
    constructor(){
        this.products = []
    }

    getProducts = ()=>{
        return this.products;
    }

    getProductById = (url)=>{
        let id = this.products.find((product)=>{return product.id == url});
        return(id)
    }

    setProduct = (product)=>{
        let timestamp = Date.now()

        if(this.products.length == 0){
            product.timestamp = timestamp;
            product.id = 1;
            this.products.push(product);
        }
        else{
            product.timestamp = timestamp;
            product.id = this.products[this.products.length-1].id+1;
            this.products.push(product);
        }
    }

    deleteProduct = (url)=>{
        const id = this.products.filter((product)=>{return product.id == url});
        if(id) {this.products = this.products.filter(product => product.id != url);}
    }

    updateProduct =(url,changes)=>{
        let index = this.products.findIndex((product)=>{return product.id == url});
        if(index != -1){return this.products[index] = changes};
    }
}

export default new productsManager;