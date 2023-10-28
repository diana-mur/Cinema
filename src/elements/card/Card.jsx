import cardImg from '../../assets/cardImg.png'
import './Card.css'

export default function Card() {
    return (
        <div className="card">
            <p className="rating">6.70</p>
            <div className="cardImg">
                <img src={cardImg} alt="" />
            </div>
            <div className="about">
                <h2>Звёздные войны: Скайуокер. Восход</h2>
                <p className="filmCategories">Фантастика, фэнтези, боевик, приключения</p>
            </div>
        </div>
    )
}