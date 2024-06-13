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
    let productosArray = productos.map(producto => producto);

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


export {
  crearProducto,
  mostrarProductos,
  mostrarProducto,
  editarProducto,
  eliminarProducto,
  ordenarProductos
};
