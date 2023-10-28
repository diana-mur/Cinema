import React from 'react'
import HeaderFull from "../elements/Headers/HeaderFull";
import BtnOutline from "../elements/buttons/btnOutline";
import Card from "../elements/card/card";
import Category from "../elements/category/category";
import Title from "../elements/title/title";
import './Home.css'
import InscriptionArrow from '../elements/buttons/inscriptArrow';

export default function Home() {
    return (
        <>
            <div className="container">
                <HeaderFull />
                <Title title={'Сейчас в кино'} visible={true}>
                    <Category />
                </Title>
                <div className="filmList">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <BtnOutline />
            </div>
            <div className="container">
                <Title title={'Новые трейлеры'} visible={false}>
                    <InscriptionArrow title={'Все трейлеры'} />
                </Title>
            </div>
        </>
    )
}