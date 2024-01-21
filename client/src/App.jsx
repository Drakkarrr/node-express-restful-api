import './App.css';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import EmployeePage from './pages/EmployeePage';
import ProductsPage from './pages/ProductsPage';
import MyComponent from './components/MyComponent';
import RemindersPage from './pages/RemindersPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/employees' element={<EmployeePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/mycomponent' element={<MyComponent />} />
        <Route path='/reminders' element={<RemindersPage />} />
      </Routes>
    </>
  );
}

export default App;
