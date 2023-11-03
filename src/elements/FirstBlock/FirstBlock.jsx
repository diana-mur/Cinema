import { useState, useEffect } from "react";
import HeaderFull from "../../elements/Headers/HeaderFull";
import Title from "../../elements/title/title";
import BtnOutline from "../../elements/buttons/btnOutline";
import Card from "../../elements/card/card";
import Category from "../../elements/title/category/category";
import "./FirstBlock.css"

export default function FirstBlock() {
    const [array, setArray] = useState([]);
    const [arrCategory, setArrCategory] = useState([])
    const [indexCategory, setIndexCategory] = useState()
    
    useEffect(() => {
        fetch('http://192.168.144.66:8081/api/movies')
            .then(response => response.json())
            .then(json => setArray(json))
    }, []);

    useEffect(() => {
        fetch('http://192.168.144.66:8081/api/genres')
            .then(response => response.json())
            .then(json => setArrCategory(json))
    }, []);

    useEffect(() => {
        if (arrCategory.length > 0) {
            fetch(`http://192.168.144.66:8081/api/movies/${arrCategory[indexCategory]}`)
            .then(response => response.json())
            .then(json => setArray(json))
        }
    }, [indexCategory])

    return (
        <div className="firstBlock">
            <div className="container" id="1">
                <HeaderFull />
                <Title title={'Сейчас в кино'} visible={true}>
                    <Category selected={indexCategory} setArrCategory={(e) => {
                        setIndexCategory(e)
                    }} arrCategory={arrCategory} />
                </Title>
                <div className="filmList">
                    {array.map((e) => {
                        return (
                            <Card key={e.id} name={e.localName} img={e.urlIcon} categories={e.genres} rating={e.averageRating} />
                        )
                    })}
                </div>
                <BtnOutline />
            </div>
        </div>
    )
}