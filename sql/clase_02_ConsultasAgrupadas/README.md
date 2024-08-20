### Creacion de base de datos

- `CREATE DATABASE my_database`

### Conectarse a la base de datos

- `\c my_database`

### Listar todas las bases de datos

- `\l`

### Crear la tabla monedas

- `CREATE TABLE monedas (nombre VARCHAR(50));`

### Listar todas las tablas

- `\dt`

### Insertar datos a la tabla monedas

```
INSERT INTO monedas (nombre) VALUES
('Guarani'),
('Rupiah'),
('Ruble'),
('Peso'),
('Peso'),
('Yuan Renminbi'),
('Yuan Renminbi'),
('Yuan Renminbi'),
('Euro'),
('Ariary'),
('Denar'),
('Rupiah'),
('Ruble'),
('Yuan Renminbi'),
('Lek');

```

### Verificar los datos ingresados

- `SELECT * FROM monedas;`

## Consutas y REPORTES

- ### Selecciones

  - `SELECT count(*) FROM monedas;`

    > Contamos todos los registros

  - `SELECT count(*) FROM monedas where nombre = 'Peso'`

    > Contamos todos los registros cuya nombre sea Peso

  - `SELECT count(*) FROM monedas where nombre = 'Peso' or nombre = 'Euro'`

    > Contamos todos los registros cuya nombre sea Peso o Euro

  - `SELECT distinct(nombre) FROM monedas`

    > Listamos todas las monedas con distinto nombre

  - `SELECT count(distinct(nombre)) FROM monedas`

    > Contamos todas las monedas con distinto nombre

  - `SELECT nombre, count(*) FROM monedas group by nombre;`

    > Listar cuantas veces aparece cada registrp repetido

### Crear la tabla monedas

- `CREATE TABLE ventas (categoria VARCHAR(50), monto INT);`

### Listar todas las tablas

- `\dt`

### Insertar datos a la tabla monedas

```
INSERT INTO ventas (categoria, monto) values
('Books', 214),
('Games', 293),
('Baby', 241),
('Tools', 719),
('Tools', 385),
('Movies', 882),
('Outdoors', 654),
('Baby', 332),
('Grocery', 332),
('Toys', 952),
('Games', 682),
('Books', 527),
('Kids', 980),
('Grocery', 300);

```

### Verificar los datos ingresados

- `SELECT * FROM ventas;`

## Comando para tablas agrupadas

- `SELECT nombre, count(*) FROM monedas group by nombre;`
  | Comando | Descripcion |
  | :---: | ---- |
  | `GROUP BY` | Agrupa los resultados por el valor de la columna nombre, permitiendo realizar operaciones de agregación en cada grupo. |

- `SELECT SUM(monto) AS total_monto FROM ventas;` Calcular la suma total de todos los montos en la tabla ventas:
  | Comando | Descripcion |
  | :---: | ---- |
  | `SUM()` | Calcula la suma total de todos los valores en la columna monto. |

- `SELECT categoria, SUM(monto) AS total_monto FROM ventas GROUP BY categoria;` Suma los montos por categoria en la tabla ventas

- `SELECT categoria, AVG(monto) AS promedio_monto FROM ventas GROUP BY categoria;` Calcula el monto promedio por categoria en la tabla ventas
  | Comando | Descripcion |
  | :---: | ---- |
  | `AVG()` | Calcula el valor promedio de todos los valores en la columna monto para cada categoría.|

- `SELECT MAX(monto) AS monto_maximo FROM ventas;` Encuentra el monto maximo en la tabla ventas
  | Comando | Descripcion |
  | :---: | ---- |
  | `MAX()` | Encuentra el valor máximo en la columna monto.|

- `SELECT categoria, MIN(monto) AS monto_minimo FROM ventas GROUP BY categoria;` Encuentra el monto minimo en la tabla ventas
  | Comando | Descripcion |
  | :---: | ---- |
  | `MIN()` | Encuentra el valor mínimo en la columna monto para cada categoría.|

## Diferencia entre WHERE Y HAVING

- `SELECT categoria, monto FROM ventas WHERE monto > 500` Muestra todas las ventas donde monto sea mayor a 500
  | Comando | Descripcion |
  | :---: | ---- |
  | `WHERE` | Filtra los registros de la tabla ventas y solo muestra aquellos donde el monto sea mayor a 500 |

- `SELECT categoria, SUM(monto) AS total_monto FROM ventas  GROUP BY categoria HAVING SUM(monto) > 1000;` Muestra la categoria de ventas donde tienen un monto total o superor a 1000
  | Comando | Descripcion |
  | :---: | ---- |
  | `HAVING` | Filtra las categorias de venta despues de aplicar la funcion `SUM` |

- `SELECT categoria, SUM(monto) as total_monto FROM ventas WHERE monto > 200 GROUP BY categoria HAVING SUM(monto) > 1000;`
  | Comando | Descripcion |
  | :---: | ---- |
  | `HAVING` | Filtra las categorías agrupadas donde la suma total `(SUM(monto))` es superior a 1000. |
  | `WHERE` | Filtra las ventas individuales donde monto es mayor a 200. |

### COMPARACION

| `WHERE`                                                                                                                                             | `HAVING`                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Se usa para filtrar registros antes de cualquier operación de agrupamiento. No se puede usar con funciones de agregado como SUM o AVG directamente. | Se usa para filtrar grupos de registros, después de que se haya aplicado una operación de agrupamiento. Se utiliza principalmente con funciones de agregado para restringir los resultados agrupados. |

## REALIZAR SUBCONSULTAS

- `SELECT categoria, monto FROM ventas WHERE monto > (SELECT AVG(monto) FROM ventas);` Encuentra todas las categorias de ventas cuyyo
  | Comando | Descripcion |
  | :---: | ---- |
  | `WHERE` |Filtra las ventas donde el monto es mayor al promedio calculado por la subconsulta (SELECT AVG(monto) FROM ventas). |

- `SELECT categoria, total_monto  FROM (SELECT categoria, SUM(monto) as total_monto FROM ventas GROUP BY categoria) as subquery WHERE total_monto > 1000;`
  | Comando | Descripcion |
  | :---: | ---- |
  | `FROM` | Filtra las ventas donde el monto es mayor al promedio calculado por la subconsulta (SELECT AVG(monto) FROM ventas). |

- `SELECT categoria FROM ventas WHERE categoria IN (SELECT nombre FROM monedas)`
  | Comando | Descripcion |
  | :---: | ---- |
  | `IN` | Filtra las categorías de ventas que coinciden con algún nombre en la tabla monedas. |
