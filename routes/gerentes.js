import express from 'express';
import {getGerentes, signin, createGerentes, updateGerente, deleteGerente} from '../controllers/gerentesControllers.js'
import auth from '../middleware/auth.js';
import pkg from 'express-validator';
const router = express.Router();
const {body} = pkg;

//localhost:5000/gerentes
router.get('/',getGerentes);
router.post('/signin',signin, body("cedula").isNumeric({no_symbols:true}));
router.post('/', body("cedula").isNumeric({no_symbols:true}),createGerentes);
router.patch('/:id',updateGerente);
router.delete('/:id',deleteGerente);

export default router;