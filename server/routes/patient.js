import { Router } from 'express';
import {
  createPatient,
  getPatient,
  getPatients,
  updatePatient,
  deletePatient,
} from '../controllers/patientController';

const router = Router();

router.post('/patients', createPatient);
router.get('/patients', getPatients);
router.get('/patients/:id', getPatient);
router.put('/patients/:id', updatePatient);
router.delete('/patients/:id', deletePatient);

export default router;
