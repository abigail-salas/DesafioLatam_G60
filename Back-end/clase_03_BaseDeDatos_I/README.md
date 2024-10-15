## Requisitos:

1. Crear base de datos llamada _*gestion_usuarios*_
2. Crea una tablas llamada _usuarios_ con las siguientes columnas:
   - id
   - nombre
   - apellido
   - edad
   - pais

## Consultas:

- Agregar a cada usuario individualmente desde el pedido **POST** a la ruta `/usuarios`
- Devolver con un pedido **GET** a todos los usuarios encontrados en la ruta `/usuarios`
- Devolver solo a los usuarios mayor de edad mediante un pedido **GET** a la ruta `/usuarios/mayores`
- Devolver a los usuarios que pertenezcan a un pais en especifico mediante un pedido **GET** a la ruta `/usuarios/:pais` <!-- ":pais" para poder utilizar este parametro pueden trabajar con req.params a la hora de hacer su peticion -->

## Rutas:

- `/usuarios` para todos los usuarios
- `/usuarios/mayores` para los usuarios mayores de edad
- `/usuarios/:pais` para filtrar a usuarios por un pais en especifico

---

### Ejercicio: Gestión de Recetas

#### Descripción:

Serás un desarrollador que debe construir un servidor Express para gestionar una base de datos de recetas. El servidor debe permitir a los usuarios agregar nuevas recetas y consultar las recetas existentes desde una base de datos PostgreSQL utilizando las rutas **GET** y **POST**.

#### Instrucciones para el ejercicio:

1. Crea una base de datos llamada `recetas_db` y una tabla `recetas` con las siguientes columnas:

   - id
   - titulo
   - ingredientes
   - preparacion
   - tiempo

2. Desarrolla las siguientes rutas en Express:
   - **GET** `/recetas`: Devuelve todas las recetas almacenadas en la base de datos.
   - **POST** `/recetas`: Permite agregar una nueva receta a la base de datos. Debe recibir `titulo`, `ingredientes`, `preparacion`, y `tiempo` en el cuerpo de la solicitud.

#### Requerimientos:

1. Habilitar CORS en el servidor.
2. Usar el paquete `pg` para conectarse a la base de datos.
3. Crear una ruta `GET` con Express para devolver los registros de la tabla `recetas`.
4. Crear una ruta `POST` con Express para recibir y almacenar una nueva receta en PostgreSQL.
