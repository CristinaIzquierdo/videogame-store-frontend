import { useState } from 'react';

import { register } from '../../services/users.service';

export default function Register() {
  const [user, setUser] = useState({
    email: '',
    name: '',
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
      const response = await register(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="table-cell">
      <div className="data_form">
        <h1>Register</h1>
        <label htmlFor="name">Name*</label>
        <input
          value={user.name}
          type="text"
          onChange={handleChange}
          name="name"
        />
        <label htmlFor="email">Email*</label>
        <input
          type="text"
          value={user.email}
          onChange={handleChange}
          name="email"
        />
        <label htmlFor="password">Password*</label>
        <input
          value={user.password}
          type="password"
          onChange={handleChange}
          name="password"
        />
        <button className="card_btn_form" onClick={handleSubmit}>
          Sign up
        </button>
        <p>* Required</p>
      </div>
    </div>
  );
}
