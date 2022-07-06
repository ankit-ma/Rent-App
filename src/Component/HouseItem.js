import Card from "../UI/Card";
import "./HouseItems.css";
import img from "../Resources/1.jpg";

function HouseItem(props) {
  // const date = props.fromDate.
  // const date = new Date(props.fromDate);
  return (
    <Card>
      <div className="items">
        <div className="imgdiv">
          <img src={img} alt="house image" />
        </div>
        <div className="textdiv">
          <h2>Name: {props.housename}</h2>
          <h2>Cost: Rs. {props.cost}</h2>
          <h2>Place: {props.place}</h2>
          <h2>Type: {props.typo}</h2>
          <h2>Availabilty from: {props.date.toISOString().split("T")[0]}</h2>
        </div>
      </div>
    </Card>
  );
}
export default HouseItem;
