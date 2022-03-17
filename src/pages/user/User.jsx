import { useEffect, useState } from 'react';

import './user.css';

//service
import { getInfo } from '../../services/users.service';
import { getCart } from '../../services/cart.service';

//components
import Navbar from '../../core/navbar/Navbar';

export default function User() {
  const [user, setUser] = useState({
    name: '',
    image: '',
  });
  const [cart, setCart] = useState({
    date: '',
    games: [],
  });

  useEffect(() => {
    loadInfo();
  }, []);

  const loadInfo = async () => {
    try {
      const response = await getInfo();
      const cart = await getCart();
      console.log(response);
      setCart(cart.data);
      if (response.user.image == null) {
        response.user.image =
          'https://miro.medium.com/max/360/1*2rm-2pXK6QUBQowbb9xkuQ.jpeg';
      }
      setUser(response.user);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container_user">
        <div className="user_info">
          <h1 className="title_container">Personal information</h1>
          <img src={user.image} className="user_icon" />
          <h2 className="container_user">Your username: {user.name}</h2>
        </div>
        <div className="user_cart">
          <h1 className="title_container">Your cart</h1>
          <p>{cart.date}</p>
          {cart == 'empty cart!' && <p>Your cart is empty!</p>}
          {cart.games &&
            cart.games.length > 0 &&
            cart.games.map((item, index) => (
              <div key={index} className="games_container">
                <h2 className="container_user">{item['title']}</h2>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
