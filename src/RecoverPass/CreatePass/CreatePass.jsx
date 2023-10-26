import { useNavigate } from 'react-router-dom';
import '../../Entry/Entry.css'
import './CreatePass.css'

export default function CreatePass() {
    const navigate = useNavigate()

    return (
        <div className="mainEntry">
            <div className='entry'>
                <h1 className='titleForm'>Восстановить пароль</h1>
                <form action="" id='entryForm'>
                    <input type="text" placeholder="Придумайте новый пароль"
                        className='userInput' />
                    <input type="text" placeholder="Подтвердите новый пароль"
                        className='userInput' />
                    <button type='submit' onClick={() => {
                        navigate(`/`)
                    }} className='btnEntry'>Готово!</button>
                </form>
            </div>
        </div>
    )
}