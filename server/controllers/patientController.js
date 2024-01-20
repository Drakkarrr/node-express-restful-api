import Patients from '../models/patientModel.js';

export const getPatients = async (req, res) => {
  try {
    const patients = await Patients.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPatient = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
