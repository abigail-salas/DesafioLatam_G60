## Tipos de Claves: Primary Key y Foreign Key

### Primary Key (Clave Primaria)

**Definición:**
La clave primaria es un atributo o un conjunto de atributos que identifican de manera única a cada fila en una tabla de una base de datos. No puede haber dos filas con el mismo valor en la clave primaria, y este valor no puede ser nulo (`NULL`).

**Características:**

1. **Única:** Cada valor de clave primaria debe ser único en la tabla.
2. **No Nulo:** Los valores de la clave primaria no pueden ser nulos.
3. **Estable:** Los valores de la clave primaria no deben cambiar con el tiempo.

```
CREATE TABLE Clientes (
    id INT PRIMARY KEY,  -- Aquí 'id' es la clave primaria
    nombre VARCHAR(100), email VARCHAR(100));
```

### Foreign Key (Clave Foránea)

**Definición:**
La clave foránea es un atributo o un conjunto de atributos en una tabla que referencia la clave primaria de otra tabla. Esto se utiliza para crear una relación entre las dos tablas y asegurar la integridad referencial.

**Características:**

1. **Referencial:** La clave foránea apunta a una clave primaria en otra tabla.
2. **Integridad:** Asegura que los valores de la clave foránea deben coincidir con los valores de la clave primaria en la tabla referenciada o ser nulos.

```
CREATE TABLE Pedidos (
    id INT PRIMARY KEY,
    cliente_id INT,
    fecha_pedido DATE,
    total_pedido DECIMAL(10, 2),
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id)  -- Aquí 'cliente_id' es la clave foránea
);
```

## La Integridad de Datos

### Integridad Referencial

**Definición:**
La integridad referencial es una propiedad de las bases de datos que asegura que las relaciones entre tablas se mantengan coherentes. Esto significa que una clave foránea en una tabla debe coincidir con una clave primaria en otra tabla, o debe ser nula si la relación es opcional.

```
-- Esto fallará si no existe un cliente con id 3 en la tabla Clientes
INSERT INTO Pedidos (id, cliente_id, fecha_pedido, total_pedido)
VALUES (1, 3, '2024-08-28', 100.00);
```

### Integridad Mediante Clave Primaria

**Definición:**
La integridad mediante clave primaria asegura que cada fila en una tabla sea única y esté identificada de manera inequívoca. Esto es esencial para evitar duplicados y mantener la consistencia de los datos.

```
-- Esto fallará si intentas insertar otro cliente con el mismo id
INSERT INTO Clientes (id, nombre, email)
VALUES (1, 'Juan Perez', 'juan.perez@example.com');
```

### Integridad Mediante Restricciones

**Definición:**
Las restricciones son reglas que aplicas a las columnas de las tablas para asegurar la integridad y validez de los datos. Las restricciones comunes incluyen "NOT NULL", "UNIQUE", "CHECK", y "DEFAULT".

**Tipos de Restricciones:**

- **NOT NULL:** Asegura que una columna no acepte valores nulos.
- **UNIQUE:** Asegura que todos los valores en una columna o un grupo de columnas sean únicos.
- **CHECK:** Define una condición que los valores en una columna deben cumplir.
- **DEFAULT:** Establece un valor por defecto para una columna cuando no se proporciona ningún valor.

```
CREATE TABLE Pedidos (
    id INT PRIMARY KEY,
    cliente_id INT,
    fecha_pedido DATE,
    total_pedido DECIMAL(10, 2) CHECK (total_pedido > 0),  -- Restricción CHECK
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id)
);
```

## Modelos de Datos: Conceptual, Lógico y Físico

### Modelo de Datos Conceptual

**Definición:**
El modelo de datos conceptual es una representación abstracta de los datos que se centra en describir la estructura general y las relaciones entre entidades sin preocuparse por los detalles técnicos. Es utilizado principalmente en la fase inicial de diseño de la base de datos.

**Características:**

- Representa las entidades principales y sus relaciones.
- No incluye detalles específicos sobre el tipo de base de datos o la implementación.
- Enfocado en qué datos se deben almacenar, no en cómo se almacenan.

### Modelo de Datos Lógico

**Definición:**
El modelo de datos lógico es una representación más detallada que el modelo conceptual. Define las estructuras de datos de manera más precisa, incluyendo las claves primarias y foráneas, pero sigue siendo independiente del tipo de base de datos que se usará.

**Características:**

- Define tablas, columnas, claves primarias y foráneas.
- Describe la estructura lógica de la base de datos sin especificar detalles físicos como índices o particiones.
- Se utiliza como paso intermedio antes de la implementación física.

### Modelo de Datos Físico

**Definición:**
El modelo de datos físico describe cómo los datos se almacenan realmente en la base de datos. Incluye detalles específicos de la implementación, como el tipo de base de datos, índices, particiones, y otras optimizaciones de rendimiento.

**Características:**

- Define cómo se almacenan los datos físicamente en el sistema.
- Incluye detalles específicos de la implementación como índices, compresión, y estructura de almacenamiento.
- Está completamente ligado a la tecnología de base de datos seleccionada (SQL Server, PostgreSQL, MySQL, etc.).


## EJERCICIOS Y MODELOS RELACIONALES

Sitio web de los graficos explicados [Lucid](https://lucid.app/lucidchart/a528aaf3-0032-4b39-b9f0-d3e2c30f9657/edit?beaconFlowId=1C9CCFB9FE8AF11F&invitationId=inv_d59b9aa4-f804-48d0-80b4-4c40e8adca1b&page=0_0#).