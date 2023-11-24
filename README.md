<h1 align='center'>Conectando con MySQL</h1>

### Especificaciones
- Servidor: http://127.0.0.1:8080/ciudad
- Versión: 1.0.0
- Autor: Javier Anibal Villca
- Repositorio GitHub: git+https://github.com/Javier104-dev/conectando-con-mysql.git

### Tecnologías utilizadas
- **MySQL**: Sistema de administración de bases de datos relacionales.
- **Sequelize v6.32.1**: ORM (Object-Relational Mapping), facilita la comunicación entre una aplicación Node.js y la base de datos relacional.
- **mysql2 v3.5.2**: Controlador que utiliza Sequelize para poder comunicarse de forma eficiente a MySQL.
- **Node.js v18.16.0**: Plataforma de ejecución de JavaScript del lado del servidor.
- **Express**: Framework web para Node.js, simplifica la creación de aplicaciones web y APIs.
- **ESLint**: Herramienta de linting para mantener un código JavaScript/Node.js consistente y legible.
- **Dotenv**: Carga variables de entorno desde un archivo `.env` en la aplicación.

### Proyecto de prueba
Este es un proyecto prueba que hice para comenzar a usar MyQSL y conectarlo al servidor mediante el uso de `Sequelize`. Solamente se hizo la conexión con una base de datos de prueba llamada `sakila` y una tabla que guardaba entidades de ciudades y personas.

Entidad utilizada
``` json
{
  "id": 1,
  "nombre": "Damian",
  "apellido": "Gomez",
  "ciudad": "Buenos Aires",
  "createdAt": "2023-09-29T18:29:12.000Z",
  "lastUpdated": "2023-09-29T18:29:12.000Z"
}
```

### Importante, SOLID
El diseño se basa en uno de los principios SOLID, que son 5 prácticas recomendadas a la hora de crear una aplicación, el `Principio de inversión de la dependencia` en pocas palabras dice que los módulos de alto nivel no deben depender de los módulos de bajo nivel. Para lograr esto se utilizó la biblioteca [rsdi](https://www.npmjs.com/package/rsdi) para la inyección de dependencias.

### Estructura de este proyecto
El proyecto tiene una arquitectura en capas, usando `clases` en todos sus niveles.
Las capas para destacar podrían ser las de controller, service, repository y model.

| Ruta                  | Explicación                                                                            |
| --------------------- | -------------------------------------------------------------------------------------- |
| src                   | Contiene toda nuestra aplicación                                                       |
| src/cli               | Se encarga de la sincronizacion de los modelos del proyecto con la base de datos MyQSL |
| src/config            | Configuración de dependencias (Dependency Injection)                                   |
| src/prueba            | Contiene la estructura de capas del módulo prueba                                      |
| src/prueba/controller | Capa encargada de gestionar las solicitudes HTTP del proyecto                          |
| src/prueba/services   | Lógica de negocio de nuestra aplicación                                                |
| src/prueba/repository | Interactúa con la capa de acceso a datos (DAL) y devuelve entidad(es)                  |
| src/prueba/model      | Modelo de tabla que se utiliza para las consultas y sincronización con MySQL           |
| src/prueba/routes     | Gestiona las rutas de acceso para cada endpoint del módulo                             |
| src/prueba/entity     | La entidad Prueba de nuestro dominio                                                   |
| src/prueba/mapper     | Mapea desde o hacia la entidad de club                                                 |
| src/prueba/module     | Punto de entrada al módulo                                                             |
| src/server.js         | Punto de entrada de nuestra aplicación                                                 |

<h2 align='center'>Métodos HTTP y ejemplos</h2>

### Métodos utilizados en el proyecto
| Tipo   | URI                              | Descripción                                      |
| ------ | -------------------------------- | ------------------------------------------------ |
| GET    | http://127.0.0.1:8080/ciudad     | Obtiene los registros de las ciudades            |
| GET    | http://127.0.0.1:8080/ciudad/:id | Obtiene el registro de una ciudad en específico  |
| POST   | http://127.0.0.1:8080/ciudad     | Crea un registro de una nueva ciudad             |
| PUT    | http://127.0.0.1:8080/ciudad:id  | Modifica el registro de una ciudad en específico |
| DELETE | http://127.0.0.1:8080/ciudad:id  | Elimina el registro de una ciudad en específico  |

### Método GET
**Request**
- Ejemplo de URI utilizado
  ```
  http://127.0.0.1:8080/ciudad
  ```

**Response**
- Código **HTTP 200** *Ok*
  ``` json
  [
    {
      "id": 1,
      "nombre": "Juan",
      "apellido": "Gomez",
      "ciudad": "Buenos Aires",
      "createdAt": "2023-09-29T18:29:12.000Z",
      "lastUpdated": "2023-09-29T18:29:12.000Z"
    },
  ]
  ```
- Código **HTTP 500**: *Error interno*

### Método GET - Específico
**Request**

- Ejemplo de URI utilizado
  ```
  http://127.0.0.1:8080/ciudad/1
  ```

- Parámetro obligatorio de tipo URL
  - **1**: *(tipo: integer. Indica el código de la ciudad que se requiere obtener)*

**Response**
- Código **HTTP 200** *Ok*
  ``` json
  {
    "id": 1,
    "nombre": "Juan",
    "apellido": "Gomez",
    "ciudad": "Buenos Aires",
    "createdAt": "2023-09-29T18:29:12.000Z",
    "lastUpdated": "2023-09-29T18:29:12.000Z"
  }
  ```
- Código **HTTP 500**: *El id no esta definido*
- Código **HTTP 500**: *No se pudo encontrar una ciudad con el id: 1*

### Método POST
**Request**
- URI utilizado
  ```
  http://127.0.0.1:8080/ciudad
  ```

- Parámetros requeridos del BODY
  - **"nombre"="Juan"**: *(tipo: string. Establece el valor del nombre)*
  - **"apellido"="Gomez"**: *(tipo: string. Establece el valor del apellido)*
  - **"ciudad"="Buenos Aires"**: *(tipo: string. Establece el valor de la ciudad)*

**Response**
  - Código **HTTP 200** Ok: *Registro creado con exito*
    ``` json
    {
      "id": 1,
      "nombre": "Juan",
      "apellido": "Gomez",
      "ciudad": "Buenos Aires",
      "createdAt": "2023-09-29T18:29:12.000Z",
      "lastUpdated": "2023-09-29T18:29:12.000Z"
    }
    ```
  - Código **HTTP 500**: *El registro no tiene un formato valido*;

### Método PUT
Aquí utilizamos la `logica de Sequelize` para usar la misma URI del método POST, dependiendo de si la entidad que enviamos posee un ID.

Si `posee un ID`, Sequelize usara la entidad para modificar un registro existente con ese ID.
<br>
Si `no posee un ID`, Sequelize entenderá que esa entidad no existe y creara su registro.

**Request**
- URI utilizado
  ```
  http://127.0.0.1:8080/ciudad
  ```

- Parámetro obligatorio de tipo URL
  - **1**: *(tipo: integer. Indica el id de al ciudad que se requiere modificar)*

- Parámetros requeridos del BODY
  - **"nombre"="Matias"**: *(tipo: string. Establece el valor del nombre)*
  - **"apellido"="Abollo"**: *(tipo: string. Establece el valor del apellido)*

**Response**
  - Código **HTTP 200** Ok: *Registro con id: 1 actualizado con exito*
    ``` json
    {
      "id": 1,
      "nombre": "Matias",
      "apellido": "Abollo",
      "ciudad": "Buenos Aires",
      "createdAt": "2023-09-29T18:29:12.000Z",
      "lastUpdated": "2023-09-29T20:29:12.000Z"
    }
    ```
  - Código **HTTP 500**: *El registro no tiene un formato valido*;

### Método DELETE
**Request**
- URI utilizado
  ```
  http://127.0.0.1:8080/ciudad/1
  ```

- Parámetro obligatorio de tipo URL
  - **1**: *(tipo: integer. Indica el id de la ciudad que se requiere eliminar)*

**Response**
- Código **HTTP 200** Ok: *eliminado*
- Código **HTTP 500**: *El registro no es una instancia de la clase Prueba*
- Código **HTTP 500**: *El registro no es una instancia de la clase Prueba*

<h2 align='center'>Instrucciones de instalación</h2>

### Requerimientos
- IDE - Visual Studio Code v1.84.2
- MySQL v8.0
- Git v2.43.0
- Node.js v20.9.0

### Preparando el ambiente
- Descargar o clonar el repositorio.
- Instalar las dependencias necesarias con el comando `npm install`.
- En la raíz del proyecto crear un archivo `.env`, copiar las variables de entorno que se encuentran en el archivo `.env.dist` y reemplazar su valor siguiendo las indicaciones.
- Sincronizar los modelos creados con la base de datos con el comando `npm run schema:sync`.
- Correr el comando `npm start` para iniciar el servidor en modo desarrollo.
- Usar la URL base `http://127.0.0.1:8080/ciudad` para interactuar con el servidor.

---

### Autor
| [<img src='https://avatars.githubusercontent.com/u/105408069?v=4' width=115><br><sub>Javier Anibal Villca</sub>](https://github.com/Javier104-dev) |
| :------------------------------------------------------------------------------------------------------------------------------------------------: |
