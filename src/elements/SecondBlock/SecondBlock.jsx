import InscriptionArrow from "../buttons/inscriptArrow";
import CarouselSwap from "../carousels/CarouselSwap/CarouselSwap";
import Title from "../title/title";

export default function SecondBlock() {
    return (
        <div className="container" id="2">
                <Title title={'Новые трейлеры'} visible={false}>
                    <InscriptionArrow title={'Все трейлеры'} />
                </Title>
                <CarouselSwap />
            </div>
    )
}