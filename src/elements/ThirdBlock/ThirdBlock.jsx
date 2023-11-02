import CardCarousel from "../card/CardCarousel"
import CarouselButton from "../carousels/CarouselButton/CarouselButton"
import Category from "../title/category/category"
import Title from "../title/title"

export default function ThirdBlock({arr}) {
    const arrCatPopFilms = ['Всё время', '2023', '2022',
    '2021', '2020', '2019', '2018'];

    return (
        <div className="container" id="3">
                <Title title={'Популярные фильмы'} visible={true}>
                    <Category arrCategory={arrCatPopFilms} />
                </Title>
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