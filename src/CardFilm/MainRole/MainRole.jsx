import InscriptionArrow from "../../elements/buttons/inscriptArrow";
import Title from "../../elements/title/title";
import CardActor from "./CardActor/CardActor";
import "./MainRole.css"

export default function MainRole() {
    const cards = ['','','','','','','','','','']
    return (
        <div className="container">
            <Title title={'В главных ролях:'}>
                <InscriptionArrow title={'Все актёры'} />
            </Title>
            <div className="listActor">
                {cards.map(() => {
                    return <CardActor />
                })}
            </div>
        </div>
    )
}