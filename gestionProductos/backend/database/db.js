// Simulación del abase de datos
const productos = [{
    id:1,
    nombre:"galletas", 
    precio:500,
    stock:12
},
{
    id:2,
    nombre:"chocolates", 
    precio:20,
    stock:5
}
]

// Manera explicita del codigo
//module.exports = {
//    productos:productos
//}

// Manera implicita 
module.exports = {productos}
// Una vez creada se generara un archivo en Service "productos.service.js"