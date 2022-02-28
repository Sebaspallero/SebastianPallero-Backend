export const sumar = async(num1:number, num2:number)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve (num1+num2)
        },1000)
    });
}

export const restar = async(num1:number, num2:number)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve (num1-num2)
        },1000)
    });
}

