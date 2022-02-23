class Usuario{
    constructor (nombre,apellido,){
        this.nombre = nombre
        this.apellido = apellido
        this.mascota = []
        this.libros = []
    }

    getFullName = ()=> {
        console.log (`mi nombre es ${this.nombre} ${this.apellido}`)
    }

    addMascota = (nuevaMascota)=>{
        this.mascota.push(nuevaMascota)
    }

    getMascota = () =>{
        console.log(this.mascota)
    }

    addBook = (book) =>{
        this.libros = book
    }

    getBooks = () =>{
        let getTitle = this.libros.map (libro=>{
            return libro.titulo;
        })
        return getTitle;
    }
}

let persona1 = new Usuario ("Fernando", "Ramos");
let persona2 = new Usuario ("Raul", "Perez");


persona1.getFullName();
persona1.addMascota('Gato');
persona1.addMascota('Cabra');
persona1.getMascota();
persona1.addBook([{titulo:"La Sirenita", autor:"Hans Christian Andersen"},{titulo:"El Hombre Araña", autor:"Stan Lee"}]);
console.log (persona1.getBooks())

persona2.getFullName();
persona2.addMascota('Perro');
persona2.addMascota('Pony');
persona2.getMascota();
persona2.addBook([{titulo:"La Cenicienta", autor:"Hermanos Grimm"},{titulo:"Thor", autor:"Stan Lee"}]);
console.log (persona2.getBooks())