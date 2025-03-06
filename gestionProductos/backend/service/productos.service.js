// Para poder usar la variable de la base de datos
const { productos } = require("../database/db");

class ProductosService{
    // Creacion de funciones  
    getAll(){
        return productos;
    }

    getOneById(){

    }
}