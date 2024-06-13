import {
  crearProducto,
  mostrarProductos,
  mostrarProducto,
  editarProducto,
  eliminarProducto,
  ordenarProductos
} from "../models/productoModel.js";

const funcionCrearProducto = async (req, res) => {
  try {
    await crearProducto(req.body);
    res.status(201).json({ msg: "producto creado" });
  } catch (error) {
    res.status(500).json({ msg: "Error al crear el producto: " + error });
  }
};

const funcionMostrarProductos = async (req, res) => {
  const productos = await mostrarProductos();

  if (!productos) {
    res.status(404).json({ msg: "No se encontro ningun producto" });
  } else {
    res.status(200).json({ productos });
  }
};

const funcionMostrarProducto = async (req, res) => {
  const { id } = req.params;
  const producto = await mostrarProducto(id);

  if (!producto) {
    res.status(404).json({ msg: "No se encontro el producto" });
  } else {
    res.status(200).json({ producto });
  }
};

const funcionEditarProducto = async (req, res) => {
  const { id } = req.params;
  try {
    await editarProducto(id, req.body);
    res.status(200).json({ msg: "Producto editado" });
  } catch (error) {
    res.status(500).json({ msg: "Error al editar el producto" });
  }
};

const funcionEliminarProducto = async (req, res) => {
  const { id } = req.params;
  try {
    await eliminarProducto(parseInt(id));
    res.status(200).json({ msg: "Producto eliminado" });
  } catch (error) {
    res.status(400).json({ msg: "Producto no encontrado" });
  }
};

const funcionOrdenarProductos = async (req, res) =>{
    const {cond} = req.params
    const productosOrdenados = await ordenarProductos(cond)
    res.status(200).json({productosOrdenados})
}




export {
  funcionCrearProducto,
  funcionMostrarProductos,
  funcionMostrarProducto,
  funcionEditarProducto,
  funcionEliminarProducto,
  funcionOrdenarProductos
};
