import './cardPerson.css'

export default function CardPerson({
    imgPerson,
    place,
    namePersonLocal,
    namePerson,
    agePerson,
}) {
    return (
        <div className="cardPerson" style={{
            backgroundImage: `url(${ imgPerson })`
        }}>
            <p className="place">{place}-е место</p>
            <div className="infoPerson">
                <h4 className="namePersonLocal">{namePersonLocal}</h4>
                <h5 className="namePerson">{namePerson}</h5>
                <p className="agePerson">{agePerson} лет</p>
            </div>
        </div>
    )
}