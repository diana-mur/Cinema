import "./AboutFilm.css"
import play from "../../assets/play.svg"
import BtnOutline from "../../elements/buttons/btnOutline"
import RatingRadial from "./ratingRadial/Rating"
import Like from "../../elements/buttons/btnLike"
import Dislike from "../../elements/buttons/btnDislike"
import ExpectationRating from "./expectationRating/expectationRating"
import Favorites from "./favorites/favorites"
import DetailInfo from "./detailedInfo/detailInfo"
import BlockInfo from "./detailedInfo/blockInfo/blockInfo"
import { Link } from "react-router-dom"
import arrowLink from "../../assets/arrowLink.svg"

export default function AboutFilm({
    localFilmName,
    filmName,
    img,
    filmRating,
    description,
    createdAt,
    countries,
    slogan,
    screenwriters,
    producers,
    operators,
    composers,
    designers,
    editors,
    genres,
    worldwideGross,
    worldPremiereDate,
    localPremiereDate,
    ageCategory,
    durationByMin
}) {
    return (
        <>
            <div className="aboutFilm">
                <div className="imgFilm">
                    <img src={img} alt="" />
                </div>
                <div className="characteristic">
                    <p className="pathPage">
                        <Link className="linkHome" to={`/`}>Главная</Link>
                        <img src={arrowLink} alt="" />
                        {localFilmName}</p>
                    <h1 className="localFilmName">{localFilmName}</h1>
                    <h2 className="filmName">{filmName}</h2>
                    <div className="filmRating">
                        <RatingRadial rating={filmRating} />
                    </div>
                    <p className="about">{description}</p>
                    <div>
                        <BtnOutline fill={" Смотреть трейлер"} img={play} />
                    </div>
                </div>

            </div>
            <div className="action">
                <div>
                    <Like />
                    <Dislike />
                </div>
                <ExpectationRating />
                <Favorites />
            </div>
            <DetailInfo createdAt={createdAt}
                countries={countries}
                slogan={slogan}
                screenwriters={screenwriters}
                producers={producers}
                operators={operators}
                composers={composers}
                designers={designers}
                editors={editors}
                genres={genres}
                worldwideGross={worldwideGross}
                worldPremiereDate={worldPremiereDate}
                localPremiereDate={localPremiereDate}
                ageCategory={ageCategory}
                durationByMin={durationByMin}
            />
            <BlockInfo />
        </>
    )
}