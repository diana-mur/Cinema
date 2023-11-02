import './Slides.css'

export default function Slides({currentCount, children}) {
    return (
        <div className="carouselFlip" style={{
            transform: `translateX(-${currentCount * 102}%)`
        }}>
            {children}
        </div>
    )
}