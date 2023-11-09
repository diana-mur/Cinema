import './btn.css'

export default function BtnOutline({ fill, img }) {
    return (
        <button className="btnOutline"><img src={img} />{fill}</button>
    )
}