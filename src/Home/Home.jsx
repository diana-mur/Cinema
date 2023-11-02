import React, { useEffect, useState } from 'react'
import './Home.css'
import CashDues from '../elements/CashDues/CashDues';
import Newsletter from '../elements/Newsletter/Newsletter';
import Footer from '../elements/Footer/Footer';
import FirstBlock from '../elements/FirstBlock/FirstBlock';
import SecondBlock from '../elements/SecondBlock/SecondBlock';
import ThirdBlock from '../elements/ThirdBlock/ThirdBlock';
import FourthBlock from '../elements/FourthBlock/FourthBlock';
import FifthBlock from '../elements/FifthBlock/FifthBlock';
import SixthBlock from '../elements/SixthBlock/SixthBlock';

export default function Home() {
    const [array, setArray] = useState('');
    
    const arrPopFilms = [
        {
            name: 'Джокер',
            img: '../src/assets/cardImg.png',
            categories: 'Триллер, драма, криминал',
            rating: '8.50',
        },
        {
            name: 'История игрушек 4',
            img: '../src/assets/cardImg.png',
            categories: 'Мультфильм, фэнтези, комедия, приключения ...',
            rating: '7.80',
        },
        {
            name: 'Однажды в… Голливуде',
            img: '../src/assets/cardImg.png',
            categories: 'Драма, комедия',
            rating: '7.70',
        },
        {
            name: 'Солнцестояние',
            img: '../src/assets/cardImg.png',
            categories: 'Ужасы, триллер, драма',
            rating: '7.10',
        },
        {
            name: 'Джокер',
            img: '../src/assets/cardImg.png',
            categories: 'Триллер, драма, криминал',
            rating: '8.50',
        },
        {
            name: 'История игрушек 4',
            img: '../src/assets/cardImg.png',
            categories: 'Мультфильм, фэнтези, комедия, приключения ...',
            rating: '7.80',
        },
        {
            name: 'Однажды в… Голливуде',
            img: '../src/assets/cardImg.png',
            categories: 'Драма, комедия',
            rating: '7.70',
        },
        {
            name: 'Солнцестояние',
            img: '../src/assets/cardImg.png',
            categories: 'Ужасы, триллер, драма',
            rating: '7.10',
        },
    ];

    useEffect(() => {
        fetch('http://192.168.144.66:8081/api/movies')
            .then(response => response.json())
            .then(json => setArray(json))
    }, [])


    return (
        <>
            <FirstBlock />
            <SecondBlock />
            <ThirdBlock arr={arrPopFilms} />
            <FourthBlock />
            <FifthBlock />
            <div className="darkBG">
                <SixthBlock arr={arrPopFilms} />
                <CashDues />
                <Newsletter />
                <Footer />
            </div>
        </>
    )
}