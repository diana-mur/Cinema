import { useEffect, useState } from "react";
import "./Rating.css"

export default function RatingRadial({ rating }) {
    const circumference = 2 * Math.PI * 22;
    const [offset, setOffset] = useState(138.2);

    useEffect(() => {
        setTimeout(() => {
            setOffset(circumference - rating / 5 * circumference)
        }, (300));
    }, [rating])

    return (
        <div className="ringRating">
            <p>{rating}</p>
            <svg width={52} height={52}>
                <circle style={{
                    strokeDasharray: `${circumference} ${circumference}`,
                    strokeDashoffset: `${offset}`
                }} className="ringCircle" stroke={
                    (rating > 3.7) ? "#4BCB36" : (rating > 2) ? "#F2F60F" : "#FF001D"
                } strokeWidth={8} cx={26} cy={26} r={22} fill={(rating > 3.7) ? "#254D23" : (rating > 2) ? "#949813" : "#810819"
                } />
            </svg>
            <h4>Kinoarea</h4>
        </div>
    )
}