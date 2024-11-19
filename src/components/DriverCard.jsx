import "./DriverCard.css"
import Rating from "./Rating";
export default function DriverCard (props) {
    const {name,rating,img, car: {model,licensePlate}} = props;
    return (
        <div className="driver-card">
            <div className="driver-image">
                <img src={img} alt="" />
            </div>
            <div className="driver-contact">
                <h3>{name}</h3>
                <Rating style="driver">{rating}</Rating>
                <p>{model} - {licensePlate}</p>
            </div>
        </div>
    )
}