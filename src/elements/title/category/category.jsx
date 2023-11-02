import { Link } from 'react-router-dom'
import './category.css'

export default function Category({arrCategory}) {
    return (
        <div className='category'>
            {
                arrCategory.map((item, index) => {
                    return (
                        <Link to={`/${item}`} className='aCategory' key={index}>{item}</Link>
                    )
                })
            }
        </div>
    )
}