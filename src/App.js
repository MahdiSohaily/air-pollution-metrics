import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Details from './components/Pages/Details';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
