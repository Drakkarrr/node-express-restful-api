import { useNavigate } from 'react-router-dom';

const Customers = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    navigate('/customers');
  };

  return (
    <>
      <button onClick={handleClick}>Fetch Customers</button>
    </>
  );
};

export default Customers;
