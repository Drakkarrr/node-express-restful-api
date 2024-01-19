import Employee from './../components/Employee';
import Products from '../components/Products';
import MyComponentPage from '../components/MyComponentPage';

const LandingPage = () => {
  return (
    <>
      <h1>Node API data fetching</h1>
      <Products />
      <Employee />
      <MyComponentPage />
    </>
  );
};

export default LandingPage;
