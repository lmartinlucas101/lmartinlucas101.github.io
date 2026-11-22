

export function mostrarEspecialidades(catalogo, contenedor, alSeleccionar) {


    const seccion = document.createElement("section");
    seccion.id = "categorias";

    const titulo = document.createElement("h2");
    titulo.textContent = "Especialidades";

    const descripcion = document.createElement("p");
    descripcion.textContent = "Explora tu colección de recursos médicos.";

    const contenedorCategorias = document.createElement("div");
    contenedorCategorias.className = "contenedor_categorias";

    catalogo.forEach(especialidad => {

        const boton = document.createElement("button");
        boton.className = "boton-categorias";

        // Creamos la imagen de la especialidad
        const imagen = document.createElement("img");
        imagen.src = `infografias/${especialidad.nombre}.png`;
        imagen.alt = especialidad.nombre;
        imagen.className = "imagen-categoria";

        // Creamos el nombre de la especialidad
        const nombre = document.createElement("span");
        nombre.textContent = especialidad.nombre;

        // Introducimos ambos elementos en el botón
        boton.appendChild(imagen);
        boton.appendChild(nombre);

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
