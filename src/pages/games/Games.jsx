import { useEffect, useState } from 'react';
import Navbar from '../../core/navbar/Navbar';
import { Link } from 'react-router-dom';

//services
import { getGames } from '../../services/games.service';

import './games.css';

export default function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    try {
      const response = await getGames();
      setGames(response);
    } catch (err) {
      console.log(err.message);
    }
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
                    <svg class="card_arc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <h3 className="card_title">{game.title}</h3>
                    <Link to="" className="link_nt">
                      <button className="card_btn"> BUY </button>
                    </Link>
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
