import "./point.css"

export default ({ coordinates, color, name }) => {
    return (
        <div className="point" style={{ top: (coordinates.positionY), left: coordinates.positionX ,  background: color}}>
            {name}
        </div>
    )
}