## CREA UNA API-REST COMPLETA A PARTIR DE UN JSON

## Requisitos

- Node.js (versión 14 o superior)
- npm (administrador de paquetes de Node.js)

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta raíz del repositorio.

# Instrucciones:

1. En la terminal, ejecuta el siguiente comando para instalar las dependencias:
   '''
   npm install -g json-server
   '''
2. Agregar dentro de db.json los datos que quieras simular que estan en tu DB (He dejado un ejemplo)

3. Levantar la API (por defecto escuchara por: 'http://localhost:3000')
   '''
   json-server --watch db.json
   '''

4. Opcional: Agrega una api-key, utilizar el siguiente comando para levantar el servidor (La apikey sera por defecto usara 'secretkey')
   '''
   json-server --watch db.json --middlewares ./auth-middleware.js
   '''

PUEDES HACER TODO TIPO DE REQUEST!!

GET POST PUT DELETE
PD: Tambien tiene paginacion, filtros, sort etc

## Documentacion:

- https://www.npmjs.com/package/json-server
