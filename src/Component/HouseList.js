import Card from "../UI/Card";
import HouseItem from "./HouseItem";
function HouseList(props) {
  return (
    <ul>
      {props.item.map((house) => (
        <HouseItem
          key={house.id}
          housename={house.housename}
          cost={house.cost}
          place={house.place}
          typo={house.typo}
          date={house.fromDate}
        />
      ))}
    </ul>
  );
}
export default HouseList;
