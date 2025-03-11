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
        //TODO:usar el id para ubicar el producto a cambiar objeto -> para obtener los datos a cambiar {stock:99}
        const actualizar = productos.findIndex((pt) => pt.id == id);
        if (actualizar === -1) return null; // Retorna null si no se encuentra el producto

        productos[actualizar] = { ...productos[actualizar], ...objeto }; // Actualiza los valores manteniendo los existentes
        return productos[actualizar];
    }

    delete(id){
        //TODO:usar el id para ubicar el producto a cambiar
        const eliminar = productos.findIndex((pt) => pt.id == id);
        if (eliminar === -1) return null; // Retorna null si no se encuentra el producto

        const productoEliminado = productos.splice(eliminar, 1)[0]; // Elimina el producto y lo devuelve
        return productoEliminado;
    }

    
}

// Exportacion
module.exports = {ProductosService:new ProductosService()}