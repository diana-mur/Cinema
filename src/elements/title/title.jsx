import React from 'react'
import './title.css'

export default function Title({ title, visible, children, date }) {
    return (
        <div className="mainTitle">
            <div>
                <h1>{title}</h1>
                {date && <div className="dateCash">{date}</div>}
            </div>
            {visible && <div className="lineInTitle" />}
            {children}
        </div>
    )
}