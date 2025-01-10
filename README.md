# interfaz-cine
 Práctica de recuperación de Diseño de Interfaces Web, 1º trimestre.

 ## Flujo de trabajo:
   1. Wireframing y prototipado (en papel)
   2. Preparación de todo el ecosistema de desarrollo [Documentación](https://getbootstrap.esdocu.com/docs/5.3/getting-started/vite/)
   - Crear el repositorio
   - Instalar Bootstrap
     1. Inicializar el proyecto creando el package.json con: `npm init -y`
     2. Instalar Vite: `npm i --save-dev vite`
     3. Instalar Bootstrap y Popper: `npm i --save bootstrap @popperjs/core`
   - Instalar SASS: `npm i --save-dev sass`
   - Estructurar el proyecto:
     1. Crear el directorio src con sus subdirectorios js y scss
     2. Crear src/index.html, src/js/main.js, src/scss/styles.scss y vite.config.js
     3. Configurar Vite
     4. Crear el script npm para ejecutar Vite e iniciar Vite con `npm start`
     5. Comprobar que Vite se carga desde index.html
     6. Importar Bootstrap en styles.scss
     7. Importar el JavaScript de Bootstrap
     8. Comprobar que todo funciona correctamente
   3. Diseño de las 5 páginas
   - Página principal
   - Página películas
   - Página película
   - Página selección de asientos
   - Página pago
   4. Integración de SASS
   - Importar el archivo styles.scss desde main.js
   - Importar el archivo bootstrap.scss desde styles.scss
   - Utilizar el compilador de SASS para generar el archivo styles.css.
   - Aplicar styles.css al head de cada html.  Contiene todo el css asociado a cada clase de Bootstrap.
   - Por último, añadir el cdn de Bootstrap en un script al final del body para que el JS asociado a los componentes de Bootstrap funcione una vez desplegada la web.
   5. Subir web a Netlify
   6. Crear el PDF
   7. Preparar presentación

Enlaces importantes:
[Instalación de Bootstrap](https://getbootstrap.esdocu.com/docs/5.3/getting-started/)
[Componentes con Bootstrap](https://getbootstrap.esdocu.com/docs/5.3/components/)
[Tipografía con Bootstrap](https://getbootstrap.esdocu.com/docs/5.1/content/typography/)
[Espaciado con Bootstrap](https://getbootstrap.com/docs/4.0/utilities/spacing/)
[Ejemplos con Bootstrap](https://getbootstrap.esdocu.com/docs/5.3/examples/)
[Navbar con Bootstrap](https://getbootstrap.esdocu.com/docs/5.3/components/navbar/)
[Control de texto con Bootstrap](https://getbootstrap.esdocu.com/docs/5.1/utilities/text/)
[Uso de flex con Bootstrap](https://getbootstrap.com/docs/5.0/utilities/flex/)
