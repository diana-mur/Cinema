import search from '../../assets/search.svg'
import './btn.css'

export default function BtnSearch() {
    return (
        <button className='btnSearch'>
            <img src={search} alt="" />
        </button>
    )
}