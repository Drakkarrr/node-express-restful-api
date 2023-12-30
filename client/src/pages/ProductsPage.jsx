import { useState } from 'react';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:8000/api/products');
    const data = await response.json();
    setProducts(data);
  };

  return (
    <div>
      <h1>Products CRUD</h1>
      <button onClick={fetchProducts}>Fetch Products</button>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
