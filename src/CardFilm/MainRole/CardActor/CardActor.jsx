import cardImg from "../../../assets/tr3.png"
import "./CardActore.css"

export default function CardActor() {
    return (
        <div className="cardActor">
            <div className="cardActorImg">
                <img src={cardImg} alt="" />
            </div>
            <h4>Дэниэл Рэдклифф</h4>
            <h5>Daniel Radcliffe</h5>
            <p>Тим Дженкин</p>
        </div>
    )
}