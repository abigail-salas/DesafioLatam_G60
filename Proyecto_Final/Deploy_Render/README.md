## Integracion del PROYECTO FULLSTACK

### Estructura de Carpetas

Configura tu proyecto con la siguiente estructura:

```
proyecto-fullstack/
├── backend/
│   ├── public/             # Aquí estará el frontend (después de construirlo)
│   │   ├── index.html
│   │   ├── assets/         # Archivos estáticos del frontend
│   ├── controllers/
│   ├── routes/
│   ├── config/             # Configuración (por ejemplo, conexión a DB)
│   ├── server.js
│   ├── package.json
│   └── .env
└── frontend/
    ├── src/
    ├── public/
    ├── dist/               # Archivos construidos (generados por Vite)
    ├── package.json
    └── vite.config.js      # Configuración de Vite
```

### Pasos Detallados

#### 1. Configurar el Backend

- Entra al directorio `backend`:

  ```bash
  cd proyecto-fullstack/backend
  ```

- Instala las dependencias necesarias:

  ```bash
  npm install express dotenv pg
  ```

- Crea un archivo `server.js` en `backend/` con este contenido:

  ```javascript
  const express = require("express");
  const path = require("path");
  const dotenv = require("dotenv");

  dotenv.config();

  const app = express();

  // Middleware para servir el frontend
  app.use(express.static(path.join(__dirname, "public")));

  // API de ejemplo
  app.get("/api", (req, res) => {
    res.json({ message: "¡Hola desde el backend!" });
  });

  // Redirigir cualquier ruta desconocida al frontend
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
  ```

- Agrega un archivo `.env` con tus variables de entorno (por ejemplo, la conexión a PostgreSQL):
  ```
  DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_de_tu_base_de_datos
  ```

#### 2. Configurar el Frontend

- Entra al directorio `frontend`:

  ```bash
  cd ../frontend
  ```

- Instala las dependencias necesarias:

  ```bash
  npm install react react-dom react-router-dom
  ```

- Configura las peticiones API en tu frontend, por ejemplo, en un archivo `src/config.js`:

  ```javascript
  export const API_URL = "/api"; // Backend sirve el frontend
  ```

- Modifica el archivo `vite.config.js` para construir correctamente los archivos del frontend:

  ```javascript
  import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";

  export default defineConfig({
    plugins: [react()],
    build: {
      outDir: "../backend/public", // Construir el frontend en la carpeta del backend
    },
    server: {
      proxy: {
        "/api": "http://localhost:3000", // Proxy para evitar problemas de CORS
      },
    },
  });
  ```

#### 3. Construir el Frontend y Unificarlo con el Backend

- Desde el directorio del frontend, ejecuta:

  ```bash
  npm run build
  ```

- Esto generará los archivos estáticos del frontend y los moverá automáticamente al directorio `backend/public`.

#### 4. Probar el Proyecto Localmente

- Ve al directorio del backend:

  ```bash
  cd ../backend
  ```

- Inicia el servidor:

  ```bash
  node server.js
  ```

- Abre [http://localhost:3000](http://localhost:3000) en tu navegador. Deberías ver tu aplicación React, y las rutas de la API (`/api`) también estarán disponibles.

#### 5. Desplegar en Render

- Sube tu proyecto completo a GitHub.
- En Render:
  1. Crea un nuevo servicio de tipo **Servicios Web**.
  2. Selecciona el repositorio de tu proyecto.
  3. Configura:
     - **Build Command:** `npm install && npm run build` (si usas un script en el backend para instalar dependencias y construir el frontend).
     - **Start Command:** `node server.js`.
  4. Agrega las variables de entorno en el panel de configuración de Render (como `DATABASE_URL`).

## Integracion de la BASE DE DATOS

### 1. Configurar la Base de Datos Localmente (para pruebas locales)

1. **Instalar PostgreSQL:**  
   Si no lo tienes instalado, descárgalo e instálalo desde [PostgreSQL.org](https://www.postgresql.org/).

2. **Crear una base de datos:**

   - Accede a tu terminal de PostgreSQL (psql).
   - Crea una base de datos para tu proyecto:
     ```sql
     CREATE DATABASE nombre_de_tu_base_de_datos;
     ```

3. **Configurar el acceso desde el backend:**

   - En tu archivo `.env` del backend, agrega algo como:
     ```
     DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_de_tu_base_de_datos
     ```
   - Reemplaza `usuario`, `contraseña`, `localhost` y `5432` según tu configuración.

4. **Conectar el backend a la base de datos:**

   - Crea un archivo en `backend/config/db.js` para manejar la conexión:

     ```javascript
     const { Pool } = require("pg");
     const pool = new Pool({
       connectionString: process.env.DATABASE_URL,
       ssl:
         process.env.NODE_ENV === "production"
           ? { rejectUnauthorized: false }
           : false,
     });

     module.exports = pool;
     ```

### 2. Configurar la Base de Datos en Render (Producción)

1. **Crear el servicio de PostgreSQL en Render:**

   - En tu panel de Render, selecciona **PostgreSQL** y sigue los pasos para crear una base de datos.
   - Render te proporcionará un enlace `DATABASE_URL` con este formato:
     ```
     postgresql://usuario:contraseña@host:puerto/nombre_de_tu_base_de_datos
     ```

2. **Agregar la URL de la base de datos en Render:**

   - Ve al servicio del backend en Render.
   - En la configuración de **Environment Variables**, agrega la variable `DATABASE_URL` con el valor del enlace que Render te proporcionó.

3. **Asegurarte de que el backend use SSL en producción:**
   - El archivo `backend/config/db.js` ya tiene esta configuración:
     ```javascript
     ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
     ```

### 3. Crear Tablas y Datos Iniciales

1. **Crear un archivo para inicializar la base de datos (OPCIONAL):**

   - En el directorio `backend`, crea un archivo `scripts/init-db.js`:

     ```javascript
     const pool = require("../config/db");

     const initDB = async () => {
       try {
         await pool.query(`
           CREATE TABLE IF NOT EXISTS ejemplo (
             id SERIAL PRIMARY KEY,
             nombre VARCHAR(50) NOT NULL,
             descripcion TEXT
           );
         `);
         console.log("Tablas creadas");
         process.exit(0);
       } catch (err) {
         console.error(err.message);
         process.exit(1);
       }
     };

     initDB();
     ```

   - Ejecuta este script localmente:
     ```bash
     node scripts/init-db.js
     ```

2. **Migrar y poblar datos en producción:**
   - Conéctate a tu base de datos en Render desde una herramienta como **pgAdmin** o **DBeaver**.
   - Ejecuta manualmente los comandos SQL necesarios para crear las tablas y poblar datos iniciales.

### 4. Probar la Conexión

1. **Prueba localmente:**

   - Ejecuta tu backend localmente:
     ```bash
     node server.js
     ```
   - Asegúrate de que puedas acceder a los datos desde las rutas de tu API.

2. **Prueba en Render:**
   - Una vez que todo esté desplegado, accede a las rutas del backend alojado en Render y verifica que se comuniquen correctamente con la base de datos.

---

## Continuación: Pasos Opcionales y Recomendaciones

### Opcional: Creación Automática de Tablas y Datos Iniciales

1. **Crear un archivo para inicializar la base de datos:**

   - En el directorio `backend`, crea un archivo `scripts/init-db.js` para automatizar la creación de tablas y datos iniciales:

     ```javascript
     const pool = require("../config/db");

     const initDB = async () => {
       try {
         await pool.query(`
           CREATE TABLE IF NOT EXISTS ejemplo (
             id SERIAL PRIMARY KEY,
             nombre VARCHAR(50) NOT NULL,
             descripcion TEXT
           );
         `);

         await pool.query(`
           INSERT INTO ejemplo (nombre, descripcion) VALUES
           ('Elemento 1', 'Descripción del elemento 1'),
           ('Elemento 2', 'Descripción del elemento 2');
         `);

         console.log("Tablas y datos iniciales creados");
         process.exit(0);
       } catch (err) {
         console.error("Error al inicializar la base de datos:", err);
         process.exit(1);
       }
     };

     initDB();
     ```

   - Ejecuta este script localmente:

     ```bash
     node scripts/init-db.js
     ```

   Esto facilitará la configuración inicial tanto localmente como en entornos de producción.

2. **Asegurar que el script de inicialización no se ejecute automáticamente en producción:**

   - Puedes usar una variable de entorno para condicionar la ejecución del script:

     ```javascript
     if (process.env.NODE_ENV !== "production") {
       initDB();
     }
     ```

### Opcional: Monitoreo y Logs

1. **Agregar un sistema de logs para errores y solicitudes:**

   - Instala un paquete como `morgan` y configúralo en `server.js`:

     ```bash
     npm install morgan
     ```

     Luego, añade este middleware:

     ```javascript
     const morgan = require("morgan");
     app.use(morgan("dev"));
     ```

2. **Usar un servicio de monitoreo en producción:**

   - Configura un servicio como **Sentry** para registrar errores:

     - Instala el SDK de Sentry:

       ```bash
       npm install @sentry/node
       ```

     - Configúralo en el archivo `server.js`:

       ```javascript
       const Sentry = require("@sentry/node");
       Sentry.init({ dsn: "TU_DSN_DE_SENTRY" });

       app.use(Sentry.Handlers.requestHandler());
       app.use(Sentry.Handlers.errorHandler());
       ```

   Esto ayudará a identificar problemas en producción.

### Opcional: Scripts Automatizados

1. **Agregar scripts al archivo `package.json` del backend:**

   - En el archivo `backend/package.json`, agrega:
     ```json
     "scripts": {
       "start": "node server.js",
       "dev": "nodemon server.js",
       "build": "cd ../frontend && npm run build"
     }
     ```

   Esto permite manejar tareas comunes como iniciar el servidor o construir el frontend desde el backend.

2. **Configurar `dotenv-cli` para facilitar el uso de variables de entorno:**

   - Instala `dotenv-cli` globalmente:

     ```bash
     npm install -g dotenv-cli
     ```

   - Usa el comando:

     ```bash
     dotenv -e .env node server.js
     ```

   Esto asegura que las variables de entorno estén cargadas al iniciar el servidor.

### Pruebas y Validación

1. **Agregar pruebas a tu backend:**

   - Usa un framework como **Jest** o **Mocha** para validar las rutas y la conexión a la base de datos.

     ```bash
     npm install jest supertest --save-dev
     ```

     Crea un archivo `tests/api.test.js`:

     ```javascript
     const request = require("supertest");
     const app = require("../server");

     describe("Pruebas de la API", () => {
       it("Debería responder con un mensaje de bienvenida", async () => {
         const res = await request(app).get("/api");
         expect(res.statusCode).toBe(200);
         expect(res.body.message).toBe("\u00a1Hola desde el backend!");
       });
     });
     ```

   - Corre las pruebas:
     ```bash
     npm test
     ```

2. **Validar el frontend:**

   - Usa herramientas como **Lighthouse** o **React Testing Library** para analizar el rendimiento y la accesibilidad.
