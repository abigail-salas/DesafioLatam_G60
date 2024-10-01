## EXPRESS

Express es un framework de JS para la creacion de servidores y API REST en un entorno Node JS

## Creacion del servidor

### Inicializar un servidor con express

- Inicializacion: `npm init -y`

  > No puede tener mayusculas las carpetas

- Instalacion: `npm i express`

- Levantar el servidor: `node index.js`

### `app`:

- **Descripción**: `app` es la instancia de la aplicación Express. Es el objeto principal que se usa para configurar y manejar el servidor. Cuando llamas a `express()`, estás creando una nueva aplicación de Express. A través de esta instancia, puedes definir rutas, configurar middleware, manejar solicitudes y respuestas, entre otras cosas.

### `app.listen(3000, console.log("¡Servidor encendido!"))`:

- **Descripción**: `app.listen` se utiliza para iniciar el servidor. Este método le dice a la aplicación Express que escuche las conexiones en un puerto específico. Cuando el servidor comienza a escuchar, se ejecuta una función de callback.
- **Parámetros**:
  - `3000`: El número de puerto donde el servidor escuchará las solicitudes HTTP (Se puede cambiar).
  - `console.log("¡Servidor encendido!")`: Una función de callback que se ejecuta cuando el servidor está listo para recibir conexiones.

### Metodos HTTPS

Los metodos HTTP son las principales formas en las que los clientes interactuan con los servidores.

1. **GET**

   - **Descripcion**: Se utiliza para solicitar datos de un servidor sin modifica ni alterar los datos en el sercidor.
   - **Usos**: Se lo suele utilizar para obtener informacion de una API, uan lista de productos o usuarios y/o mostrar las informacion en paginas web

2. **POST**

   - **Descripcion**: Se utiliza para enviar datos al sercidor y crear nuevos recursos. A diferencia de GET, POST puede cambiar el estado del servidor al agregar informacion nueva.
   - **Usos**: Se lo suele utilizar para enviarformularios, nuevos usuarios, registros, nuevos productos y/o crear un nuevo recurso en la base de datos.

3. **PUT**

   - **Descripción**: Se utiliza para actualizar un recurso existente en el servidor o crear uno si no existe (aunque crear con PUT es menos común).
   - **Usos**: Actualizar la información completa de un recurso existente. Reemplazar completamente el estado de un recurso con nuevos datos.

4. **DELETE**

   - **Descripción**: Se utiliza para eliminar un recurso en el servidor.
   - **Usos**: Eliminar un recurso de la base de datos (como borrar un producto o eliminar una cuenta de usuario).

### Resumen comparativo:

| Método     | Descripción                                |
| ---------- | ------------------------------------------ |
| **GET**    | Solicitar información sin modificar nada   |
| **POST**   | Crear un nuevo recurso en el servidor      |
| **PUT**    | Actualizar/reemplazar un recurso existente |
| **DELETE** | Eliminar un recurso del servidor           |

### res (Response)

**Descripcion**: Es el objeto de repuesta

- `res.send()`: Envia una respuesta en formato texto o HTML
- `res.json()`: Envia una respuesta en formato JSON
- `res.status()`: Es paara definir el codigo HTTP (200, 404, 500)

### req (Request)

**Descripcion**: Es el objeto de solicitud

- `req.params`: Parametros de ruta
- `req.query`: Parametros de consulta (despues del ?)
- `req.body`: Datos enviados en el cuerpo de la solicitud

### `app.use(express.json())`:

- **Descripción**: Esta línea es un middleware que permite que tu aplicación Express pueda interpretar y manejar los datos enviados en formato JSON a través de solicitudes HTTP. En otras palabras, esta función toma el cuerpo de la solicitud HTTP (enviado en formato JSON) y lo convierte en un objeto JavaScript accesible desde `req.body`.

  > Express, por defecto, no puede entender el formato JSON que envía un cliente en el cuerpo de una solicitud (como con el método POST). Este middleware se asegura de que cada vez que se recibe una solicitud con contenido JSON, la aplicación pueda procesarlo correctamente.

- **Usos**: Se utiliza especialmente cuando necesitas manejar datos que el cliente envía en formato JSON, por ejemplo, en una solicitud `POST` o `PUT`.

  > Al recibir esta solicitud en el servidor, sin `express.json()`, no podrías acceder a estos datos en `req.body`. Con el middleware, los datos se transforman en un objeto JavaScript al que puedes acceder fácilmente.
