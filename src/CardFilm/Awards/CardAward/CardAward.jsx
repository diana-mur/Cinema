import oscar from "../../../assets/oscar.png"
import "./CardAward.css"

export default function CardAward() {
    return (
        <div className="cardAward">
            <div>
                <img src={oscar} alt="" />
            </div>
            <div>
                <h3>Оскар</h3>
                <h4>Лучшая мужская роль</h4>
                <p>2020</p>
            </div>
        </div>
    )
}