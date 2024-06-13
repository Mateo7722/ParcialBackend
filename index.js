import express from "express";
import db from "./db/db.js";
import productoRoutes from "./routes/productoRoutes.js";
import morgan from "morgan";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(morgan("tiny"));
app.use(cors());

app.use(productoRoutes);

try {
  db.authenticate();
  console.log("Conectado a la base de datos");
  db.sync();
  console.log("Base de datos sincronizada");
} catch (error) {
  console.log("error al conectar con la base de datos: ", error);
}

app.listen(PORT, () => {
  console.log("Servidor andando");
});
