import { useState } from "react"
import './CarouselSwap.css'
import Like from "../../buttons/btnLike"
import Dislike from "../../buttons/btnDislike"

export default function CarouselSwap() {
    const [mainTrailer, setMainTrailer] = useState(0)
    const array = [
        {
            id: 1,
            name: 'Мулан',
            img: '../src/assets/tr3.png',
        },
        {
            id: 2,
            name: 'Форсаж 9',
            img: '../src/assets/tr4.png',
        },
        {
            id: 3,
            name: 'Чёрная Вдова',
            img: '../src/assets/tr2.png',
        },
        {
            id: 4,
            name: 'Тихое место 4',
            img: '../src/assets/tr1.png',
        },
    ];

    return (
        <div className="newTrailer">
            <div className="mainTrailer">
                <img src={array[mainTrailer].img} alt="" />
                <div className="mainTitleTrailer">
                    <h3>{array[mainTrailer].name}</h3>
                    <div>
                        <Like />
                        <Dislike />
                    </div>
                </div>
            </div>
            <div className="sliderTrailer">
                <div className="switch" style={{
                    transform: `translate(${mainTrailer * 100}%)`
                }} />
            </div>
            <div className="menuTrailers">
                {
                    array.map((item, index) => {
                        return (
                            <div className="childTrailer" key={item.id}
                                onClick={() => setMainTrailer(index)}>
                                <img src={item.img} alt="" />
                                <p className="titleTrailer">{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}