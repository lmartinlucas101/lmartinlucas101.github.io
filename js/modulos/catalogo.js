
export async function cargarCatalogo() {

    const respuesta = await fetch("catalogo.json");

    if (!respuesta.ok) {
        throw new Error("No se ha podido cargar el catálogo");
    }

    const catalogo = await respuesta.json();

    return catalogo;
}
