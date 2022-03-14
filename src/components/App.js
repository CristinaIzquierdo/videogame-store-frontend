import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import Games from '../pages/games/Games';
import Home from '../pages/home/Home';
import Auth from '../pages/auth/Auth';
import NotFound from '../pages/notFound/NotFound';

//styles
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/auth" element={<Auth />} />
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
