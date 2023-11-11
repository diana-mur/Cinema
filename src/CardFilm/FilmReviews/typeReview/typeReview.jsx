import "./typeReview.css"

export default function TypeReview({
    nameType,
    amount,
    colorBox,
    colorText
}) {
    return (
        <div className="typeReview">
            <p>{nameType}</p>
            <div className="amount" style={{
                backgroundColor: `${colorBox}`
            }}>
                <p style={{
                    color: `${colorText}`
                }}>{amount}</p>
            </div>
        </div>
    )
}