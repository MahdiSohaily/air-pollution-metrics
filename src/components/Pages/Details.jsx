import React, { useEffect, useState } from 'react';
import '../../styles/details.css';
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPollutionData } from '../../redux/slice';
import Loading from '../../imgs/loading.gif';
import data from '../../data/data';
import NavBar from '../props/NavBar';
import Footer from '../props/Footer';
import back from '../../imgs/back.png';

function Details() {
  const { country } = useParams();
  const [map, setMap] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    data.forEach((e) => {
      if (e.country === country) {
        setMap(e.map);
        setName(e.country);
        const endPoint = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${e.latitude}&lon=${e.longitude}&appid=a7733a45244c59c3f4d9aa629225be4c`;
        dispatch(getPollutionData(endPoint));
      }
    });
  }, [country, dispatch]);
  const pollutionData = useSelector((state) => state.pollution.data);
  const loading = useSelector((state) => state.pollution.loading);

  return (
    <div>
      <NavBar />
      <div className="back-btn container">
        <button type="button" onClick={() => navigate('/')}>
          <img src={back} alt="Back" />
          Back Home
        </button>
      </div>
      <div className="back-home" />
      {!loading ? (
        <div className="county-details">
          <div className="country-info">
            <h1>{name}</h1>
            <img src={map} alt="" />
          </div>
          <div className="pollution-data">
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Gas</th>
                  <th>Concentration</th>
                </tr>
              </thead>
              <tbody>
                {pollutionData
                  && pollutionData.map((data, i) => (
                    <tr key={data[0]}>
                      <td>{i + 1}</td>
                      <td>{data[0]}</td>
                      <td>
                        {data[1]}
                        µg/m3
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </div>
      ) : (
        <div className="loading-data">
          <img src={Loading} alt="" />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Details;
