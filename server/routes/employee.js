import { Router } from 'express';
import {
  getEmployees,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmpolyee,
} from '../controllers/employeeController.js';

const router = Router();

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployee);
router.post('/employees', createEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmpolyee);

export default router;
