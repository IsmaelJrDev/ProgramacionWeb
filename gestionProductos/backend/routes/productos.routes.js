const { ProductoController } = require("../controller/productos.controller");

const router = require("express").Router();

router.get("/", ProductoController.getAll)
router.get("/:id", ProductoController.getOneById)
router.post("/", ProductoController.create)
router.put("/:id", ProductoController.update); // Actualizar
router.delete("/:id", ProductoController.delete);


module.exports = router;