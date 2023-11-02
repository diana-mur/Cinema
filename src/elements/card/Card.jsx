import './Card.css'

export default function Card({ name, img, categories, rating }) {
    return (
        <div className="card">
            <p className="rating">{rating}</p>
            <div className="cardImg">
                <img src={img} alt="" />
            </div>
            <div className="about">
                <h2>{name}</h2>
                <p className="filmCategories">{
                    categories.map((e, index) => {
                        if (index < e.length - 1) return e + ", "
                        else if (index == e.length - 1) return e
                    })
                }</p>
            </div>
        </div>
    )
}