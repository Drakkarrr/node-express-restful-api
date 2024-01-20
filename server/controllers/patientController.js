import Patients from '../models/patientModel.js';

export const createPatient = async (req, res) => {
  try {
    const patient = await Patients.create(req.body);
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
    const patient = await Patients.findById(id);
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patients.findByIdAndUpdate(req.body, id);
    const updatedPatient = { ...patient._doc, ...req.body };
    !patient
      ? res.status(404).json({ message: 'Patient not found' })
      : res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patients.findByIdAndDelete(id);
    !patient
      ? res.status(404).json({ message: 'Patient not found' })
      : res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
