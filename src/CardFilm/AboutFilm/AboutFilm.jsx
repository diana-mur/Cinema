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

export default function AboutFilm({ localFilmName, filmName, img, filmRating }) {
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
                    <p className="about">Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.</p>
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
            <DetailInfo />
            <BlockInfo />
        </>
    )
}