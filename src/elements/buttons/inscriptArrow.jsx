import arrowRight from '../../assets/arrowRight.svg'
import './btn.css'

export default function InscriptionArrow({title}) {
    return (
        <div className="inscriptionArrow">
            <p>{title}</p>
            <img src={arrowRight} alt="" />
        </div>
    )
}