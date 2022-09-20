const path = require("path");
const express = require("express");
const mainRouter = require("./routers/main-router");

const app = express();

app.listen(3000, () => {
  console.log("Servidor corriendo en el puesto 3000");
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/", mainRouter);




