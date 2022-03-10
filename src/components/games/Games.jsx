import { Link } from 'react-router-dom';

export default function Games({ game }) {

    return <Link to={`/detail/${game.id}`}><label>{game.title}</label></Link>;

}

// import { useEffect, useState } from 'react';

// //services
// import {getGames} from '../../services/games.service';

// //components
// import Games from '../../components/games/Games';

// import './login.css';

// export default function Login(){

//     const [games, setGames] = useState([]);

//     useEffect(() => {
//         loadGames();
//     }, []);

//     const loadGames = async () => {
//         try{
//             const response = await getGames();
//             setGames(response);
//         }  catch(err){
//            console.table(err)
//         }
//     };

//     return(
//        <section>
//             <h1 >Login</h1>  
//             <input placeholder='Username' /> Enter your username
//             <input placeholder='Password' /> Enter your password
//             <button> Iniciar sesión </button>
//             <h3>JUEGOS</h3>
//             {
//         games && games.map(
//           (game, index) => {  
//             return <Games key={index} game={game} />
//           }
//         )
//       }
//         </section>
//     )
// }