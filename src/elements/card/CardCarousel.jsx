import './Card.css'

export default function CardCarousel({name, img, categories, rating}) {
    return (
        <div className="cardCarousel">
            <p className="rating">{rating}</p>
            <div className="cardImg">
                <img src={img} alt="" />
            </div>
            <div className="about">
                <h2>{name}</h2>
                <p className="filmCategories">{categories}</p>
            </div>
        </div>
    )
}