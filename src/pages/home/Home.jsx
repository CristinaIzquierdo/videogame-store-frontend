import Navbar from '../../core/navbar/Navbar';

import './home.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="home_section">
        <div className="home_section_content">
          <img
            alt=""
            className="bg_img"
            src={require('../../static/img/img_landpage.png')}
          />
        </div>
        <h1 className="grid1">Welcome to GameStuff</h1>
        <h2 className="grid2">Nice to see you here</h2>
        <h3 className="grid3">Buy your favorite games at the best price</h3>
      </section>
    </>
  );
}
