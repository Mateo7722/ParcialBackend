import Producto from "../db/productos.js";



const createProduct = async (producto) =>{
    await Producto.create(producto)
}



export {createProduct}