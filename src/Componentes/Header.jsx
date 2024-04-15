import { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Estilos/Header.css';
import logo from '../Img/logo.jpg';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../Img/imagen1.jpeg';
import img2 from '../Img/imagen2.jpeg';
import img3 from '../Img/imagen3.jpeg';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const updateShowArrows = () => {
    return !showMenu;
  };

  return (
    <header>
      <div className='contenedor-header'>
        <img className='logo' src={logo} alt="Logo" />

        <nav className={`contenedor-navegacion ${showMenu ? 'show' : ''}`}>
          <a href='#'>NEWS + FEATURES</a>
          <a href='#'>VIDEO</a>
          <a href='#'>FILMS</a>
          <a href='#'>SERIES</a>
          <a href='#'>INTERACTIVE</a>
          <a href='#'>COMMUNITY</a>
          <a href='#'>DATABANK</a>

          <a className='btn-inicio' href={"https://formulario-taupe.vercel.app/"}><p>SIGN IN</p></a>
        </nav>

        <div className={`hamburger ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>

      <section className='Contenedor-section'>
        <Carousel className='carroimg'
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          transitionTime={500}
          interval={3000}
          showStatus={false}
          showArrows={updateShowArrows()}
          swipeable={true}
          emulateTouch={true}
        >
          <div className='Contenedor-imagen'>
            <img src={img1} alt="Imagen 1" />
          </div>
          <div className='Contenedor-imagen'>
            <img src={img2} alt="Imagen 2" />
          </div>
          <div className='Contenedor-imagen'>
            <img src={img3} alt="Imagen 3" />
          </div>
        </Carousel>
      </section>
    </header>
  );
}
