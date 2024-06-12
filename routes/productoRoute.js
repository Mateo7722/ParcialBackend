import express from 'express'
import { createProductFunction } from '../controllers/productController.js';

const router = express.Router();


router.post('/crear', createProductFunction )


export default router