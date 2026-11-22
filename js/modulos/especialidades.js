

export function mostrarEspecialidades(catalogo, contenedor, alSeleccionar) {


    const seccion = document.createElement("section");
    seccion.id = "categorias";

    const titulo = document.createElement("h2");
    titulo.textContent = "Categorías";

    const descripcion = document.createElement("p");
    descripcion.textContent = "Explora tu colección de recursos médicos.";

    const contenedorCategorias = document.createElement("div");
    contenedorCategorias.className = "contenedor_categorias";

    catalogo.forEach(especialidad => {

        const boton = document.createElement("button");
        boton.className = "boton-categorias";
        boton.textContent = especialidad.nombre;

        boton.addEventListener("click", () => {
            console.log("Especialidad seleccionada:", especialidad.nombre);

            alSeleccionar(especialidad);


        });

        contenedorCategorias.appendChild(boton);

    });

    seccion.appendChild(titulo);
    seccion.appendChild(descripcion);
    seccion.appendChild(contenedorCategorias);

    contenedor.appendChild(seccion);
}
