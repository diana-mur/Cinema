import { useParams } from "react-router-dom";
import HeaderFull from "../elements/Headers/HeaderFull";
import AboutFilm from "./AboutFilm/AboutFilm";
import MainRole from "./MainRole/MainRole";
import "./PageFilm.css";
import { useEffect, useState } from "react";
import ListBlock from "./AboutFilm/listBlocks/listBlocks";
import TrailersFilm from "./TrailersFilm/TrailersFilm";
import Awards from "./Awards/Awards";

export default function PageFilm() {
  const [array, setArray] = useState([]);
  let { movieId } = useParams();

  useEffect(() => {
    fetch(`http://192.168.144.66:8081/api/movie/${movieId}`)
      .then((response) => response.json())
      .then((json) => setArray(json));
  }, []);

  return (
    <>
      <div className="filmBG">
        <div className="filmBGgradient">
          <img className="filmBGImg" src={array.backgroundImage} alt="" />
        </div>
        <div className="container">
          <HeaderFull />
          <div className="reducedContainer">
            <AboutFilm
              localFilmName={array.localName}
              filmName={array.originalName}
              img={array.urlIcon}
              filmRating={array.averageRating}
            />
          </div>
        </div>
      </div>
      <MainRole />
      <ListBlock />
      <TrailersFilm name={array.localName} />
      <Awards />
      
    </>
  );
}
