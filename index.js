import express from "express";
import db from "./db/db.js";
import productRouter from './routes/productoRoute.js'
const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/productos', productRouter)


try {
    db.authenticate();
    console.log('Conectado a la base de datos')
    db.sync()
    console.log('Base de datos sincronizada')
} catch (error) {
    console.log('error al conectar con la base de datos: ', error)
}










app.listen(PORT, () => {
  console.log("Servidor andando");
});
