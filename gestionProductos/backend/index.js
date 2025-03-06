const ProductoRutas = require("./routes/productos.routes");
const express = require("express");//IMPORTAMOS EXPRESS
const cors = require("cors"); //IMPORTAMOS CORS
const PORT = 3000; //PUERTO PARA NUESTRO SERVIDOR

// DECLARAMOS NUESTRA INSTANCIA DE EXPRESS
const app = express();

// Middleware
app.use(express.json()); // INTERPRETE DE JSON
// app.use("/una_ruta",express.json()) SOLO SE VA EJECUTAR EN ESA RUTA
app.use(cors()) // PERMITE O NIEGA EL ACCESO A LAS IPs
// agregamos todas las rutas al servidor
app.use("/productos", ProductoRutas);

// CORRIENDO EL SERVIDOR
app.listen(PORT, () => {
  //console.log("Server is running on port ${port}");
  console.log("Server ir running in http://localhost:"+PORT);
});