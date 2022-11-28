import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data';
import '../../styles/country.css';

function Countries() {
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState('');
  const arr = [];

  useEffect(() => {
    setInfo(data);
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    data.forEach((item) => {
      const name = item.country.toLowerCase();
      if (name.includes(search.toLowerCase())) {
        arr.push(item);
      }
    });
    setInfo(arr);
  };

  let mode = ['light', 'dark'];
  return (
    <div className="container">
      <section className="banner-section">
        <div className="banner">
          <div className="banner-text">
            <h1 className="text-neutral-100 primary-heading text-center">
              Air pollution is the contamination of air due to the presence of
              substances.
            </h1>
          </div>
          <div className="search">
            <form className="d-flex">
              <div
                type="search"
                placeholder="Find your country"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => handleSearch(e)}
              />
            </form>
          </div>
        </div>
      </section>
      <div>
        <div className="countries-heading bg-dodgerblue">
          <h3 className="text-neutral-100 p-i-100">Countries</h3>
        </div>
        <div className="card-container">
          {info.map((country, index) => {
            mode = (index + 1) % 2 === 0 ? [...mode.reverse()] : mode;
            return (
              <div className={`card ${mode[0]}`} key={country.alpha3}>
                <Link to={`/${country.country}`}>
                  <img
                    loading="lazy"
                    width={130}
                    height={140}
                    alt="card"
                    className="img-fluid"
                    src={country.map}
                  />
                  <h3 className="country-name text-neutral-100">
                    {country.country}
                  </h3>
                  <small className="text-neutral-100">
                    ALPHA:
                    {' '}
                    {country.alpha3}
                  </small>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Countries;
