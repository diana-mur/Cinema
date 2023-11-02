import btnLeft from "../../assets/arrowToLeft.svg"
import btnRight from "../../assets/arrowToRight.svg"
import '../carousels/CarouselButton/CarouselButton.css'

export default function BtnsCarousel({toLeft, toRight, currentCount, mathTC, justifyContent}) {
    
    return (
        <div className="counterFlip" style={{
            justifyContent: `${justifyContent}`
        }}>
            <button onClick={toLeft}><img src={btnLeft} alt="" /></button>
            <p>{currentCount + 1}/{mathTC}</p>
            <button onClick={toRight}><img src={btnRight} alt="" /></button>
        </div>
    )
}