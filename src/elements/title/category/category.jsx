import './category.css'

export default function Category({ arrCategory, setArrCategory, selected }) {
    return (
        <div className='category'>
            {
                arrCategory.map((item, index) => {
                        return (
                            <a style={{
                                color: index === selected ? 'white' : ''
                            }} onClick={() => {
                                setArrCategory(index)
                            }} className='aCategory' key={index}>{item}</a>
                        )
                })
            }
        </div>
    )
}