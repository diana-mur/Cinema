import { useNavigate } from 'react-router-dom'
import './btn.css'

export default function BtnEntry() {
    const navigate = useNavigate()

    return (
        <button onClick={() => {
            navigate('/entry')
        }} className='btnEntry'>Войти</button>
    )
}