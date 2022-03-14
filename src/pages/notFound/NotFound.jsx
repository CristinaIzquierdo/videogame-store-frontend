import { Link } from 'react-router-dom';
import Navbar from '../../core/navbar/Navbar';

import './notFound.css';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="section_nf">
        <h1 className="title_nf">404 Not Found</h1>
        <p className="p_nf">
          You've spent too much time playing videogames, you'd better get back
          to the real world!!
        </p>
        <Link to="/" className="link_nt">
          <button className="btn_nt"> HOME </button>
        </Link>
        <img alt="Timmy Turner playing videogames" className="img_nf" />
      </section>
    </>
  );
}
