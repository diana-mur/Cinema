import heart from "../../../assets/heart.svg"
import "./Favorites.css"

export default function Favorites() {
    return (
        <div className="favorites">
            <button className="heart"><img src={heart} /></button>
            <p>В избранном у 37933 человек</p>
        </div>
    )
}