
from pathlib import Path
import json

BASE = Path(__file__).parent
CARPETA_INFOGRAFIAS = BASE / "infografias"
Formatos = [".jpg", ".png", ".pdf", ".jpeg", ".webp"]
catalogo = []
CAMPOS_MULTIPLES = ["PALABRAS_CLAVE", "TEMAS", "PATOLOGIAS"]

if CARPETA_INFOGRAFIAS.exists():
    print("Carpeta de infografías encontrada")
else:
    print("No se encuentra la carpeta de infografías")

for carpeta in CARPETA_INFOGRAFIAS.iterdir():
    if carpeta.is_dir():
        print(carpeta.name)
        documentos = []

        for archivo in carpeta.iterdir():
            if archivo.is_file() and archivo.suffix.lower() in Formatos:

                metadatos = {}
                ruta_txt = archivo.with_suffix(".txt")

                if ruta_txt.exists():
                    with open(ruta_txt, "r", encoding="utf-8") as archivo_txt:
                        contenido = archivo_txt.read()

                    for linea in contenido.splitlines():
                        if ":" in linea:
                            campo, valor = linea.split(":", 1)
                            campo = campo.strip()
                            valor = valor.strip()
                            if campo in CAMPOS_MULTIPLES:
                                metadatos[campo] = [
                                    elemento.strip()
                                    for elemento in valor.split(";")
                                    if elemento.strip()
                                ]
                            else:
                                metadatos[campo] = valor

                documentos.append({
                    "nombre": archivo.name,
                    "ruta": archivo.relative_to(BASE).as_posix(),
                    "metadatos": metadatos
                })

        catalogo.append({
            "nombre": carpeta.name,
            "documentos": documentos,
        })

with open(BASE / "catalogo.json", "w", encoding="utf-8") as archivo:
    json.dump(catalogo, archivo, ensure_ascii=False, indent=4)

print("Catálogo generado correctamente.")
