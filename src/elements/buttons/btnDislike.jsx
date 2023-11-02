import { useState } from "react"
import imgdislike from '../../assets/dislike.svg'
import './btn.css'

export default function Dislike() {
  const [dislike, setDislike] = useState(0)

    return (
        <div className='btnEstimate'>
        <button className="btnLike" onClick={() => {
          setDislike(dislike + 1)
        }}>
          <img src={imgdislike} alt="" />
        </button>
        <p className="numLike">{dislike}</p>
      </div>

    )
}