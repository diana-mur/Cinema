import img from "../../../assets/tr2.png"
import comm from "../../../assets/comm.svg"
import link from "../../../assets/link.svg"
import danger from "../../../assets/danger.svg"
import Like from "../../../elements/buttons/btnLike"
import Dislike from "../../../elements/buttons/btnDislike"
import "./comment.css"

export default function Comment() {
    return (
        <div className="comment">
            <div className="headComm">
                <div className="infoUser">
                    <div className="avatar">
                        <img src={img} alt="" />
                    </div>
                    <div className="aboutUserComm">
                        <div className="aboutComm">
                            <h1>Lerata</h1>
                            <p>Положительная рецензия</p>
                        </div>
                        <div className="aboutUser">
                            <a href="">Рецензии (113)</a>
                            <a href="">Оценки</a>
                            <a href="">Друзья</a>
                            <a href="">Фильмы</a>
                            <a href="">Звёзды</a>
                        </div>
                    </div>
                </div>
                <div className="reactions">
                    <Like visible={true} />
                    <Dislike visible={true} />
                </div>
            </div>
            <div className="nameComm">
                <h1>На пути к цели</h1>
                <p>14 апреля 2023 | 09:59</p>
            </div>
            <div className="textComm">
                Честно скажу, я раньше не особо задумывалась о таком понятии,
                как апартеид. Он казался чем-то старым, давно ушедшим в небытие
                и не заслуживающим внимания современного человека, однако хочу
                признаться, что просмотр фильма «Побег из Претории» заставил меня
                пересмотреть многие вещи.
            </div>
            <div className="actionComm">
                <div>
                    <a href="">
                        <img src={comm} alt="" />
                        Комментировать
                    </a>
                    <a href="">
                        <img src={link} alt="" />
                        Прямая ссылка
                    </a>
                </div>
                <a href="" className="danger">
                    <img src={danger} alt="" />
                    Пожаловться на спойлер
                </a>
            </div>
        </div>
    )
}