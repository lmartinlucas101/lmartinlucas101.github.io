


function mostrarInfecciosas() {

    const contenido = document.getElementById("contenido");

    contenido.innerHTML = `
        <div class="titulo-seccion">
            <h2>Infecciosas</h2>

            <button class="boton-volver"
                onclick="mostrarCategorias()">
                ↶
            </button>
        </div>

        <h3>Mis infografías</h3>

        <div class="contenedor-documentos">

            <div class="documento">
                <span>Infecciosas.pdf</span>

                <div class="acciones-documento">

                    <a href="infografias/infecciosas/Infecciosas.pdf"
                       target="_blank"
                       rel="noopener"
                       class="boton-ver">
                        Ver en web
                    </a>

                    <a href="infografias/infecciosas/Infecciosas.pdf"
                       download
                       class="boton-descargar">
                        Descargar
                    </a>

                </div>
            </div>

            <div class="documento">
                <span>Atlas infografias Infecciosas.pdf</span>

                <div class="acciones-documento">

                    <a href="infografias/infecciosas/Atlas infografias Infecciosas.pdf"
                       target="_blank"
                       rel="noopener"
                       class="boton-ver">
                        Ver en web
                    </a>

                    <a href="infografias/infecciosas/Atlas infografias Infecciosas.pdf"
                       download
                       class="boton-descargar">
                        Descargar
                    </a>

                </div>
            </div>

        </div>
    `;
}



function mostrarTraumatologia() {

    const contenido = document.getElementById("contenido");

    contenido.innerHTML = `
        <div class="titulo-seccion">
            <h2>Traumatología</h2>

            <button class="boton-volver"
                onclick="mostrarCategorias()">
                ↶
            </button>
        </div>

        <h3>Mis infografías</h3>

        <div class="contenedor-documentos">

            <div class="documento">
                <span>Traumatología.pdf</span>

                <div class="acciones-documento">

                    <a href="infografias/traumatologia/Traumatología.pdf"
                       target="_blank"
                       rel="noopener"
                       class="boton-ver">
                        Ver en web
                    </a>

                    <a href="infografias/traumatologia/Traumatología.pdf"
                       download
                       class="boton-descargar">
                        Descargar
                    </a>

                </div>
            </div>


        </div>
    `;
}

function mostrarCategorias() {

    const contenido = document.getElementById("contenido");

    contenido.innerHTML = `
        <section id="presentacion">
            <h2>Biblioteca médica</h2>
            <p>Encuentra y consulta tus infografías médicas.</p>
        </section>

        <section id="categorias">
            <h2>Categorías</h2>

            <div class="contenedor_categorias">
                <button class="boton-categorias" onclick="mostrarInfecciosas()">
                    Infecciosas
                </button>

                <button class="boton-categorias" onclick="mostrarTraumatologia()">
                    Traumatología
                </button>
            </div>
        </section>
    `;

}
