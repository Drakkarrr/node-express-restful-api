import Customers from './../components/Customers';
import Products from '../components/Products';

const LandingPage = () => {
  return (
    <>
      <h1>Node API data fetching</h1>
      <Products />
      <Customers />
    </>
  );
};

export default LandingPage;
