Crea un archivo Operaciones.js que cree las siguientes funciones:

- createFile: Recibe 2 argumentos (nombre del archivo, contenido del
  archivo), crea el archivo y muestra por consola un mensaje indicando
  que el archivo fue creado

- readFile: Recibe 1 argumento (nombre del archivo), lee el archivo con
  readFileSync y muestra su contenido por consola.

Exporta ambas funciones

Crea un archivo index.js que:

● Importe las funciones de operaciones.js
● Pruebe ambas funciones importadas

---

### Ejercicio: **Lista de Nombres**

#### Objetivo:

Crear un programa que guarde un nombre en un archivo y luego los lea y los muestre.

### 1. Crea el archivo `nombres.js`:

Este archivo contendrá las funciones `agregarNombre()` para agregar y `leerNombres()` para leer los nombres de un archivo.

### 2. Crea el archivo `index.js`:

Este archivo será el que interactúe con las funciones del archivo `nombres.js`.

### Explicación:

- `agregarNombre(nombre)`: Añade un nuevo nombre a la lista y lo guarda en el archivo `nombres.txt`.
- `leerNombres()`: Lee y muestra todos los nombres guardados en el archivo.

### Resultado esperado:

```bash
Nombre "Carolina" agregado.
Nombre "Jorge" agregado.
Nombres guardados:
1. Carolina
2. Jorge
```
