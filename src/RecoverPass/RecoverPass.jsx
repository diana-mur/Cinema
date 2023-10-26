import { useNavigate } from 'react-router-dom';
import '../Entry/Entry.css'
import './RecoverPass.css'

export default function RecoverPass() {
    const navigate = useNavigate()

    return (
        <div className="mainEntry">
            <div className='entry'>
                <h1 className='titleForm'>Восстановить пароль</h1>
                <form action="" id='entryForm'>
                    <input type="text" placeholder="Почта или номер телефона"
                        className='userInput' />
                    <div className='verification'>
                        <button className='pushCode'>Отправить</button>
                        <input type="text" placeholder="Полученный код"
                            className='userVerifCode' />
                    </div>
                    <button type='submit' onClick={() => {
                        navigate(`/recoverpass/createpass`)
                    }} className='btnEntry'>Далее</button>
                </form>
            </div>
        </div>
    )
}
