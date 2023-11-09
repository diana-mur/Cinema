import './Card.css'

export default function Card({ name, img, categories, rating, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <p className="rating">{rating}</p>
            <div className="cardImg">
                <img src={img} alt="" />
            </div>
            <div className="about">
                <h2>{name}</h2>
                <p className="filmCategories">{
                    categories.join(', ')
                }</p>
            </div>
        </div>
    )
}