import InscriptionArrow from "../../elements/buttons/inscriptArrow";
import Title from "../../elements/title/title";
import "./Awards.css"
import CardAward from "./CardAward/CardAward";

export default function Awards() {
    return (
        <div className="container">
            <Title title={'Награды'}>
                <InscriptionArrow title={'Все награды'}/>
            </Title>
            <div className="awards">
                <CardAward />
                <CardAward />
                <CardAward />
                <CardAward />
            </div>
        </div>
    )
}