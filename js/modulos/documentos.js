

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

    const titulo = document.createElement("h2");
    titulo.textContent = especialidad.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = "Explora tu colección de recursos médicos.";

    const contenedorDocumentos = document.createElement("div");
    contenedorDocumentos.className = "contenedor_documentos";

    especialidad.documentos.forEach(documento => {

        const doc = document.createElement("h3");
        doc.textContent = documento.metadatos?.TITULO || documento.nombre;
        doc.className = "documento-nombre";

        const doc_tipo = document.createElement("p");
        doc_tipo.textContent = doc_tipo.textContent = `Curso: ${documento.metadatos?.CURSO || "No especificado"} || ${documento.metadatos?.TIPO_DOCUMENTO || "No especificado"}`;
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

    seccion.appendChild(barraSuperior);
    seccion.appendChild(titulo);
    seccion.appendChild(descripcion);
    seccion.appendChild(contenedorDocumentos);

    contenedor.appendChild(seccion);
}
