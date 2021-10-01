import "./point.css"

export default ({ coordinates }) => {
    return (
        <div className="point" style={{ top: (coordinates.positionY), left: coordinates.positionX }}>
            x
        </div>
    )
}