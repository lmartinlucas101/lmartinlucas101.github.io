@echo off
cd /d "%~dp0"

echo =================================
echo      ACTUALIZANDO INTERNISTA GPT
echo =================================

python generar_catalogo.py

echo.
echo Proceso finalizado.
pause