import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
      </ul>
    </nav>
  );
}
