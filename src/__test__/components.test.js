import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Contact from '../Components/Pages/Contact';
import Details from '../Components/Pages/Details';
import Home from '../Components/Pages/Home';
import '@testing-library/jest-dom';

describe('Testing Profile and Mission Components', () => {
  it('Testing MissionContainer components', () => {
    const home = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <Home />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    expect(home).toMatchSnapshot();
  });

  it('Testing MissionContainer components', () => {
    const contact = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <Contact />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    expect(contact).toMatchSnapshot();
  });

  it('Testing MissionContainer components', () => {
    const details = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <Details />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    expect(details).toMatchSnapshot();
  });
});
