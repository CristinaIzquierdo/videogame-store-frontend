import { useState } from 'react';

//services
import { login } from '../../services/users.service';

import './login.css';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setUser((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      const response = await login(user);
      localStorage.setItem('token', response.token);
      window.location.href = '/';
    } catch (err) {
      alert('Usuario o contraseña incorrectos');
      console.error(err);
    }
  };

  return (
    <section className="table">
      <div className="table-cell">
        <h1> Login </h1>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={user.email}
          onChange={handleChange}
          type="text"
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={user.password}
          onChange={handleChange}
          type="password"
        />
        <button onClick={handleSubmit}> Sign up </button>
      </div>
    </section>
  );
}
