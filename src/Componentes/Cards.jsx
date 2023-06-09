import '../Estilos/Cards.css'

import card1 from '../Img/cad1.jpeg'
import card2 from '../Img/cad2.jpeg'
import card3 from '../Img/cad3.jpeg'

import exp1 from '../Img/exp1.jpeg'
import exp2 from '../Img/exp2.jpeg'
import exp3 from '../Img/exp3.jpeg'

export default function Cards() {
  return (
    <div className="grid-container">
      <div className="card-container">
        <div className="card-header">
          <span className="title" >Latest News + Features</span>
        </div>
        <div className="card last-new">
          <img src={card1} alt="Imagen 1" />
          <a href='https://www.starwars.com/news/star-wars-visions-highlights-aaus-song'>Visions Revisited: 5 Highlights from “Aau’s Song”</a>
        </div>
        <div className="card last-new">
          <img src={card2} alt="Imagen 2" />
          <a href='https://www.starwars.com/news/star-wars-visions-the-pit-interview'>Meet the Visionaries: LeAndre Thomas and Justin Ridge on the Heartbreak and Hope of “The Pit”</a>
        </div>
        <div className="card last-new">
          <img src={card3} alt="Imagen 3"  />
          <a href='https://www.starwars.com/news/lego-star-wars-for-adults'>10 Great LEGO Star Wars Building Sets for Adults</a>
        </div>
      </div>

      <div className="card-container">
        <div className="card-header">
          <span className="title">Latest Video</span>
        </div>
        <div className="card videos">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="100%"
              src="https://secure.disney.com/embed/5fda0f882a897ebd6b4f2a72?domain=www.starwars.com"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
          <a href="https://www.starwars.com/video/ahsoka-release-date-announced-hayden-christensen-and-diego-luna-chat-and-more">
            Ahsoka Release Date Announced, Hayden Christensen and Diego Luna Chat, and More!
          </a>
        </div>
        <div className="card videos">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="100%"
              src="https://secure.disney.com/embed/5fd8c7400ad65ebd6b4f2a72?domain=www.starwars.com"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
          <a href="https://www.starwars.com/video/begin-ahsoka"> Begin | Ahsoka</a>
        </div>
        <div className="card videos">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="100%"
              src="https://secure.disney.com/embed/5fc88eac6ec5cebd6b4f2a72?domain=www.starwars.com"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
          <a href="https://www.starwars.com/video/celebrating-40-years-of-return-of-the-jedi">
            Celebrating 40 Years of Return of the Jedi
          </a>
        </div>
      </div>

      <div className="card-container">
        <div className="card-header">
          <span className="title">Explore More</span>
        </div>
        <div className="card explore">
    
          <a className='img-link' href='https://www.starwars.com/disneyplus'><img src={exp1} alt="Explorar 1" /></a>
        </div>
        <div className="card explore">
        <a className='img-link' href='https://www.starwars.com/the-high-republic'><img src={exp2} alt="Explorar 2" /></a>
        </div>
        <div className="card explore">
        <a className='img-link' href='https://www.starwars.com/star-wars-celebration'><img src={exp3} alt="Explorar 3" /></a>
        </div>
      </div>
    </div>
  );
}
