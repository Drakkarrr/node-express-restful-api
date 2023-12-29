import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate('/products')}>Fetch Products</button>
    </>
  );
};

export default Products;
