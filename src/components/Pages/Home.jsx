import Countries from '../props/Countries';
import Footer from '../props/Footer';
import Nav from '../props/NavBar';
import '../../styles/country.css';

function Home() {
  return (
    <>
      <Nav />
      <Countries />
      <Footer />
    </>
  );
}

export default Home;
