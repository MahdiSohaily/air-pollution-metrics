import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../../styles/country.css';
import '../../styles/nav-banner.css';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import data from '../../data/data';

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
        <div className="banner shadow p-3 mb-5 bg-white">
          <div className="banner-text">
            <h1 className="">Get air quality data </h1>
            <h2>Where you live.</h2>
          </div>
          <div className="search">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Find your country"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => handleSearch(e)}
              />
            </Form>
          </div>
        </div>
      </section>
      <CardGroup>
        <div className="countries-heading">
          <h1>Countries</h1>
          <h5>--Browse Air pollution by Country--</h5>
        </div>
        <div className="row">
          {info.map((country) => (
            <div className="col-sm-6 col-md-4 card-card" key={country.alpha3}>
              <Card className="shadow p-3 mb-5 bg-white">
                <Card.Img
                  variant="top"
                  className="img-fluid"
                  src={country.map}
                />
                <Card.Body>
                  <Link to={`/${country.country}`}>
                    <h6 className="country-name">{country.country}</h6>
                  </Link>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    ALPHA:
                    {' '}
                    {country.alpha3}
                  </small>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      </CardGroup>
    </div>
  );
}

export default Countries;
