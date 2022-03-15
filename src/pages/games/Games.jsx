import { useEffect, useState } from 'react';
import Navbar from '../../core/navbar/Navbar';
import { Link } from 'react-router-dom';

//services
import { getGames } from '../../services/games.service';

//service
import { getCart, createCart, addGame } from '../../services/cart.service';

import './games.css';

export default function Games() {
  const [games, setGames] = useState([]);
  const [purchased, setPurchased] = useState([]);

  useEffect(() => {
    loadGames();
    btnDisabled();
    console.log('games', games);
    console.log('purchased', purchased);
  }, []);

  const loadGames = async () => {
    try {
      const response = await getGames();
      setGames(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  const buyGame = async (id) => {
    try {
      const response = await getCart();
      if (response.data === `doesn't have a cart`) {
        try {
          await createCart();
        } catch (err) {
          console.log(err.message);
        }
      }
      await addGame({ game: id });
      setPurchased([...purchased, { title: game.title }]);
    } catch (err) {
      console.log(err.message);
    }
  };

  const btnDisabled = async () => {
    const response = await getCart();
    if (response.data.games) setPurchased(response.data.games);
  };

  return (
    <>
      <Navbar />
      <ul className="cards">
        {games &&
          games.map((game, index) => {
            return (
              <li key={index} className="card">
                <p className="card_price">{game.price} €</p>
                <img src={game.img} alt={game.title} className="card_img" />
                <div className="card_content">
                  <div className="card_header">
                    <svg className="card_arc">
                      <path />
                    </svg>
                    <h3 className="card_title">{game.title}</h3>
                    {purchased &&
                    (purchased.length == 0 ||
                      (purchased.length > 0 &&
                        purchased.findIndex(
                          (purchased) => purchased.title === game.title
                        ) === -1)) ? (
                      <button
                        className="card_btn"
                        onClick={() => buyGame(game.id)}
                      >
                        BUY
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="card_footer">
                    <h3 className="card_descr">{game.descr}</h3>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}
