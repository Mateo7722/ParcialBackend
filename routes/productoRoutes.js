import express from "express";
import {
  funcionCrearProducto,
  funcionMostrarProductos,
  funcionMostrarProducto,
  funcionEditarProducto,
  funcionEliminarProducto,
  funcionOrdenarProductos,
  funcionFiltrarProductos
} from "../controllers/productoController.js";

const routes = express.Router();

routes.post("/productos", funcionCrearProducto);

routes.get("/productos", funcionMostrarProductos);
routes.get("/productos/:id", funcionMostrarProducto);

routes.put("/productos/:id", funcionEditarProducto);
routes.delete("/productos/:id", funcionEliminarProducto);

routes.get("/ordenados/:cond", funcionOrdenarProductos);

routes.get("/filtrar", funcionFiltrarProductos)

export default routes;
