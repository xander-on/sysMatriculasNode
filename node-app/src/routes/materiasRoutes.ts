
import { Router } from 'express';
import { getAllMaterias, postMateria } from '../controllers/materiasController';
import { check } from 'express-validator';
import { returnErrors } from '../../middlewares/returnErrors';

const validationsPostMateria = [
  check('name',     'El nombre es obligatorio').not().isEmpty(),
  returnErrors
];

export const materiasRouter = Router();

materiasRouter.get('/', getAllMaterias);
materiasRouter.post('/', validationsPostMateria, postMateria);

