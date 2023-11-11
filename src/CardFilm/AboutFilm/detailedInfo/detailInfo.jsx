import "./detailInfo.css"

export default function DetailInfo({
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
        <div className="info">
            <div className="titleInfo">
                <p>Год:</p>
                <p>Страна:</p>
                <p>Слоган:</p>
                <p>Режиссер:</p>
                <p>Сценарий:</p>
                <p>Продюсер:</p>
                <p>Оператор:</p>
                <p>Композитор:</p>
            </div>
            <div className="detailedInfo">
                <p>{createdAt}</p>
                <p>{countries}</p>
                <p>«{slogan}»</p>
                <p>{screenwriters}</p>
                <p>{screenwriters}</p>
                <p>{producers}</p>
                <p>{operators}</p>
                <p>{composers}</p>
            </div>
            <div className="titleInfo">
                <p>Художник:</p>
                <p>Монтаж:</p>
                <p>Жанр:</p>
                <p>Сборы в мире:</p>
                <p>Премьера (мир):</p>
                <p>Премьера (РФ):</p>
                <p>Возраст:</p>
                <p>Время:</p>
            </div>
            <div className="detailedInfo">
                <p>{designers}</p>
                <p>{editors}</p>
                <p>{genres}</p>
                <p>{worldwideGross}</p>
                <p>{worldPremiereDate}</p>
                <p>{localPremiereDate}</p>
                <p>{ageCategory}</p>
                <p>{durationByMin} мин. / {
                    (Math.floor(durationByMin / 60) < 10) ? '0' + Math.floor(durationByMin / 60) : Math.floor(durationByMin / 60)
                }:{
                        durationByMin % 60 < 10 ? '0' + durationByMin % 60 : durationByMin % 60
                    }</p>
            </div>
        </div>
    )
}