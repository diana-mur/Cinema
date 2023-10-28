import React from 'react'
import './title.css'

export default function Title({title, visible, children}) {
    return (
        <div className="mainTitle">
            <h1>{title}</h1>
            {visible && <div className="lineInTitle" />}
            {children}
        </div>
    )
}