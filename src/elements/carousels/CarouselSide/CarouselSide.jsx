import { useState } from 'react'
import './carouselSide.css'

export default function CarouselSide({arr}) {
    const [indexSlide, setIndexSlide] = useState(0)

    return (
        <div className="carouselSlide">
            <div className="mainSlide" style={{
                backgroundImage: `url(${arr[indexSlide].img})`
            }}>
                <div className="infoSlide">
                    <p>{arr[indexSlide].date}</p>
                    <div>
                        <img src="../src/assets/eye.svg" alt="" />
                        <p>{arr[indexSlide].view}</p>
                    </div>
                    <div>
                        <img src="../src/assets/comment.svg" alt="" />
                        <p>{arr[indexSlide].comm}</p>
                    </div>
                </div>
                <div className="dataSlide">
                    <h2>{arr[indexSlide].name}</h2>
                    <p>{arr[indexSlide].text}</p>
                </div>
            </div>
            <div className="listSlides">
                {
                    arr.map((item, index) => {
                        return (
                        <div className="slide" key={index} style={{
                            backgroundImage: `url(${item.img})`
                        }} onClick={() => setIndexSlide(index)}>
                            <div className="dateSlide">{item.date}</div>
                            <div className="nameSlide">{item.name}</div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}