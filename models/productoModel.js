import { Op } from "sequelize";
import Producto from "../db/productos.js";

const crearProducto = async (producto) => {
  await Producto.create(producto);
};

const mostrarProductos = async () => {
  return await Producto.findAll();
};

const mostrarProducto = async (id) => {
  return await Producto.findOne({ where: { id } });
};

const editarProducto = async (id, producto) => {
  return await Producto.update(producto, { where: { id } });
};

const eliminarProducto = async (id) => {
  return await Producto.destroy({ where: { id } });
};

const ordenarProductos = async (cond) => {
  const productos = await Producto.findAll();
  let productosArray = productos.map((producto) => producto);

  productosArray.sort((a, b) => {
    if (a[cond] > b[cond]) {
      return 1;
    }
    if (a[cond] < b[cond]) {
      return -1;
    }
    return 0;
  });

  return productosArray;
};

const filtrarProductos = async (nombre, minP, maxP, categoria, minC, maxC) => {
  const condiciones = {};

  if (nombre) {
    condiciones.nombre = {
      [Op.like]: `%${nombre}%`,
    };
  }
  if (categoria) {
    condiciones.categoria = categoria;
  }
  if (minP && maxP) {
    whereClause.precio = {
      [Op.between]: [parseFloat(minP), parseFloat(maxP)],
    };
  } else if (minP) {
    whereClause.precio = {
      [Op.gte]: parseFloat(minP),
    };
  } else if (maxP) {
    whereClause.precio = {
      [Op.lte]: parseFloat(maxP),
    };
  }

  if (minC && maxC) {
    condiciones.cantidad = {
      [Op.between]: [parseFloat(minC), parseFloat(maxC)],
    };
  } else if (minC) {
    condiciones.cantidad = {
      [Op.gte]: parseFloat(minC),
    };
  } else if (maxC) {
    condiciones.cantidad = {
      [Op.lte]: parseFloat(maxC),
    };
  }

    return await Producto.findAll({where: condiciones})


};

export {
  crearProducto,
  mostrarProductos,
  mostrarProducto,
  editarProducto,
  eliminarProducto,
  ordenarProductos,
  filtrarProductos
};
