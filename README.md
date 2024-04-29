# 🔥📲 ¿Cómo crear proyecto Node Js?

- 1- Crear el package json

```
      npm init -y
```

- 2-Instalar el modulo de express

```
   npm install express
```

- 3- Instalar todas las dependencias que el proyecto requiera.
- Instalar nodemon de forma global o como dependencia de desarrollo (flag)

```
       npm install nodemon -g
```

```
npm i morgan
npm install --save multer

```

- 4- Crear un scrips en package json para que nodemon se ejecute en cada cambio

```
   "scripts": {
         "start": "node server.js" // npm start
         "dev": "nodemon server.js" // npm run dev
      },
```

- 5- Sugerencia: usar module (imports)
  Agregar en el package.json:

```
 "type": "module",
```

- 6- Recordá crear el archivo .gitignore para evitar subir contenido innecesario al repositorio.

⏯ [¿Cómo crear gitignore?](https://www.toptal.com/developers/gitignore)
