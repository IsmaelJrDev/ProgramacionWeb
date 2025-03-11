// Imporación del ProductoService
const { response } = require("express");
const { ProductosService } = require("../service/productos.service");

class ProductoController{
    // Funciones para los endpoints
    static getAll(req, res){
        // Con res.json estamos devolviendo la respuesta al ususario
        return res.json(ProductosService.getAll());
    }

    static getOneById(req, res){
        const {id} = req.params;
        return res.json(ProductosService.getOneById(id));
    }

    static create(req, res){
        const {nombre,precio, stock} = req.body;
        return res.json(ProductosService.create(nombre, precio, stock));
    }

    //TODO: Colocar el controller de update y de delete

    static update(req, res) {
        const { id } = req.params;
        const { nombre, precio, stock } = req.body;
        return res.json(ProductosService.update(id, nombre, precio, stock));
    }

    static delete(req, res) {
        const { id } = req.params;
        const eliminado = ProductosService.delete(id);
        if (!eliminado) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        return res.json(eliminado);
    }

}

module.exports = {ProductoController}