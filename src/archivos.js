//Desafio 6
import fs from "fs"
const productos = []
export let array = productos

class File {
    constructor(name){
        this.name = name
    }

    read = async()=>{
      try{
          const content = await fs.promises.readFile(this.name,"utf-8")
          if (content) return console.log(content)
      }
      catch (error){
        console.log ([])
      }
     }

    save = async(producto)=>{
        try{
            productos.push(producto)
            await fs.promises.writeFile(this.name, JSON.stringify(productos))
            console.log("File Saved!")
        }
        catch (error){
          console.log (`An Error has happened: ${error}`)
        }
    }

    delete = async()=>{
        try {
            await fs.promises.unlink(this.name);
            console.log("File Deleted!")
          } 
        catch (error){
            console.log (`An Error has happened: ${error}`)
        }
    }
}

const file = new File("products.txt");

file.save({ title: "Comida de Perros", price: 1000, thumbnail: "URLProduct1", id: productos.length + 1 });
file.save({ title: "Comida de Gatos", price: 950, thumbnail: "URLProduct2", id: productos.length + 1 });
file.save({ title: "Comida de Peces", price: 800, thumbnail: "URLProduct3", id: productos.length + 1 });
/* file.read();
file.delete(); */

