import './App.css';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import EmployeePage from './pages/EmployeePage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/employees' element={<EmployeePage />} />
        <Route path='/products' element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
