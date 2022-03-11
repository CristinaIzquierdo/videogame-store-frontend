import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//componentes
import Games from '../pages/games/Games';
import Home from '../pages/home/Home';

//styles
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
