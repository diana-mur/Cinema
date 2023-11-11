import Title from "../../elements/title/title";
import Quote from "./quote/quote";

export default function Quotes() {
    return (
        <div className="container" id="quotes">
            <Title title={'Цитаты из фильма'} />
            <Quote />
        </div>
    )
}