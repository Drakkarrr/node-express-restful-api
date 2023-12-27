import { Router } from 'express';
import {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import {
  getEmployees,
  createEmployee,
} from '../controllers/employeeController.js';

const router = Router();

router.get('/products', getProducts);
router.post('/products', createProduct);
router.get('/products/:id', getProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

router.get('/employees', getEmployees);
router.post('/employees', createEmployee);

export default router;
