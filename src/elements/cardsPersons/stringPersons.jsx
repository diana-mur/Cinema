import './cardPerson.css'

export default function StringPersons({ arr }) {
    return (
        <div className="stringsPersons">
            {
                arr.map((item, index) => {
                    return (
                        <div className="stringPerson" key={index}>
                            <div>
                                <h6 className="stringNamePersonLocal">{item.nameLocal}</h6>
                                <p className="stringNamePerson">{item.name}</p>
                                <p className="stringAgePerson">{item.age} лет</p>
                            </div>
                            <p className="stringPlacePerson">{item.place}-е место</p>
                        </div>
                    )
                })
            }
        </div>
    )
}