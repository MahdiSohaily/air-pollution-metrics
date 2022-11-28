import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Details from './Components/Pages/Details';
import Contact from './Components/Pages/Contact';

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
