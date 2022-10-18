const http = require("http");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(process.env.SECRET_KEY);
  res.send(` <h1>Servidor corriendo en puerto: ${PORT} 💫</h1>`);
});

const PORT = process.env.PORT || 3000; //si lo tienen ocupado poner otro puerto

try {
  app.listen(PORT, () =>
    console.log(
      `🚀 Server started on PORT ${PORT} at ${new Date().toLocaleString()}`
    )
  );
} catch (error) {
  console.log("Error al iniciar servidor", error);
}
