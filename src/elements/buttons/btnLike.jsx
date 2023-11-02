import { useState } from "react"
import imglike from '../../assets/like.svg'
import './btn.css'

export default function Like() {
  const [like, setLike] = useState(0)

    return (
        <div className='btnEstimate'>
          <button className="btnLike" onClick={
            () => {
              setLike(like + 1)
            }
          }>
            <img src={imglike} alt="" />
          </button>
          <p className="numLike">{like}</p>
        </div>
    )
}
