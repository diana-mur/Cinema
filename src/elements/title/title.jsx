import React from 'react'
import './title.css'

export default function Title({ title, visible, children, date, justifyContent }) {
    return (
        <div className="mainTitle"  style={{
            justifyContent: `${justifyContent}`
        }}>
            <div>
                <h1>{title}</h1>
                {date && <div className="dateCash">{date}</div>}
            </div>
            {visible && <div className="lineInTitle" />}
            {children}
        </div>
    )
}