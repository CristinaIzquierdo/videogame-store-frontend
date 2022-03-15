import Navbar from '../../core/navbar/Navbar';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';

import './auth.css';

export default function Auth() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Register />
        <Login />
      </div>
    </>
  );
}
