import InscriptionArrow from "../../elements/buttons/inscriptArrow"
import Title from "../../elements/title/title"
import "./Posters.css"

export default function Posters({ localName, img }) {
    return (
        <div className="container" id="posters">
            <Title title={"Постеры к фильму"}>
                <InscriptionArrow title={"Все постеры"} />
            </Title>
            <h4 className="nameListPosters">{localName}</h4>
            <div className="listPosters">
                <div className="poster">
                    <img src={img} alt="" />
                </div>
                <div className="poster">
                    <img src={img} alt="" />
                </div>
                <div className="poster">
                    <img src={img} alt="" />
                </div>
                <div className="poster">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}