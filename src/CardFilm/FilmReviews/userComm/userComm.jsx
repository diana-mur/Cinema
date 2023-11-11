import img from "../../../assets/tr3.png";
import "./userComm.css";

export default function UserComm() {
    return (
        <div className="newComment">
            <div className="headNewComm">
                <div className="avatarNewComm">
                    <img src={img} alt="" />
                </div>
                <div className="userInfo">
                    <h1>diana-mur</h1>
                    <p>Мой профиль</p>
                </div>
            </div>
            <div className="titleReview">
                <input type="text" placeholder="Заголовок Вашей рецензии" />
                <select>
                    <option value="1">Положительная рецензия</option>
                    <option value="2">Нейтральная рецензия</option>
                    <option value="3">Отрицательная рецензия</option>
                </select>
            </div>
            <div className="typeText">
                <button></button>
            </div>
            <input type="text" className="textReview" />
            <input type="checkbox" />
        </div>
    )
}