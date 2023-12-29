import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter employee name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter employee email'],
    },
    phone: {
      type: Number,
      required: [true, 'Please enter employee phone'],
    },
    position: {
      type: String,
      required: [true, 'Please enter employee position'],
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model('Employee', EmployeeSchema);
export default Employee;
