import { useState } from 'react';
import './CashDues.css'
import CardsForDues from '../New/NewCard/NewCard';
import Category from '../title/category/category';
import Title from '../title/title';

export default function CashDues() {
    const [order, setOrder] = useState(1)
    const arr = ['Россия', 'Весь мир', 'США и Канада'];
    const arrForCards = [
        {
            name: 'Бладшот',
            cash: '13',
            cashForPeriod: '15',
            period: '4 недели',
            img: '../../src/assets/duesImg.png',
        },
        {
            name: 'Бладшот',
            cash: '13',
            cashForPeriod: '15',
            period: '4 недели',
            img: '../../src/assets/duesImg.png',
        },
        {
            name: 'Бладшот',
            cash: '13',
            cashForPeriod: '15',
            period: '4 недели',
            img: '../../src/assets/duesImg.png',
        },
        {
            name: 'Бладшот',
            cash: '13',
            cashForPeriod: '15',
            period: '4 недели',
            img: '../../src/assets/duesImg.png',
        },
    ];

    return (
        <div className="container" id='7'>
            <Title title={'Кассовые сборы'} date={'13 марта — 15 марта'} visible={true}>
                <Category arrCategory={arr} />
            </Title>
            <div className="duesList">
                {arrForCards.map((item, index) => {
                    return <CardsForDues key={index} numInOrder={index + 1} img={item.img} name={item.name} cash={item.cash} cashForPeriod={item.cashForPeriod} period={item.period} />
                })
                }
            </div>
        </div>
    )
}