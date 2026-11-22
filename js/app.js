

import { cargarCatalogo } from "./modulos/catalogo.js";

import { iniciarNavegacion } from "./modulos/navegacion.js";


async function iniciarAplicacion() {

    try {
        const catalogo = await cargarCatalogo();

        console.log("Catálogo cargado correctamente:");
        console.log(catalogo);

        const contenedor = document.getElementById("contenido");

        iniciarNavegacion(catalogo, contenedor);

    } catch (error) {
        console.error("Error al iniciar la aplicación:", error);
    }



}

iniciarAplicacion();
