import React, { useState } from "react";
import "./CarouselButton.css"
import BtnsCarousel from "../../buttons/btnsCarousel";
import Slides from "./slidesCarousel/Slides";

export default function CarouselButton({ children, num, justifyContent }) {
    const [currentCount, setCurrentCount] = useState(0)
    const [totalCount, setTotalCount] = useState(num)
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
            <div className="cutCarouselFlip">
                <Slides currentCount={currentCount} >
                    {children}
                </Slides>
                <BtnsCarousel toLeft={toLeft} toRight={toRight} currentCount={currentCount} mathTC={mathTC} justifyContent={justifyContent} />
            </div>
        </>
    )
}