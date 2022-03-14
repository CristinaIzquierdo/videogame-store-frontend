import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">HOME</Link>
      <Link to="/games">GAMES</Link>
      <Link to="/auth">AUTH</Link>
    </nav>
  );
}
