import './category.css'

export default function Category({ arrCategory, setArrCategory, selected, style }) {
    return (
        <div className='category' style={{width: `${style}`}}>
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