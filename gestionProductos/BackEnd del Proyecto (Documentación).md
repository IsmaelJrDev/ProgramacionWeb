
```JavaScript
//import express from "express"
const express = require("express");//IMPORTAMOS EXPRESS
const cors = require("cors"); //IMPORTAMOS CORS
const PORT = 3000; //PUERTO PARA NUESTRO SERVIDOR

// DECLARAMOS NUESTRA INSTANCIA DE EXPRESS
const app = express();

// Middleware
app.use(express.json()); // INTERPRETE DE JSON
// app.use("/una_ruta",express.json()) SOLO SE VA EJECUTAR EN ESA RUTA
app.use(cors()) // PERMITE O NIEGA EL ACCESO A LAS IPs
 

// MÉTODOS GET
app.get("/", (req, res)/** PARA LA FUNCIÓN DE FLECHA: Lo que requiero y lo que devuelvo */ => {
	//res.send("<h1>Hola desde Express</h1>"); PARA MANDAR TEXTO PLANO.
	res.json (
		{
			mensaje:"Hola desde Express"
		}
	);
}/** EL MÉTODO GET LLEVA DOS COSAS: la ruta y una función que se manda a llamar. */);

app.get("/:nombre", (req, res) => {
/** DOS MANERAS DE EXTRAER EL NOMBRE: solo que el segundo es mejor. */

	//const nombre = req.params.nombre;
	const {nombre} = req.params;
	res.json(
		{
			mensaje:"Hola usando una URL personal de: "+nombre
		}
	);
});

// PARA VERIFICAR QUE TODO LOS PARAMETROS DE LA SUMA SEAN NÚMEROS
app.get("/:n1/:n2", (req, res) => {
	console.log(req.params);
	const {n1, n2} = req.params;
	if (isNaN(parseFloat(n1)) || isNaN(parseFloat(n2))) {

		res.status(400).json({message:"No todos los parámetros son números"})
	}else {
		const suma = parseInt(n1)+parseFloat(n2);
		res.json({suma});
	}
});

// MÉTODO POST
app.post("/", (req, res) => {
	const {username, password} = req.body;
	res.status(201).json({
		username, password
	});
})

  

// CORRIENDO EL SERVIDOR
app.listen(PORT, () => {
	console.log("Server is running on port ${port}");
	console.log("Server ir running in http://localhost:"+PORT);
});
```

## DOCUMENTACIÓN DEL CÓDIGO

#### 1.- Importación de las bibliotecas
```JS
const express = require("express");
const cors = require("cors");
```
- **[[Express]]:** Es una biblioteca que nos ayudara a crear un servidor de manera fácil.
- **[[Cors]]:** Es una biblioteca que nos ayudara a controlar **quienes pueden acceder a nuestro servidor**.

---

#### 2.- Configuración del puerto

```JS
const PORT = 3000;
```

- **`PORT`**: Es el número de puerto donde nuestro servidor estará escuchando. En este caso, el servidor estará disponible en el puerto 3000.

---

#### 3.- Crear una instancia de Express

```JS
const app = express();
```
- **`app`**: Es nuestra aplicación de Express. A través de esta variable, vamos a configurar y manejar todo lo relacionado con nuestro servidor.

##### ¿Para qué sirve esta instancia?

Una vez que tienes tu instancia de Express (`app`), puedes usarla para:

1. **Definir rutas**: Decirle a tu servidor qué hacer cuando alguien visita una dirección específica (como `/inicio` o `/contacto`).
2. **Manejar solicitudes y respuestas**: Recibir datos de los usuarios y enviarles respuestas (como un mensaje o una página web).
3. **Configurar opciones**: Agregar funcionalidades adicionales, como manejar datos en formato JSON o habilitar CORS.

##### ¿Por qué es importante crear una instancia?

Porque sin una instancia de Express, no podrías:

- Definir rutas.
- Manejar solicitudes y respuestas.
- Configurar tu servidor.

Es como si tuvieras un kit de construcción pero no sacaras las herramientas: no podrías construir nada. 

---

#### 4.- Configurar [[Middleware]]

```JS
app.use(express.json());
app.use(cors());
```

- **`express.json()`**: Este middleware **permite que nuestro servidor entienda y procese datos en formato JSON** y no solo datos en JS (_JSON es un formato común para enviar y recibir datos_).

- **`cors()`**: Este middleware **permite que otras aplicaciones o servicios puedan hacer solicitudes a nuestro servidor** desde **diferentes dominios**.

---

#### 5.- Definición de rutas y métodos HTTP


---

#### 6.- Iniciar el servidor

```JS
app.listen(PORT, () => {
  console.log("Server is running on port ${port}");
  console.log("Server ir running in http://localhost:"+PORT);
});
```

- **`app.listen(PORT, ...)`**: **Inicia el servidor** y lo pone a escuchar en el puerto definido (`PORT`).
    
- **`console.log(...)`**: **Muestra un mensaje en la consola** indicando que el servidor está corriendo y en qué dirección puedes acceder a él.
