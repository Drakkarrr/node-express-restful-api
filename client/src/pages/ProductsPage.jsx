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
          <table key={product.id}>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
            </tr>
          </table>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
