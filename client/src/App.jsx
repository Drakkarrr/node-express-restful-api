import './App.css';
import Customers from './components/Customers';
import Products from './components/Products';

function App() {
  return (
    <>
      <h1>Node API data fetching</h1>
      <Products />
      <Customers />
    </>
  );
}

export default App;
