 # 🔥📲 ¿Cómo crear y levantar un proyecto Node Js? 🔥📲
 * 1- Crear el package json
```
      npm init -y
```    
 * 2- Instalar nodemon de forma global o como dependencia de desarrollo (flag)
```
       npm install nodemon -g
```
 * 3- Crear un scrips en package json para que nodemon se ejecute en cada cambio
```
   "scripts": {
         "start": "nodemon server.js"
      },
 ```
* 4- Para que nodemon se ejecute en cada cambio, ejecutar:
    opcion 1: nodemon server.js
    opcion 2: corriendo el script en package json: npm run start
* 5-Instalar el modulo de express
  
 ``` 
    npm install express
```
* 6- Instalar todas las dependencias que el proyecto requiera.
 ``` 
npm i morgan
npm install --save multer

 ``` 

* 7- Recordá crear el archivo .gitignore para evitar subir contenido innecesario al repositorio.

 ⏯ [¿Cómo crear gitignore?- Tutorial](https://youtu.be/5tP1Ra73c38)
    
 

### Utilicé Bulma para el estilado
[Bulma docs](https://bulma.io/)

### Manejo de archivos con MULTER
[Multer docs](https://www.npmjs.com/package/multer)