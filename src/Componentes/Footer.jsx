
import '../Estilos/Footer.css';
import logo from '../Img/logo.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faFacebook, faTwitter, faInstagram);

export default function Footer() {
  return (
    <footer>
      <div className="Container-footer">
        <div className="footer">
          <div className="logo">
            <img src={logo} alt="Logo de Star Wars" />
          </div>
          <div className="social-media">
            <a href="https://www.facebook.com/starwarsla/?brand_redir=169299103121699">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/starwars">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/starwars/">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="https://www.starwars.com/">More from Star Wars</a>
              </li>
            
            </ul>
          </div>
        
        </div>
      </div>
    </footer>
  );
}
