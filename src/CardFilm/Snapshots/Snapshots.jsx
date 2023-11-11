import InscriptionArrow from "../../elements/buttons/inscriptArrow";
import Title from "../../elements/title/title";
import "./Snapshots.css"

export default function Snapshots({ localName, img }) {
    return (
        <div className="container" id="snapshots">
            <Title title={'Кадры из фильма'}>
                <InscriptionArrow title={'Все постеры'} />
            </Title>
            <h4 className="nameListPosters">{localName}</h4>
            <div className="listSnapshots">
                <div className="snapshot hor">
                    <img src={img} alt="" />
                </div>
                <div className="snapshot ver">
                    <img src={img} alt="" />
                </div>
                <div className="snapshot ver">
                    <img src={img} alt="" />
                </div>
                <div className="snapshot ver">
                    <img src={img} alt="" />
                </div>
                <div className="snapshot ver">
                    <img src={img} alt="" />
                </div>
                <div className="snapshot hor">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}