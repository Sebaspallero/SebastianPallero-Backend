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

/* ------------------------ CHAT ------------------------------- */

let socket = io()

let inputMessage = document.getElementById('inputMessage')
let chatMessages = document.querySelector('.chatBox')
let user;

//ALERT DE IDENTIFICACIÓN

Swal.fire({
    title:"Identifiquese",
    input: 'text',
    allowOutsideClick: false,
    inputValidator:(value)=>{
        return !value && '¡Necesitas escribir un nombre de usuario para participar!'
    }

}).then(result =>{
    user = result.value;
})


inputMessage.addEventListener('keyup',evt=>{
    if(evt.key == 'Enter'){
        if(inputMessage.value.trim().length>0){ //Por lo menos se envia un simbolo - - GET MESSAGE
            socket.emit('chatMessage',{user,message:inputMessage.value.trim()}) // - - SEND MESSAGE TO SERVER
            inputMessage.value = ""; // - - CLEAR INPUT
            inputMessage.focus();
        }
    }
})

//SOCKET EVENTS

socket.on('message', message=>{
     //SHOW A MESSAGE
     outputMessage(message);

    // SCROLL DOWN
    chatMessages.scrollTop = chatMessages.scrollHeight; //NOT WORKING -FIX-
});

//HTML APPEND MESSAGE
const outputMessage = (message)=>{
    if(message.id == socket.id){
        const div = document.createElement('div');
        div.classList.add('userLog');
        div.innerHTML = `<div class="userMessageBox">
                    <p class="msgInfo">${message.userName}</p>
                    <p class="msgInfo">${message.time}</p>
                    <p class="userMessage">${message.text}</p>
                    </div>`;
        document.querySelector('.chatBox').appendChild(div);
    }
    else{
        const div = document.createElement('div');
        div.classList.add('usersLog');
        div.innerHTML = `<div class="usersMessageBox">
                        <p class="msgInfo">${message.userName}</p>
                        <p class="msgInfo">${message.time}</p>
                        <p class="usersMessage">${message.text}</p>
                        </div>`;
        document.querySelector('.chatBox').appendChild(div);
    }
}