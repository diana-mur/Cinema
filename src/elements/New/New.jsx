import { useState } from "react"
import BtnsCarousel from "../buttons/btnsCarousel"
import CardCarousel from "../card/CardCarousel"
import Title from "../title/title"
import Slides from "../carousels/CarouselButton/slidesCarousel/Slides"
import "../carousels/CarouselButton/CarouselButton.css"

export default function New({ arr }) {
    const [currentCount, setCurrentCount] = useState(0)
    const [totalCount, setTotalCount] = useState(arr.length - 1)
    let mathTC = Math.ceil(totalCount / 4)

    function toLeft() {
        if (currentCount > 0) {
            setCurrentCount(currentCount - 1)
        } else {
            setCurrentCount(mathTC - 1)
        }
    }

    function toRight() {
        if (currentCount < mathTC - 1) {
            setCurrentCount(currentCount + 1)
        } else {
            setCurrentCount(currentCount == 0);
        }
    }
    
    return (
        <>
            <Title title={'Ожидаемые новинки'} visible={false}>
                <BtnsCarousel toLeft={toLeft} toRight={toRight} currentCount={currentCount} mathTC={mathTC} justifyContent={'flex-end'} />
            </Title>

            <div className="cutCarouselFlip">
            <Slides currentCount={currentCount} >
                {arr.map((e, index) => {
                    return (
                        <CardCarousel key={index} name={e.name} img={e.img} categories={e.categories} rating={e.rating} />
                    )
                })}
            </Slides>
            </div>
        </>
    )
}