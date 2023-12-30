import { useNavigate } from 'react-router-dom';

const Employee = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    navigate('/employees');
  };

  return (
    <>
      <button onClick={handleClick}>Fetch Employee</button>
    </>
  );
};

export default Employee;
