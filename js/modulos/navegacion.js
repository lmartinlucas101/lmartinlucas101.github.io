

import { mostrarEspecialidades } from "./especialidades.js";
import { mostrarDocumentos } from "./documentos.js";

export function iniciarNavegacion(catalogo, contenedor) {

    function irACategorias() {
        const vista = document.createElement("div");

        mostrarVista(contenedor, vista);
        mostrarEspecialidades(catalogo, vista, irADocumentos);
    }

    function irADocumentos(especialidad) {
        const vista = document.createElement("div");
        mostrarVista(contenedor, vista);
        mostrarDocumentos(especialidad, vista, irACategorias);
    }

    irACategorias();
}

function mostrarVista(contenedor, contenido) {
    contenedor.innerHTML = "";
    contenedor.appendChild(contenido);
}