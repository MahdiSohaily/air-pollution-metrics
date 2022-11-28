import Countries from '../props/Countries';
import Footer from '../props/Footer';
import Nav from '../props/NavBar';
import '../../styles/country.css';

function Home() {
  return (
    <div>
      <Nav />
      <div className="countries-container">
        <Countries />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
