import './App.css';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import CustomerPage from './pages/CustomerPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/customers' element={<CustomerPage />} />
        <Route path='/products' element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
