import { Link } from 'react-router-dom';
import VK from '../assets/vk.svg'
import FB from '../assets/facebook.svg'
import Google from '../assets/google.svg'
import Twitter from '../assets/twitter.svg'
import './Entry.css'

export default function Entry() {
    return (
        <div className='entry'>
            <h1 className='titleForm'>Войти</h1>
            <form action="" id='entryForm'>
                <input type="text" placeholder="Логин, почта или телефон"
                className='userInput' />
                <input type="text" placeholder="Ваш пароль" 
                className='userInput' />
                <button className='btnEntry'>Войти</button>
                <button className='btnReg'>Зарегистрироваться</button>
            </form>
            <a className='linkRestore'>Восстановить пароль</a>
            <div className="socNetwork">
                <a href='' className='netIcon'><img src={VK} alt="" /></a> {/*тк ссылка на сторонний ресурс*/}
                <a href='' className='netIcon'><img src={FB} alt="" /></a>
                <a href='' className='netIcon'><img src={Google} alt="" /></a>
                <a href='' className='netIcon'><img src={Twitter} alt="" /></a>
                {/*<Link to={}><img src="" alt="" /></Link>
                <Link to={}><img src="" alt="" /></Link>
                <Link to={}><img src="" alt="" /></Link>
    <Link to={}><img src="" alt="" /></Link>*/}
            </div>
        </div>
    )
}

// media query