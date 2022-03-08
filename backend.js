//DESAFIO N° 4

const { fromEvent, map } = rxjs;


const textBox = document.getElementById("textBox");
const textMirror = document.getElementsByTagName("span")[0];


const textObservable = fromEvent(textBox, "keyup");


const textoInvertido = textObservable.pipe(
    map(event => {
        if (event.target.value === "error") {
            observer.error("Se desuscribió al observer por escribir ´error´");
        }
        if (event.target.value === "completed") {
            observer.complete();
        }
        let mirror = event.target.value.split('').reverse().join('');
        return mirror
    })
)


let suscribed = true;

 
const disableMirror = () => {
    textBox.value = "";
    textBox.setAttribute("disabled", true)
    textMirror.innerHTML = "";
    observer.unsubscribe();
    suscribed = false;
}


let observer = textoInvertido.subscribe({
    next: (valor) => {
        textMirror.innerHTML = valor;
    },
    error: (error) => {
        disableMirror();
        console.error(error);
    },
    complete: () => {
        disableMirror();
        console.info("La operación se completó y se desuscrubió al observer.");
    }
})


setTimeout(() => {
    if (suscribed) {
        disableMirror();
        console.log("Se desuscribió al observable luego de pasar 30 segundos.")
    } else {
        console.log("Pasó el tiempo pero ya se había desuscripto")
    }
}, 30000)