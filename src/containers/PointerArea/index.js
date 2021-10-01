import "./PointerArea.css"
import { useState, useEffect } from 'react'
import Point from "../../components/Point"

const PointerArea = () => {
    const [clickPosition, setClickPoisiton] = useState({ positionX: 0, positionY: 0})
    const [data, setData] = useState([]);

    useEffect (()=>{
        const position = localStorage.getItem('position')
        let arreglo = position.split(',')

        setClickPoisiton({
            positionX: parseInt(arreglo[0]),
            positionY: parseInt(arreglo[1])
        })
        console.log(arreglo);
        console.log(typeof(arreglo))

        fetch("https://611b12ac22020a00175a4323.mockapi.io/api/v1/points")
        .then( response => response.json()
        ).then(data => {
            console.log(data);
            setData(data)
        })

    },[]);

    const watchClick = (e) => {
        console.log({
            positionX: e.clientX,
            positionY: e.clientY
        })
        setClickPoisiton({
            positionX: e.clientX - 15,
            positionY: e.clientY - 15
        })
        localStorage.setItem("position",[e.clientX - 15, e.clientY - 15])
        
    }
    return (
        <div className="container" onClick={watchClick}>
            <Point coordinates={clickPosition} color="red" name="X"/>

            
            {  data.map(item => {
                return <Point  key={item.id} coordinates={{
                    positionX: (item.x - 15),
                    positionY: (item.y - 15)
                    }}
                    color = {item.color}
                    name = {item.id}
                    />
            })}
        </div>
    )
}

export default PointerArea
