document.addEventListener("DOMContentLoaded", () => {
    const containerList = document.querySelector(".container-list");
    const searchInput = document.getElementById("search");

    // Función para obtener los productos
    async function fetchProducts(query = "") {
        let url = "http://localhost:3000/";
        if (query) url += `search/?name=${encodeURIComponent(query)}`;
        
        const response = await fetch(url);
        const products = await response.json();
        renderProducts(products);
    }

    // Renderizar productos
    function renderProducts(products) {
        containerList.innerHTML = ""; // Limpia el contenido
        products.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <h3 class="card-title">${product.name}</h3>
                <p class="card-stock">Stock: ${product.stock}pz</p>
                <div>
                    <button class="card-button card-button_delete" data-id="${product._id}">
                        <i class="bi bi-trash-fill"></i> 
                    </button>
                    <span class="card-precio">$${product.price.toFixed(2)}</span>
                </div>
            `;
            containerList.appendChild(card);
        });

        // Agregar funcionalidad a los botones de eliminar
        document.querySelectorAll(".card-button_delete").forEach(button => {
            button.addEventListener("click", async (event) => {
                event.preventDefault(); // Evita el comportamiento predeterminado
                
                const id = button.getAttribute("data-id");

                // Mostrar alerta de confirmación con SweetAlert
                Swal.fire({
                    title: "¿Estás seguro?",
                    text: "Este producto será eliminado.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Sí, eliminar",
                    cancelButtonText: "Cancelar",
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        // Eliminar el producto de la base de datos
                        await fetch(`http://localhost:3000/${id}`, { method: "DELETE" });
                        
                        // Mostrar mensaje de éxito
                        Swal.fire({
                            title: "¡Eliminado!",
                            text: "El producto ha sido eliminado con éxito.",
                            icon: "success",
                            confirmButtonText: "Aceptar",
                        });

                        // Actualizar la lista
                        fetchProducts();
                    }
                });
            });
        });
    }

    // Búsqueda en tiempo real
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim();
        fetchProducts(query);
    });

    // Obtener productos al cargar la página
    fetchProducts();
});
