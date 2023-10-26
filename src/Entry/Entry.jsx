import { Link, useNavigate } from 'react-router-dom';
import VK from '../assets/vk.svg'
import FB from '../assets/facebook.svg'
import Google from '../assets/google.svg'
import Twitter from '../assets/twitter.svg'
import './Entry.css'

export default function Entry() {
    const navigate = useNavigate()

    return (
        <div className="mainEntry">
            <div className='entry'>
                <h1 className='titleForm'>Войти</h1>
                <form action="" id='entryForm'>
                    <input type="text" placeholder="Логин, почта или телефон"
                        className='userInput' />
                    <input type="text" placeholder="Ваш пароль"
                        className='userInput' />
                    <button type='submit' className='btnEntry'>Войти</button>
                    <button type='submit' onClick={() => {
                        navigate(`/registration`)
                    }} className='btnReg'>Зарегистрироваться</button>
                </form>
                <Link to={'/recoverpass'} className='linkRestore'>Восстановить пароль</Link>
                <div className="socNetwork">
                    <a href='' className='netIcon'><img src={VK} alt="" /></a>
                    <a href='' className='netIcon'><img src={FB} alt="" /></a>
                    <a href='' className='netIcon'><img src={Google} alt="" /></a>
                    <a href='' className='netIcon'><img src={Twitter} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

// через media query сделать 3 хедера