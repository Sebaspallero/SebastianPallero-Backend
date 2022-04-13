class cartsManager{
    constructor(){
        this.carts=[]
    }

    getCarts = ()=>{
        return this.carts;
    }

    getCart = ()=>{
        return this.carts.filter((cart)=>{return cart.id == url;})
    }

    setCart = (cart)=>{
        let timestamp = Date.now()
        if(this.carts.length == 0){
            cart.timestamp = timestamp
            cart.id = 1;
            this.carts.push(cart);
        }
        else{
            cart.timestamp=timestamp
            cart.id = this.carts[this.carts.length-1].id+1;
            this.carts.push(cart);
        }
    }

    setProducts = ()=>{
        
    }
}

export default new cartsManager;