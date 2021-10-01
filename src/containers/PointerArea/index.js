import "./PointerArea.css"
import { useState } from 'react'
import Point from "../../components/Point"
 const PointerArea = () => {
    const [clickPosition, setClickPoisiton] = useState({ positionX: 0, positionY: 0})

    const watchClick = (e) => {
        console.log({
            positionX: e.clientX,
            positionY: e.clientY
        })
        setClickPoisiton({
            positionX: e.clientX - 15,
            positionY: e.clientY - 15
        })
    }
    return (
        <div className="container" onClick={watchClick}>
            <Point coordinates={clickPosition} />
        </div>
    )
}

export default PointerArea
