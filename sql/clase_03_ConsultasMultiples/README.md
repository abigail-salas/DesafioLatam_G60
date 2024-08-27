### Creacion de la base de datos

- `CREATE DATABASE my_database`

### Conectar a base de datos

- `\c my_database`

### Listar todas las bases de datos

- `\l`

### Crear la tabla posts

- `CREATE TABLE posts(id SERIAL, title VARCHAR, content TEXT)`

### Listar todas las tablas

- `\dt`

### Insertar datos

```
INSERT INTO posts (title, content) VALUES
('Articulo 1', 'LOREM IPSUM DOLOR AMET...')
('Articulo 2', 'LOREM IPSUM DOLOR AMET...')
```

### Crear la tabla comments

- `CREATE TABLE comments(id SERIAL, content TEXT, post_id INTEGER)`

### Listar todas las tablas

- `\dt`

### Insertar datos

```
INSERT INTO comments (content, post_id) VALUES
('Comentario 1', 1),
('Comentario 2', 1),
('Comentario 1', 2)
```

## Comandos para multiples tablas

- `SELECT * FROM comments, posts WHERE post_id = id;` <!-- Funcina si ponen posts.id o comments.id -->
  | Comando | Descripcion |
  | :---: | ---- |
  | `FROM comments, posts` | Indica las tablas comments y post de las cuales de seleccionan los datos |
  | `WHERE post_id = id;` | Filtra los registros donde el valor de post_id en comments coincide con el valor id en post |

  > Este comando combina las tablas "comments" y "posts" y devuelve solo los registros en los que post_id y id coincidan

- `SELECT posts.*, comments.* FROM comments, posts WHERE post_id = post.id;`
  | Comando | Descripcion |
  | :---: | ---- |
  | `SELECT posts.*, comments.*` | Selecciona todas las columnas de la tabla "posts" y "comments", pero las muestra de manera especifica para cada tabla |

  > Devuelve todas las columnas de la tabla "post" y "comments" para los registros donde post_id coincide con id de la tabla post. Esto permite ver de manera mas claro qué columnas pertenecen a cada tabla.

## Comando UPDATE

- `UPDATE comments SET post_id = NULL WHERE content = 'comentario 2' OR post_id = 2;`
  | Comando | Descripcion |
  | :---: | ---- |
  | `UPDATE` | Indica que vamos a actualizas datos de la tabla |
  | `SET post_id = NULL` | Indica que el valor de la columna post_id se establecera en NULL |
  | `WHERE content = 'comentario 2' OR post_id = 2;` | Condiciones para identificar las filas que serán actualizadas |

### INNER JOIN

- `SELECT * FROM posts INNER JOIN comments ON posts.id = comments.post_id`
  | Comando | Descripcion |
  | :---: | ---- |
  | `INNER JOIN` | Devuelve solo las filas donde hay una coincidencia en ambas tablas |
  | `ON posts.id = comments.post_id` | Establece una condicion de coincidencia |

  > Este comando selecciona todos los campos de las tablas "posts" y "comments", pero solo incluye aquellas filas donde hay una coincidencia entre el id de "posts" y el post_id de "comments". Si un post_id no tiene un comentario correspondiente, esa fila no sera incluida en el resultado.

  - EQUIVALENTE: `SELECT * FROM posts, comments WHERE posts.id = comments.post_id`

- `SELECT posts.title, comments.content FROM posts INNER JOIN comments ON posts.id = comments.post_id`
  | Comando | Descripcion |
  | :---: | ---- |
  | `posts.title, comments.content` | Selecciona los titulos de la tabla "posts" y el contenido de la tabla "comments" |

  > Muestra el titulo de los posts y el contenido de los comentarios

### LEFT JOIN

- `SELECT * FROM posts LEFT JOIN comments ON posts.id = comments.post_id`
  | Comando | Descripcion |
  | :---: | ---- |
  | `LEFT JOIN` | Devuelve todas las filas de la tabla de la izquierda posts y las filas coincidentes de la tabla de la derecha comments. Si no hay coincidencias, los campos de la tabla de la derecha commets se llaman con NULL |

  > Este comando selecciona todos los campos de las tablas "posts" y "comments". Devuelve todas las filas de la tabla posts, incluso si no tienen coincidencia con comments

- `SELECT posts.title, comments.content FROM posts LEFT JOIN comments ON posts.id = comments.post_id`
  | Comando | Descripcion |
  | :---: | ---- |
  | `LEFT JOIN` | Devuelve todas las filas de la tabla posts y las filas coincidentes de la tabla comments. Si no hay coincidencias, los campos de la tabla commets se llaman con NULL |

  > Muestra todos los titulos de los posts y el contenido de los comentarios si existe una coincidencia. Los posts sin comentarios tendrán NULL en el campo de contenido.

### CROSS JOIN

- `SELECT * FROM posts CROSS JOIN comments`
  | Comando | Descripcion |
  | :---: | ---- |
  | `CROSS JOIN` | Combina cada fila de la tabla posts con cada fila de la tabla comments. Esto genera todas las combinaciones posibles entre las filas de ambas tablas |

  > Este comando selecciona todos los campos de la tabla posts y comments y genera un resultado que contiene todas las combianaciones posibles en filas entre las tablas.

  - EQUIVALENTE: `SELECT * FROM posts. comments`

    > Es el quivalente al CROSS JOIN, ya que se omite la condicion de coincidencia.

- `SELECT posts.title, comments.content FROM posts CROSS JOIN comments`
  | Comando | Descripcion |
  | :---: | ---- |
  | `CROSS JOIN` | Combina cada fila de la tabla posts con cada fila de la tabla comments. Esto genera todas las combinaciones posibles entre las filas de ambas tablas |

### FULL JOIN

- `SELECT * FROM posts FULL JOIN comments ON posts.id = comments.post_id`
  | Comando | Descripcion |
  | :---: | ---- |
  | `FULL JOIN` | Devuelve todas las filas cuando hay una coincidencia en una de las tablas o en ambas. Las filas que no tengan coincidencia tendran valores en NULL |

  > Este comando selecciona todos los campos de las tablas posts y comments. El resultado incluirá todas las filas de ambas tablas
  > Si hay una coincidencia entre posts.id y comments.post_id, se muestra la combinacion de ambas filas
  > Si una fila en posts no tiene un comentario correspondiente en comments, se mostrara las fila de posts con valores en NULL para los campos de comments
  > Si una fila en comments no tiene un post correspondiente en posts, se mostrara la fila de comments con valores NULL para los campos posts.

- `SELECT posts.title, comments.content FROM posts FULL JOIN comments ON posts.id = comments.post_id`

## Resumen de todos los JOIN

- ### INNER JOIN

  Devuelve solo las filas que coinciden entre ambas tablas

- ### LEFT JOIN

  Devuelve todas las filas de la tabla de la izquierda con las filas coincidentes de la tabla de la derecha. Devuelve NULL si no hay coincidencias

- ### CROSS JOIN

  Devuelve todas la combinaciones posibles entre las filas de ambas tablas

- ### FULL JOIN

  Devuelve todas las filas de ambas tablas coincidentes o no. Devuelve NULL en las columnas que no tiene coincidencia
