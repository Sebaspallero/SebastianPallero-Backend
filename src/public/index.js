console.log("Hola desde la carpeta public")

let form = document.getElementById('productForm')

form.addEventListener('submit',(evt)=>{evt.preventDefault();
    let data = new FormData(form)
    let obj = {}
    data.forEach((value,key)=>obj[key]=value);
    console.log(obj);

    fetch('/products',{
        method: 'POST',
        body: JSON.stringify(obj),
        headers:{
            'content-type':'application/json'
        }
    }).then(res=>res.json()).then(json=>console.log(json))
})