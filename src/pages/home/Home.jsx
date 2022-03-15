import Navbar from '../../core/navbar/Navbar';

import './home.css';

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="home_txt_section">
        <h1 className="txt_1">
          <span className="span_bg">Welcome to GameStuff</span>
        </h1>
        <h2 className="txt_2">Nice to see you here</h2>
        <p className="txt_3">Buy your favorite games at the best price</p>
      </section>
    </>
  );
}
