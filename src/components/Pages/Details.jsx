/* eslint-disable operator-linebreak */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPollutionData } from '../../redux/slice';
import data from '../../data/data';
import NavBar from '../props/NavBar';
import Footer from '../props/Footer';
import back from '../../imgs/back.png';
import Loading from '../../imgs/loading.gif';
import '../../styles/details.css';

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
      <div className="bg-main back-container">
        <button
          className="back-btn text-neutral-100"
          type="button"
          onClick={() => navigate('/')}
        >
          <img
            width={20}
            height={20}
            className="back-icon"
            src={back}
            alt="Back"
          />
          Back Home
        </button>
      </div>
      {!loading ? (
        <div className="county-details bg-main">
          <div className="country-info">
            <h1 className="text-neutral-100">{name}</h1>
            <img width={200} height={200} src={map} alt="country map" />
          </div>
          <div className="pollution-data">
            <ul className="pollution-table">
              {pollutionData &&
                pollutionData.map((data) => (
                  <li className="data-item" key={data[0]}>
                    <p className="text-neutral-100">Concentration</p>
                    <p className="text-neutral-100">
                      {data[1]}
                      µg/m3
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="loading-data bg-main">
          <img src={Loading} alt="" />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Details;
