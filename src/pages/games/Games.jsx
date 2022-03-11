import { useEffect, useState } from 'react';
import Navbar from '../../core/navbar/Navbar';

//services
import { getGames } from '../../services/games.service';

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
    <section>
      <Navbar />
      <h3>JUEGOS</h3>
      {games &&
        games.map((game, index) => {
          return <li key={index}> {game.title}</li>;
        })}
    </section>
  );
}
