### Dependencias Necesarias

En el archivo `package.json`, asegúrate de incluir las siguientes dependencias para el despliegue:

1. **GitHub Pages**:

   - `gh-pages`: Para publicar fácilmente la carpeta `dist` generada por Vite en GitHub Pages.

   Para instalarlo:

   ```bash
   npm install gh-pages --save-dev
   ```

### Configuración de `vite.config.js`

Crea o edita el archivo `vite.config.js` para que el proyecto pueda ser correctamente desplegado en **GitHub Pages**. Necesitas agregar el campo `base`, que define la ruta base del proyecto.

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/<nombre-del-repositorio>/", // Reemplaza con el nombre del repositorio
});
```

### Scripts en `package.json`

Asegúrate de agregar o actualizar los scripts de despliegue en el archivo `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

El script `"deploy"` utiliza `gh-pages` para subir el contenido de la carpeta `dist` al branch `gh-pages`.

### Pasos para el Despliegue

1. **Build del Proyecto**:
   Genera la versión de producción del proyecto.

   ```bash
   npm run build
   ```

2. **Desplegar en GitHub Pages**:
   Publica la carpeta `dist` en GitHub Pages con:

   ```bash
   npm run deploy
   ```

3. **Habilitar GitHub Pages**:
   - Ve al repositorio en GitHub.
   - Entra a **Settings > Pages**.
   - Selecciona `gh-pages` como fuente de la rama y guarda los cambios.

### Pruebas y Configuración Adicional

1. Revisar la Página Desplegada:

   Accede a tu proyecto en `https://<tu-usuario>.github.io/<nombre-del-repositorio>/`.

2. Rutas Relativas:

   Asegúrate de usar rutas relativas en las solicitudes API y navegación, ya que **GitHub Pages** usa una ruta base (por ejemplo, `/nombre-del-repositorio`).

3. React Router DOM:

   Si usas rutas en tu proyecto, asegúrate de configurar un `404.html` para redirigir todas las rutas a `index.html`. Esto es automático con Vite.
