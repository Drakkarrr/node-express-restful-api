import { useState } from 'react';

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const response = await fetch('http://localhost:8000/api/employees');
    const data = await response.json();
    setEmployees(data);
    console.log(data);
  };
  return (
    <div>
      <h1>Fetch Employee</h1>
      <button onClick={fetchEmployees}>Fetch Employee</button>

      <div>
        {employees.map((employee) => (
          <table key={employee.name}>
            <tr>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Postition</th>
            </tr>
            <tr>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.position}</td>
            </tr>
          </table>
        ))}
      </div>
    </div>
  );
};

export default EmployeesPage;
