# Consigna del Trabajo Práctico: La Librería Book Haven

## Habilidades a Desarrollar:

- Utilizar React Router para controlar rutas y redireccionamientos.
- Utilizar Context API para almacenar y modificar el estado global.
- Manejar el estado local con hooks (useState, useEffect, useContext).
- Realizar peticiones asíncronas utilizando fetch con async y await.
- Implementar validaciones y vistas de error.
- Aplicar estilos CSS y diseño de interfaces web responsivas.

## Descripción del Proyecto:

La librería Book Haven necesita una aplicación web para mostrar y vender sus libros. Esta app deberá mostrar los distintos libros disponibles junto con sus detalles, permitiendo a los usuarios añadir libros a un carrito de compras.

## Requerimientos del Proyecto:

1. Estructura del Proyecto:

   - Crear vistas y componentes dentro de las carpetas: components, context, assets, y views.

2. Crear las Rutas:

   - /Home: Mostrar el catálogo de libros en formato de cuadrícula con 3 columnas.
   - /book/:id: Mostrar el detalle de un libro seleccionado en el catálogo.
   - /cart: Mostrar los libros añadidos al carrito con sus precios y total a pagar.
   - /not-found: Mostrar una vista de "Página no encontrada" con un botón para volver al inicio.

3. Estado Global:

   - Usar Context API para manejar el estado global de la aplicación, incluyendo la lista de libros y el carrito de compras.

4. Funciones de Carrito:

   - Implementar la lógica en el carrito para incrementar y decrementar la cantidad de libros a comprar.
   - Calcular el total de la compra y mostrarlo en los componentes correspondientes..

5. Peticiones Asíncronas:

   - Utilizar fetch con async y await para obtener los datos de un archivo JSON proporcionado.
   - Manejar errores de carga y mostrar mensajes apropiados al usuario.

6. Validaciones y Vistas de Error:

   - Implementar una vista para manejar páginas no encontradas (404) que incluya un botón para volver al inicio.

7. Estilos y Diseño:

   - Utilizar una paleta de colores con los siguientes valores:
     - Fondo: #242424
     - Colores adicionales: #A0D2DB, #2E2E3A, #9B2915, #32746D, #542b24,#F2F3D9
   - Aplicar estilos CSS para asegurar que los libros se muestren en formato de cuadrícula.

8. Alertas y Mensajes:

   - Mostrar una alerta cuando un libro sea añadido al carrito con éxito.
