import React, { useEffect, useState } from 'react';
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
  return (
    <div className="container">
      <section className="banner-section">
        <div className="banner shadow p-3 mb-5">
          <div className="banner-text">
            <h1 className="">Get air quality data </h1>
            <h2>Where you live.</h2>
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
        <div className="countries-heading">
          <h1>Countries</h1>
          <h5>--Browse Air pollution by Country--</h5>
        </div>
        <div className="row">
          {info.map((country) => (
            <div className="col-sm-6 col-md-4 card-card" key={country.alpha3}>
              <div className="shadow p-3 mb-5 bg-white">
                <img alt="card" className="img-fluid" src={country.map} />
                <div>
                  <Link to={`/${country.country}`}>
                    <h6 className="country-name">{country.country}</h6>
                  </Link>
                </div>
                <div>
                  <small className="text-muted">
                    ALPHA:
                    {' '}
                    {country.alpha3}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Countries;
