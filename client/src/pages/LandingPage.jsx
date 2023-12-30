import Employee from './../components/Employee';
import Products from '../components/Products';

const LandingPage = () => {
  return (
    <>
      <h1>Node API data fetching</h1>
      <Products />
      <Employee />
    </>
  );
};

export default LandingPage;
