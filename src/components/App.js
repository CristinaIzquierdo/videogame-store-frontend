import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import Games from '../pages/games/Games';
import Home from '../pages/home/Home';
import Auth from '../pages/auth/Auth';
import NotFound from '../pages/notFound/NotFound';
import User from '../pages/user/User';

//styles
import './App.css';
import { render } from '@testing-library/react';

function App() {
  const token = localStorage.getItem('token');

  return (
    <>
      <Router>
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/auth" element={<Auth />} />
            {token && <Route path="/profile" element={<User />} />}
            <Route path="*" element={<NotFound />} />
          </>
        </Routes>
      </Router>
    </>
  );
}

export default App;
