import { useParams } from "react-router-dom";
import HeaderFull from "../elements/Headers/HeaderFull";
import AboutFilm from "./AboutFilm/AboutFilm";
import MainRole from "./MainRole/MainRole";
import "./PageFilm.css";
import { useEffect, useState } from "react";
import ListBlock from "./AboutFilm/listBlocks/listBlocks";
import TrailersFilm from "./TrailersFilm/TrailersFilm";
import Awards from "./Awards/Awards";
import Footer from "../elements/Footer/Footer"
import Posters from "./Posters/Posters";
import Snapshots from "./Snapshots/Snapshots";
import SequelsPrequels from "./Sequels&Prequels/Sequels&Prequels";
import Quotes from "./Quotes/Quotes";
import Similar from "./Similar/Similar";
import Newsletter from "../elements/Newsletter/Newsletter";
import Reviews from "./FilmReviews/Reviews";

export default function PageFilm() {
  const [array, setArray] = useState([]);
  let { movieId } = useParams();

  const arrPopFilms = [
    {
      name: 'Джокер',
      img: '../src/assets/cardImg.png',
      categories: 'Триллер, драма, криминал',
      rating: '8.50',
    },
    {
      name: 'История игрушек 4',
      img: '../src/assets/cardImg.png',
      categories: 'Мультфильм, фэнтези, комедия, приключения ...',
      rating: '7.80',
    },
    {
      name: 'Однажды в… Голливуде',
      img: '../src/assets/cardImg.png',
      categories: 'Драма, комедия',
      rating: '7.70',
    },
    {
      name: 'Солнцестояние',
      img: '../src/assets/cardImg.png',
      categories: 'Ужасы, триллер, драма',
      rating: '7.10',
    },
    {
      name: 'Джокер',
      img: '../src/assets/cardImg.png',
      categories: 'Триллер, драма, криминал',
      rating: '8.50',
    },
    {
      name: 'История игрушек 4',
      img: '../src/assets/cardImg.png',
      categories: 'Мультфильм, фэнтези, комедия, приключения ...',
      rating: '7.80',
    },
    {
      name: 'Однажды в… Голливуде',
      img: '../src/assets/cardImg.png',
      categories: 'Драма, комедия',
      rating: '7.70',
    },
    {
      name: 'Солнцестояние',
      img: '../src/assets/cardImg.png',
      categories: 'Ужасы, триллер, драма',
      rating: '7.10',
    },
  ];

  useEffect(() => {
    fetch(`http://192.168.144.66:8081/api/movie/${movieId}`)
      .then((response) => response.json())
      .then((json) => setArray(json));
  }, []);

  return (
    <>
      <div className="filmBG" id="premiers">
        <div className="filmBGgradient" style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, #1E2538 95%), url(${array.backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }} />
        <div className="container">
          <HeaderFull />
          <div className="reducedContainer">
            <AboutFilm
              localFilmName={array.localName}
              filmName={array.originalName}
              img={array.urlIcon}
              filmRating={array.averageRating}
              description={array.description}
              createdAt={array.createdAt}
              countries={array.countries}
              slogan={array.slogan}
              screenwriters={array.screenwriters}
              producers={array.producers}
              operators={array.operators}
              composers={array.composers}
              designers={array.designers}
              editors={array.editors}
              genres={array.genres}
              worldwideGross={array.worldwideGross}
              worldPremiereDate={array.worldPremiereDate}
              localPremiereDate={array.localPremiereDate}
              ageCategory={array.ageCategory}
              durationByMin={array.durationByMin}
            />
          </div>
        </div>
      </div>
      <MainRole />
      <ListBlock />
      <TrailersFilm name={array.localName} img={array.backgroundImage} />
      <Awards />
      <Posters localName={array.localName} img={array.urlIcon} />
      <Snapshots localName={array.localName} img={array.urlIcon} />
      <SequelsPrequels arr={arrPopFilms} />
      <Quotes />
      <Similar arr={arrPopFilms} />
      <Reviews />
      <div className="darkBG">
        <div style={{height: '69px'}} />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}
