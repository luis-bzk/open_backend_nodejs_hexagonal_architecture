<h1 align="center"><b>HexagonJS Backend</b>
<h2 align="center"><b>Backend</b></h2>

<p align="center">Servicio API del lado del backend creado con Node Js bajo la arquitectura hexagonal</p>

- [Introducción](#introducción)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Conexión a la Base de Datos.](#conexión-a-la-base-de-datos)
  - [Creación de la Base de Datos](#creación-de-la-base-de-datos)
- [APIs](#apis)
  - [Company](#company)
      - [Parameters](#parameters)
      - [Responses](#responses)
      - [Parameters](#parameters-1)
      - [Responses](#responses-1)
      - [Parameters](#parameters-2)
      - [Responses](#responses-2)
      - [Query](#query)
      - [Responses](#responses-3)
      - [Parameters](#parameters-3)
      - [Responses](#responses-4)

## Introducción

Este proyecto proporciona una base sólida para la creación de sistemas backend utilizando una arquitectura hexagonal con el framework `Express.js`. Es ideal para iniciar nuevos proyectos que requieren una estructura escalable y bien organizada.

## Tecnologías utilizadas

- Node JS
- Express JS
- Typescript
- PostgreSQL

## Instalación

Para instalar las dependencias y poner en marcha el proyecto, ejecuta los siguientes comandos en tu terminal:

```bash copy
npm install
npm run dev
```

## Configuración

Cambia el nombre del archivo **env.template** a **env** y ajusta las variables de entorno según tus necesidades.

## Conexión a la Base de Datos.

Este proyecto utiliza PostgreSQL como motor de base de datos. Antes de comenzar, es necesario crear la base de datos.

### Creación de la Base de Datos

Si necesitas realizar pruebas locales, ejecuta el script de creación de la base de datos y el esquema correspondiente. Los scripts se encuentran en la carpeta `Database`, al mismo nivel que el directorio `src`.

```bash
docker-compose up
```

## APIs

### Company

<details>
 <summary><code>POST</code> <code><b>/api/v1/company/create</b></code> <code>(Crear una nueva empresa)</code></summary>

##### Parameters

> None

##### Responses

> | http code | content-type       | response                                                                                                                                                               |
> | --------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `201`     | `application/json` | `{ id: number; social_reason: string; description: string; vision: string; mission: string; email: string; phone: string; created_date: Date; record_status: string;}` |

</details>

<details>
 <summary><code>PUT</code> <code><b>/api/v1/company/update/{id}</b></code> <code>(Actualizar una empresa)</code></summary>

##### Parameters

> | name              | type     | data type    | description                  |
> | ----------------- | -------- | ------------ | ---------------------------- |
> | `id`              | required | int          | ID de la empresa             |

##### Responses

> | http code | content-type       | response                                                                                                                                                               |
> | --------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `200`     | `application/json` | `{id: number; social_reason: string; description: string; vision: string; mission: string; email: string; phone: string; created_date: Date; record_status: string;}` |

</details>

<details>
 <summary><code>GET</code> <code><b>/api/v1/company/get/{id}</b></code> <code>(Obtener una empresa)</code></summary>

##### Parameters

> | name              | type     | data type    | description                  |
> | ----------------- | -------- | ------------ | ---------------------------- |
> | `id`              | required | int          | ID de la empresa             |

##### Responses

> | http code | content-type       | response                                                                                                                                                               |
> | --------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `200`     | `application/json` | `{id: number; social_reason: string; description: string; vision: string; mission: string; email: string; phone: string; created_date: Date; record_status: string;}` |

</details>

<details>
 <summary><code>GET</code> <code><b>/api/v1/company/get-all</b></code> <code>(Obtener todas las empresa)</code></summary>

##### Query

> | name              | type         | data type    | description                  |
> | ----------------- | ------------ | ------------ | ---------------------------- |
> | `limit`           | not required | int          | limite de registros          |
> | `offset`          | not required | int          | registros a excluir          |

##### Responses

> | http code | content-type       | response                                                                                                                                                               |
> | --------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `200`     | `application/json` | `[ {id: number; social_reason: string; description: string; vision: string; mission: string; email: string; phone: string; created_date: Date; record_status: string;} ]` |

</details>

<details>
 <summary><code>DELETE</code> <code><b>/api/v1/company/delete/{id}</b></code> <code>(Eliminar una empresa)</code></summary>

##### Parameters

> | name              | type     | data type    | description                  |
> | ----------------- | -------- | ------------ | ---------------------------- |
> | `id`              | required | int          | ID de la empresa             |

##### Responses

> | http code | content-type       | response                                                                                                                                                               |
> | --------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `200`     | `application/json` | `{id: number; social_reason: string; description: string; vision: string; mission: string; email: string; phone: string; created_date: Date; record_status: string;}` |

</details>