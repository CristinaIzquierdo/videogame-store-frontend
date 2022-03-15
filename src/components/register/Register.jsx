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
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section className="table">
      <div className="table-cell">
        <h1>Register</h1>
        <label htmlFor="name">Name</label>
        <input
          value={user.name}
          type="text"
          onChange={handleChange}
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={user.email}
          onChange={handleChange}
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={user.password}
          type="password"
          onChange={handleChange}
          name="password"
        />
        <button onClick={handleSubmit}> Register</button>
      </div>
    </section>
  );
}
