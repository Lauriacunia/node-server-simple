import express from "express";
const app = express();
const PORT = process.env.PORT || 8080; //si lo tienen ocupado poner otro puerto

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(` <h1>Servidor corriendo en puerto: ${PORT} 💫</h1>`);
});

try {
  app.listen(PORT, () =>
    console.log(
      `🚀 Server started on PORT ${PORT} at ${new Date().toLocaleString()}`
    )
  );
} catch (error) {
  console.log("Error al iniciar servidor", error);
}
