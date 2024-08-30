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

Cambia el nombre del archivo __env.template__ a __env__ y ajusta las variables de entorno según tus necesidades.

## Conexión a la Base de Datos.

Este proyecto utiliza PostgreSQL como motor de base de datos. Antes de comenzar, es necesario crear la base de datos.

### Creación de la Base de Datos

Si necesitas realizar pruebas locales, ejecuta el script de creación de la base de datos y el esquema correspondiente. Los scripts se encuentran en la carpeta `Database`, al mismo nivel que el directorio `src`.

```bash
docker-compose up
```

## APIs
_`Próximamente disponible la documentación de las APIs`_