## CREA UNA API-REST COMPLETA A PARTIR DE UN JSON

## Requisitos

- Node.js (versión 14 o superior)
- npm (administrador de paquetes de Node.js)

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta raíz del repositorio.

# Instrucciones:

1. En la terminal, ejecuta el siguiente comando para instalar las dependencias:
   ```
   npm install -g json-server
   ```
2. Agregar dentro de db.json los datos que quieras simular que estan en tu DB (He dejado un ejemplo)

3. Levantar la API (por defecto escuchara por: 'http://localhost:3000')

   ```
   json-server --watch db.json
   ```

4. Opcional: Agrega una api-key, utilizar el siguiente comando para levantar el servidor (La apikey sera por defecto usara 'secretkey')
   agrega subrutas o rutas personalizadas creando un archivo 'routes.json' con las siguiente sintaxis:

   ```
   // En este caso, la ruta http://localhost:3000/sims/activations apuntara a un objeto llamado sims_activations en el db.json

   {
   "/sims/activations": "/sims_activations/"
   }

   ```

   4.1 Abre una terminal a la altura del db.json y ejecuta:

   ```
   json-server --watch db.json --middlewares ./auth-middleware.js --routes routes.json
   ```

5. Puedes hacer de todo, GET POST PUT DELETE
6. Tambien admite paginacion, filtros, sort, etc

## Documentacion:

- https://www.npmjs.com/package/json-server
