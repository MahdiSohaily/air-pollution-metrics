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
        <div className="banner">
          <div className="banner-text">
            <h1 className="text-neutral-100 primary-heading text-center">
              Get air quality data Where you live.
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
          {info.map((country, index) => (
            <div className="card dark" key={country.alpha3}>
              {index + 1}
              <div className="">
                <img
                  width={130}
                  height={140}
                  alt="card"
                  className="img-fluid"
                  src={country.map}
                />
                <div>
                  <Link to={`/${country.country}`}>
                    <h6 className="country-name">{country.country}</h6>
                  </Link>
                </div>
                <div>
                  <small className="text-muted">
                    ALPHA:
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
