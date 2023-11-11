import CardCarousel from "../../elements/card/CardCarousel"
import CarouselButton from "../../elements/carousels/CarouselButton/CarouselButton"
import Title from "../../elements/title/title"

export default function Similar({ arr }) {
    return (
        <div className="container">
            <Title title={'Похожие фильмы'} justifyContent={'center'} />
            <CarouselButton num={arr.length - 1} justifyContent={'center'} slides={true} btn={true}>
                {arr.map((e, index) => {
                    return (
                        <CardCarousel key={index} name={e.name} img={e.img} categories={e.categories} rating={e.rating} />
                    )
                })}
            </CarouselButton>
        </div>
    )
}