import { Router } from 'express';
import {
  getEmployees,
  createEmployee,
  getEmployee,
} from '../controllers/employeeController.js';

const router = Router();

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployee);
router.post('/employees', createEmployee);

export default router;
