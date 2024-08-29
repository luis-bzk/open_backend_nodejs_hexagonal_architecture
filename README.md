<h1 align="center"><b>SynergyControl</b> - La unión inteligente para gestionar, controlar y potenciar tu negocio</h1>
<h2 align="center"><b>Backend</b></h2>

<p align="center">Servicio API del lado del backend</p>

- [Introducción](#introducción)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Conectarse a la Base de Datos.](#conectarse-a-la-base-de-datos)
  - [Crear Base de Datos.](#crear-base-de-datos)
- [APIs](#apis)

## Introducción
Proyecto base para cualquier sistema

## Tecnologías utilizadas
- Node JS
- Express JS
- Typescript
- PostgreSQL

## Instalación

Para poder realizar la reconstrucción e instalación de los módulos se requiere ejecutar los siguientes comandos

```bash copy
npm install
npm run dev
```

## Configuración

Cambiar el nombre del archivo __.env.template__ a __.env__ y establecer las variables de entorno

## Conectarse a la Base de Datos.

La base de datos utilizada esta potenciada con PostgreSQL y se encuentra dentro de los servicios de Supabase, para poder realizar la conexión es necesario solicitar los accesos del **ambiente de Desarrollo**

### Crear Base de Datos.

En caso de ser necesario manejar pruebas de manera local, es necesario ejecutar el siguiente código para la creación de la base de datos y el schema correspondiente.

```sql copy
create database synergy_control;
\c synergy_control;
create schema core;
```


## APIs
