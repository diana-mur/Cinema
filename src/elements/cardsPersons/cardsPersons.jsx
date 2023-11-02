import CardPerson from "./cardPerson";
import './cardPerson.css'
import StringPersons from "./stringPersons";

export default function CardsPersons() {
const arrPersons = [
    {
        nameLocal: 'Тинто Брасс',
        name: 'Tinto Brass',
        age: '87',
        place: '3',
    },
    {
        nameLocal: 'Джеки Чан',
        name: 'Jackie Chan',
        age: '66',
        place: '4',
    },
    {
        nameLocal: 'Том Харди',
        name: 'Tom Hardy',
        age: '42',
        place: '5',
    },
    {
        nameLocal: 'Акшай Кумар',
        name: 'Akshay Kumar',
        age: '52',
        place: '6',
    },
]

    return (
        <div className="popularPersons">
            <CardPerson imgPerson={'./src/assets/QTarantino.png'}
                place={'1'}
                namePersonLocal={'Квентин Тарантино'}
                namePerson={'Quentin Tarantino'}
                agePerson={'57'}
            />
            <CardPerson imgPerson={'./src/assets/QTarantino.png'}
                place={'2'}
                namePersonLocal={'Квентин Тарантино'}
                namePerson={'Quentin Tarantino'}
                agePerson={'57'}
            />
            <StringPersons arr={arrPersons} />
        </div>
    )
}