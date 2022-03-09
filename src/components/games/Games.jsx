import { Link } from 'react-router-dom';

export default function Games({ game }) {

    return <Link to={`/detail/${game.id}`}><label>{game.title}</label></Link>;

}