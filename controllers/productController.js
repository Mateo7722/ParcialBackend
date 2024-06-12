import express from 'express';
import { createProduct } from "../models/productoModel.js";


const createProductFunction = async (req, res) =>{

    console.log(req.body)
    try {
        await createProduct(req.body)
        res.status(201).json({msg: 'Producto creado'})
    } catch (error) {
        res.status(500).json({msg: 'Error producido al crear un producto'})
    }

}


export {createProductFunction}