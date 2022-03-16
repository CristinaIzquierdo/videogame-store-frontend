import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const token = localStorage.getItem('token');
  return (
    <nav className="navbar">
      <Link to="/">HOME</Link>
      <Link to="/games">GAMES</Link>
      <Link to="/auth">AUTH</Link>
      {token && <Link to="/profile">PROFILE</Link>}
    </nav>
  );
}
