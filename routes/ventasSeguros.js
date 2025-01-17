import express from 'express';
import { getVentasSeguro, createVentasSeguro, updateVentasSeguro } from '../controllers/ventasSeguroController.js';
import pkg from 'express-validator';
const router = express.Router();
const {body} = pkg;

router.get('/', getVentasSeguro);
router.post('/',body("cedulaCliente").isNumeric({no_symbols:true}),body("fechaVenta").isDate(), createVentasSeguro);
router.patch('/:id',body("cedulaCliente").isNumeric({no_symbols:true}), updateVentasSeguro);

export default router;