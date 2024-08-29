# Ejercicio de practica VENTAS / PRODUCTOS

#### Creacion de base de datos

- `CREATE DATABASE my_database`

#### Conectarse a la base de datos

- `\c my_database`

#### Listar todas las bases de datos

- `\l`

#### Crear la tabla productos

- `CREATE TABLE productos (id INT, nombre VARCHAR(50), categoria VARCHAR(50), precio INT);`

#### Listar todas las tablas

- `\dt`

#### Insertar datos a la tabla productos

```
INSERT INTO productos (id, nombre, categoria, precio) VALUES
(1, 'Laptop', 'Electrónica', 1000),
(2, 'Celular', 'Electrónica', 600),
(3, 'Cámara', 'Electrónica', 750),
(4, 'Escritorio', 'Muebles', 200),
(5, 'Silla', 'Muebles', 150),
(6, 'Libreta', 'Papelería', 5),
(7, 'Lápiz', 'Papelería', 1),
(8, 'Impresora', 'Electrónica', 300),
(9, 'Monitor', 'Electrónica', 200),
(10, 'Cafetera', 'Electrodomésticos', 80);
```

#### Crear la tabla ventas

- `CREATE TABLE ventas (id INT, producto_id INT, cantidad INT, fecha_venta DATE);`

#### Listar todas las tablas

- `\dt`

#### Insertar datos a la tabla ventas

```
INSERT INTO ventas (id, producto_id, cantidad, fecha_venta) VALUES
(1, 1, 2, '2024-08-01'),
(2, 2, 1, '2024-08-02'),
(3, 1, 1, '2024-08-03'),
(4, 3, 4, '2024-08-03'),
(5, 4, 3, '2024-08-04'),
(6, 2, 2, '2024-08-05'),
(7, 5, 1, '2024-08-05'),
(8, 6, 10, '2024-08-06'),
(9, 7, 20, '2024-08-07'),
(10, 8, 1, '2024-08-08');
```

1. Mostrar el nombre del producto, la categoría y la cantidad vendida para cada venta realizada.

   `SELECT p.nombre, p.categoria, v.cantidad FROM productos p INNER JOIN ventas v on p.id = v.producto_id`

   `SELECT p.nombre, p.categoria, v.cantidad FROM ventas v JOIN productos p ON v.producto_id = p.id;`

2. Calcular el total de ingresos generados por cada categoría de producto.

   `SELECT p.categoria, SUM(p.precio * v.cantidad) AS total_ingresos FROM productos p INNER JOIN ventas v on p.id = v.producto_id GROUP BY p.categoria`

   `SELECT p.categoria, SUM(p.precio * v.cantidad) AS total_ingresos FROM ventas v JOIN productos p ON v.producto_id = p.id GROUP BY p.categoria;`

3. Identificar los productos que no han sido vendidos.

   `SELECT p.nombre FROM productos p LEFT JOIN ventas v on p.id = v.producto_id WHERE v.id is NULL`

4. Calcular la cantidad total vendida y el ingreso generado para cada producto.

   `SELECT p.nombre, SUM(v.cantidad) as total_vendido, SUM(p.precio * v.cantidad) as total_ingresos FROM productos p INNER JOIN ventas v on p.id = v.producto_id GROUP BY p.nombre`

5. Mostrar el nombre y la categoría del producto junto con la fecha en la que se realizó la venta de mayor cantidad para cada producto.

   `SELECT p.nombre, p.categoria, v.fecha_venta, MAX(v.cantidad) AS max_cantidad_vendida FROM productos p INNER JOIN ventas v on p.id = v.producto_id GROUP BY v.fecha_venta, p.nombre, p.categoria ORDER BY max_cantidad_vendida DESC`

6. Mostrar las ventas agrupadas por día y calcular el total de ingresos generados cada día.

   `SELECT v.fecha_venta, SUM(p.precio * v.cantidad) as ingresos_diarios FROM productos p INNER JOIN ventas v on p.id = v.producto_id GROUP by v.fecha_venta`

<!-- ---------------------------------------------------------------------------------------------------------------- -->

# Ejercicio de practica clientes / pedidos

#### Crear la tabla clientes

- `CREATE TABLE CLIENTES (id INT, nombre VARCHAR, email VARCHAR);`

#### Listar todas las tablas

- `\dt`

#### Insertar datos a la tabla clientes

```
INSERT INTO clientes (id, nombre, email) VALUES
(1, 'Juan Perez', 'juan@example.com'),
(2, 'Maria Lopez', 'maria@example.com'),
(3, 'Carlos Ramirez', 'carlos@example.com'),
(4, 'Laura Martinez', 'laura@example.com'),
(5, 'Andres Garcia', 'andres@example.com'),
(6, 'Sofia Fernande', 'sofia@example.com'),
(7, 'Javier Torres', 'javier@example.com'),
(8, 'Ana Rodriguez', 'ana@example.com'),
(9, 'Daniel Sanchez', 'daniel@example.com'),
(10, 'Lucia Herrera', 'lucia@example.com');
```

#### Crear la tabla pedidos

- `CREATE TABLE PEDIDOS (id INT, cliente_id INT, fecha_pedido VARCHAR, total_pedido int);`

#### Listar todas las tablas

- `\dt`

#### Insertar datos a la tabla pedidos

```
INSERT INTO pedidos (id, cliente_id, fecha_pedido, total_pedido) VALUES
(1, 1, '2023-08-25', 150),
(2, 2, '2023-08-26', 220),
(3, 1, '2023-08-27', 75),
(4, 3, '2023-08-27', 430),
(5, 4, '2023-08-28', 120),
(6, 6, '2023-08-28', 300),
(7, 2, '2023-08-29', 50),
(8, 5, '2023-08-30', 180),
(9, 8, '2023-08-31', 260),
(10, 10, '2023-08-31', 90);
```

1. Una vez que tenemos nuestras tablas con datos, nos solicitan que hagamos un cruce con los datos de las tablas clientes y pedidos, mostrando las columnas, nombre, email del cliente y el total del pedido.

   `SELECT c.nombre, c.email, p.total_pedido FROM pedidos p LEFT JOIN clientes c ON c.id = p.cliente_id;`

2. Ahora debemos contar la cantidad de pedidos de cada cliente. La tabla resultante debe mostrar el id y email del cliente, además la cantidad de pedidos de cada usuario.

   `SELECT c.id, c.email, COUNT(p.cliente_id) AS cantidad_pedidos FROM clientes c LEFT JOIN pedidos p ON c.id = p.cliente_id GROUP BY c.id, c.email;`

3. Ahora, deseamos saber cuál es el cliente con más pedidos

   `SELECT c.id, c.email, COUNT(p.cliente_id) AS cantidad_pedidos FROM clientes c LEFT JOIN pedidos p ON c.id = p.cliente_id GROUP BY c.id, c.email ORDER BY cantidad_pedidos DESC LIMIT 1;`

4. A partir de la siguiente tabla, identifica cuáles son los clientes que no han hecho pedidos. Una vez identificado, muestra únicamente el nombre de los que no tengan pedidos realizados.

   `SELECT c.nombre FROM clientes c LEFT JOIN pedidos p ON c.id = p.cliente_id WHERE p.id IS NULL;`
