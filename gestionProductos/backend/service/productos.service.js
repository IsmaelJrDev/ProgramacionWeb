// Para poder usar la variable de la base de datos
const { productos } = require("../database/db");

class ProductosService{
    // Creacion de funciones  
    getAll(){
        return productos;
    }

    getOneById(id){
        const producto = productos.filter((pt) => pt.id === id)
    }

    create (nombre, precio, stock){
        // Convertir en objeto
        const nurvoProducto = {
            nombre:nombre,
            precio:precio,
            stock:stock
        }
    }
}