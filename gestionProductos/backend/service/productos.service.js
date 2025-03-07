// Para poder usar la variable de la base de datos
const { productos } = require("../database/db");

class ProductosService{
    // Creacion de funciones  
    getAll(){
        return productos;
    }

    getOneById(id){
        console.log({id, numero:1,cadena:"13"})
        const producto = productos.filter((pt) => pt.id == id)
    }

    create (nombre, precio, stock){
        // Convertir en objeto
        const nuevoProducto = {
            nombre:nombre,
            precio:precio,
            stock:stock
        };

        productos.push(nuevoProducto);
        return nuevoProducto;
    }

    update(id, objeto){
        // TODO: usar el id para ubicar el producto a cambiar y usar el objeto -> obtener datos a cambiar {stock:99}
        const productoActualizado = {};

        return productoActualizado;
    }

    delete(id){
        // TODO: usar el id para ubicar el producto a eliminar
        const productoELiminado = {};

        return productoELiminado;
    }
}

// Exportacion
module.exports = {ProductosService:new ProductosService()}