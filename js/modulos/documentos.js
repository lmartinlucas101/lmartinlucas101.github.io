
function normalizar(texto) {
    return String(texto ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}


export function mostrarDocumentos(especialidad, contenedor, alVolver) {

    const seccion = document.createElement("section");
    seccion.id = "documentos";

    const barraSuperior = document.createElement("div");
    barraSuperior.className = "barra-superior";

    const botonVolver = document.createElement("button");
    botonVolver.className = "boton-volver";
    botonVolver.textContent = "← Volver a categorías";
    botonVolver.addEventListener("click", () => {

        alVolver();

    });

    barraSuperior.appendChild(botonVolver);

    const buscador = document.createElement("input");
    buscador.type = "search";
    buscador.placeholder = "Buscar por título, palabra clave o patología...";
    buscador.className = "buscador-documentos";

    const titulo = document.createElement("h2");
    titulo.textContent = especialidad.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = "Explora tu colección de recursos médicos.";

    const contenedorDocumentos = document.createElement("div");
    contenedorDocumentos.className = "contenedor_documentos";

    function mostrarResultados(busqueda = "") {

        contenedorDocumentos.innerHTML = "";

        const termino = normalizar(busqueda);

        const documentosFiltrados = especialidad.documentos.filter(documento => {

            const metadatos = documento.metadatos || {};

            const camposBusqueda = [
                metadatos.TITULO || documento.nombre,
                ...(metadatos.PALABRAS_CLAVE || []),
                ...(metadatos.PATOLOGIAS || [])
            ];

            return camposBusqueda.some(campo =>
                normalizar(campo).includes(termino)
            );

        });

        documentosFiltrados.forEach(documento => {

            const doc = document.createElement("h3");
            doc.textContent = documento.metadatos?.TITULO || documento.nombre;
            doc.className = "documento-nombre";

            const doc_tipo = document.createElement("p");
            doc_tipo.textContent = `Curso: ${documento.metadatos?.CURSO || "No especificado"} || ${documento.metadatos?.TIPO_DOCUMENTO || "No especificado"}`;
            doc_tipo.className = "documento-tipo";

            const botonVer = document.createElement("a");
            botonVer.className = "boton-ver";
            botonVer.textContent = "Ver";
            botonVer.href = documento.ruta;
            botonVer.target = "_blank";

            const botonDescargar = document.createElement("a");
            botonDescargar.className = "boton-descargar";
            botonDescargar.textContent = "Descargar";
            botonDescargar.href = documento.ruta;
            botonDescargar.download = documento.nombre;

            const tarjetaDocumento = document.createElement("div");
            tarjetaDocumento.className = "tarjeta-documento";

            const tarjetaBotones = document.createElement("div");
            tarjetaBotones.className = "tarjeta-botones";

            const tarjetaTexto = document.createElement("div");
            tarjetaTexto.className = "tarjeta-texto";

            tarjetaTexto.appendChild(doc);
            tarjetaTexto.appendChild(doc_tipo);

            tarjetaDocumento.appendChild(tarjetaTexto);

            tarjetaBotones.appendChild(botonVer);
            tarjetaBotones.appendChild(botonDescargar);

            tarjetaDocumento.appendChild(tarjetaBotones);

            contenedorDocumentos.appendChild(tarjetaDocumento);

        });

        if (documentosFiltrados.length === 0) {
            const mensaje = document.createElement("p");
            mensaje.textContent = "No se han encontrado documentos.";
            mensaje.className = "mensaje-sin-resultados";
            contenedorDocumentos.appendChild(mensaje);
        }
    }

    buscador.addEventListener("input", () => {
        mostrarResultados(buscador.value);
    });

    mostrarResultados();

    seccion.appendChild(barraSuperior);
    seccion.appendChild(buscador);
    seccion.appendChild(titulo);
    seccion.appendChild(descripcion);
    seccion.appendChild(contenedorDocumentos);

    contenedor.appendChild(seccion);
}
