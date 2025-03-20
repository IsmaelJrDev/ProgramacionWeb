document
  .getElementById("add-product-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("nombre").value.trim();
    const price = parseFloat(document.getElementById("precio").value);
    const stock = parseInt(document.getElementById("stock").value);

    if (!name || isNaN(price) || isNaN(stock)) {
      alert("Por favor completa todos los campos correctamente.");
      return;
    }

    await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price, stock }),
    });

    alert("Producto agregado correctamente.");
    //e.target.reset();
  });

document.getElementById("add-product-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Mostrar alerta de éxito usando SweetAlert
    Swal.fire({
        title: "¡Producto agregado!",
        text: "El producto se ha agregado exitosamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
    });

    // Opcional: reinicia el formulario después de enviarlo
    this.reset();
});
