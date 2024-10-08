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

### Opcional:

- Devolver solo a los usuarios mayor de edad mediante un pedido **GET** a la ruta `/usuarios/mayores`
- Devolver a los usuarios que pertenezcan a un pais en especifico mediante un pedido **GET** a la ruta `/usuarios/:pais` <!-- ":pais" para poder utilizar este parametro pueden trabajar con req.params a la hora de hacer su peticion -->

## Rutas:

- `/usuarios` para todos los usuarios
- `/usuarios/mayores` para los usuarios mayores de edad
- `/usuarios/:pais` para filtrar a usuarios por un pais en especifico
