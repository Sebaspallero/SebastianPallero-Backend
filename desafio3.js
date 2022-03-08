const mostrarPalabras = (text, callback, time = 1000) => {
    return new Promise((resolve) => {
        let i = 0;
        let divisiones = text.split(" ");
        const timer = setInterval(() => {
            if (i < divisiones.length) {
                console.log(divisiones[i]);
                i++;
            } else {
                clearInterval(timer);
                callback()
            }
        }, time)
        setTimeout(() => {
            resolve(divisiones.length)
        }, time * divisiones.length)
    })
}

const funcionFinalizado = () => console.log("TERMINÉ")

const correrPrograma = async () => {
    await mostrarPalabras("HOLA MUNDO QUÉ TAL ESTÁS", funcionFinalizado, 50);
    await mostrarPalabras("LA CIGUEÑA CHUECA DORMÍA", funcionFinalizado, 500);
    await mostrarPalabras("LOS PANTANOS SON MUY DIVERTIDOS", funcionFinalizado, 1000)
}

correrPrograma()