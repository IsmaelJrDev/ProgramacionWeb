// Imporación del ProductoService
const { response } = require("express");
const { ProductosService } = require("../service/productos.service");

class ProductoController{
    // Funciones para los endpoints
    getAll(req, res){
        // Con res.json estamos devolviendo la respuesta al ususario
        return res.json(ProductosService.getAll());
    }

    getOneById(req, res){
        const {id} = req.params;
        return res.json(ProductosService.getOneById(id));
    }

    create(req, res){
        const {nombre,precio, stock} = req.body;
        return res.json(ProductosService.create(nombre, precio, stock));
    }

    //TODO: Colocar el controller de update y de delete
    
}

module.exports = {ProductoController}