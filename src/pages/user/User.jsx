import { useEffect, useState } from 'react';

//service
import { getInfo } from '../../services/users.service';
import { getCart } from '../../services/cart.service';

//components
import Navbar from '../../core/navbar/Navbar';
import { createBrowserHistory } from 'history';

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
      console.log(cart.data);
      setCart(cart.data);
      setUser(response.user);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <Navbar />
      <div>
        <h1>User</h1>
        <h2>{user.name}</h2>
        <img src={user.image} alt="fasd" />
        <h1>Cart</h1>

        <p>{cart.date}</p>
        {cart.games &&
          cart.games.length > 0 &&
          cart.games.map((item, index) => (
            <div key={index}>
              <h2>{item['title']}</h2>
            </div>
          ))}
      </div>
    </>
  );
}
