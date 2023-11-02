import CardsPersons from "../cardsPersons/cardsPersons";
import Category from "../title/category/category";
import Title from "../title/title";

export default function FourthBlock() {
    const arrPersons = ['За год', 'За месяц', 'За неделю']; 
 
    return (
        <div className="container" id="4">
                <Title title={'Популярные персоны'} visible={false}>
                    <Category arrCategory={arrPersons} />
                </Title>
                <CardsPersons />
            </div>
    )
}