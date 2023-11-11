import BlueButton from "../../elements/buttons/blueBtn";
import Title from "../../elements/title/title";
import TypeReview from "./typeReview/typeReview";
import "./Reviews.css"
import Comment from "./comment/comment";
import UserComm from "./userComm/UserComm";

export default function Reviews() {
    const arrTypeReview = [
        {
            nameType: 'Всего',
            amount: '36',
            colorBox: 'rgba(54, 87, 203, 0.30)',
            colorText: '#3657CB'
        },
        {
            nameType: 'Положительных',
            amount: '28',
            colorBox: 'rgba(87, 208, 67, 0.38)',
            colorText: '#57D043'
        },
        {
            nameType: 'Отрицательных',
            amount: '3',
            colorBox: '#642C36',
            colorText: '#E04141'
        },
        {
            nameType: 'Нейтральных рецензий',
            amount: '5',
            colorBox: 'rgba(255, 240, 101, 0.30)',
            colorText: '#FFF065'
        },
        {
            nameType: 'Процент',
            amount: '87%',
            colorBox: '#326339',
            colorText: '#57D043'
        },
    ]

    return (
        <div className="container" id="reviews">
            <Title title={'Рецензии к фильму'}>
                <BlueButton text={'Добавить рецензию'} />
            </Title>
            <div className="menuReviews">
                {
                    arrTypeReview.map((e) => (
                        <TypeReview nameType={e.nameType}
                            amount={e.amount}
                            colorBox={e.colorBox}
                            colorText={e.colorText} />
                    ))
                }
            </div>
            <Comment />
            {/* <UserComm /> */}
        </div>
    )
}