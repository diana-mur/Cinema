import React from 'react'
import { useState } from 'react'

const Test = () => {

    const [currentCount, setCurrentCount] = useState(0)

    return (
        <>
            <Button onClick={() => {
                setCurrentCount(prev => ++prev)
            }} />
            <Button onClick={() => {
                setCurrentCount(prev => --prev)
            }} />
            <Carousel currentCount={currentCount} />
        </>
    )
}

const Carousel = ({
    currentCount
}) => {

    return (
        <div style={{
            color: 'white'
        }}>Carousel {currentCount}</div>
    )
}

const Button = ({
    onClickLeft,
    onClickRight,
    currentCount,
    maxCount
}) => {
    return (
        <>
            <button onClick={onClickLeft}>Test</button>
            <button onClick={onClickRight}>Test</button>
        </>
    )
}

export default Test