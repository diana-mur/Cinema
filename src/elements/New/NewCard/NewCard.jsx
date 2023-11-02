import './NewCard.css'

export default function CardsForDues({ 
    numInOrder,
    img,
    name,
    cash,
    cashForPeriod,
    period
  }) {
    return (
        <div className="duesCard">
            <div className="imgCard">
                <img src={img} alt="" />
            </div>
            <div className="descripCard">
                <h5 className="nameCard">{numInOrder}. {name}</h5>
                <h6 className="cashCard">${cash} млн</h6>
                <p className=''>${cashForPeriod} млн за {period}</p>
            </div>
        </div>
    )
}