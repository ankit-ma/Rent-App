import { useState } from "react";
import Card from "../UI/Card";
import HouseList from "./HouseList";
import HouseFilter from "./HouseFilter";
import img from "../Resources/1.jpg";
import "./Homepage.css";
function Homepage(props) {
  const houses = [
    {
      id: 1,
      housename: "Ankit mansion",
      cost: 100,
      place: "Delhi",
      typo: "Villa",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 2,
      housename: "Villa",
      cost: 220,
      place: "Delhi",
      typo: "Houses",
      fromDate: new Date(2022, 7, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 3,
      housename: "Home sweet home",
      cost: 330,
      place: "Delhi",
      typo: "Houses",
      fromDate: new Date(2022, 8, 1),
      toDate: new Date(2022, 9, 30),
    },
    {
      id: 4,
      housename: "HourGlass",
      cost: 440,
      place: "Delhi",
      typo: "Houses",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 5,
      housename: "Banglow",
      cost: 550,
      place: "Delhi",
      typo: "Villa",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 10, 30),
    },
    {
      id: 6,
      housename: "Banglow 2",
      cost: 610,
      place: "Delhi",
      typo: "Villa",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 7,
      housename: "Banglow rich",
      cost: 700,
      place: "Delhi",
      typo: "Villa",
      fromDate: new Date(2022, 6, 12),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 8,
      housename: "Banglow mansion",
      cost: 880,
      place: "Delhi",
      typo: "Villa",
      fromDate: new Date(2022, 6, 15),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 9,
      housename: "Affordable",
      cost: 650,
      place: "Delhi",
      typo: "Houses",
      fromDate: new Date(2022, 6, 23),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 10,
      housename: "Reco costa",
      cost: 189,
      place: "Bangalore",
      typo: "Villa",
      fromDate: new Date(2022, 6, 30),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 11,
      housename: "Pablo bera",
      cost: 216,
      place: "Bangalore",
      typo: "Houses",
      fromDate: new Date(2022, 7, 3),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 12,
      housename: "Infosyte",
      cost: 345,
      place: "Bangalore",
      typo: "Villa",
      fromDate: new Date(2022, 6, 10),
      toDate: new Date(2022, 8, 27),
    },
    {
      id: 13,
      housename: "Union leto",
      cost: 412,
      place: "Bangalore",
      typo: "Houses",
      fromDate: new Date(2022, 6, 23),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 14,
      housename: "Mansionnate",
      cost: 599,
      place: "Bangalore",
      typo: "Villa",
      fromDate: new Date(2022, 8, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 15,
      housename: "Amansion",
      cost: 689,
      place: "Bangalore",
      typo: "Villa",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 16,
      housename: "Ankit houses",
      cost: 768,
      place: "Bangalore",
      typo: "Houses",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 17,
      housename: "Ankit villa",
      cost: 897,
      place: "Bangalore",
      typo: "Villa",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 18,
      housename: "Street style",
      cost: 674,
      place: "Bangalore",
      typo: "Villa",
      fromDate: new Date(2022, 5, 10),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 19,
      housename: "Whereis it",
      cost: 110,
      place: "kolkata",
      typo: "Villa",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 20,
      housename: "who is it ka",
      cost: 240,
      place: "kolkata",
      typo: "Houses",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 21,
      housename: "Ankit mansion",
      cost: 367,
      place: "kolkata",
      typo: "Houses",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 22,
      housename: "Aansion",
      cost: 489,
      place: "kolkata",
      typo: "Villa",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 23,
      housename: "Ankit mansion",
      cost: 567,
      place: "kolkata",
      typo: "Houses",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 24,
      housename: "Burdwanhill",
      cost: 689,
      place: "kolkata",
      typo: "Houses",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 25,
      housename: "Rasogulla puria",
      cost: 799,
      place: "kolkata",
      typo: "Villa",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 26,
      housename: "Dada rasolua",
      cost: 879,
      place: "kolkata",
      typo: "Villa",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 27,
      housename: "Pillu pabia",
      cost: 677,
      place: "kolkata",
      typo: "Villa",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 28,
      housename: "Tommy loda",
      cost: 109,
      place: "Mumbai",
      typo: "Villa",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 29,
      housename: "Mirzapuria house",
      cost: 218,
      place: "Mumbai",
      typo: "Houses",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 30,
      housename: "Jila gaziabad",
      cost: 359,
      place: "Mumbai",
      typo: "Villa",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 31,
      housename: "Jannat",
      cost: 498,
      place: "Mumbai",
      typo: "Villa",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 32,
      housename: "Mannat",
      cost: 578,
      place: "Mumbai",
      typo: "Villa",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 33,
      housename: "SRK",
      cost: 695,
      place: "Mumbai",
      typo: "Villa",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 34,
      housename: "Salman Khan",
      cost: 790,
      place: "Mumbai",
      typo: "Houses",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 35,
      housename: "Aliya bhatt",
      cost: 867,
      place: "Mumbai",
      typo: "Houses",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
    {
      id: 36,
      housename: "Sanjay leela",
      cost: 674,
      place: "Mumbai",
      typo: "Houses",
      fromDate: new Date(2022, 6, 1),
      toDate: new Date(2022, 8, 30),
    },
  ];
  // House array state handling
  const [setHouses, changeHouses] = useState(houses);
  // filter state handling
  const [setCost, changeCost] = useState(200);
  const [setPlace, changePlace] = useState("Bangalore");
  const [settype, changeType] = useState("Houses");
  const [setDate, changeDate] = useState("2022-06-11");
  const [firstLoad, changeLoad] = useState(true);

  const onChagePlaceHandler = (setPlace) => {
    changePlace(setPlace);
    changeLoad(false);
  };
  const onChangeCosthandler = (setCost) => {
    changeCost(setCost);
    changeLoad(false);
  };
  const onChnageTypeHandler = (settype) => {
    changeType(settype);
    changeLoad(false);
  };

  const onChangeDateHandler = (setDate) => {
    console.log(setDate);
    changeDate(setDate);
    changeLoad(false);
  };

  const filterHouse = houses.filter((house) => {
    // console.log(setDate.split("-")[1], house.fromDate.getMonth().toString());
    const date = new Date(
      setDate.split("-")[0],
      setDate.split("-")[1],
      setDate.split("-")[2]
    );
    return (
      house.cost.toString() <= setCost &&
      house.place.toLowerCase() === setPlace.toLowerCase() &&
      house.typo.toLowerCase() === settype.toLowerCase() &&
      date.getFullYear() === house.fromDate.getFullYear() &&
      date.getMonth() <= house.fromDate.getMonth()
    );
  });
  return (
    <div className="HomePage-control">
      <h2>Search Your house</h2>
      <Card>
        <HouseFilter
          selectedCost={setCost}
          selectedPlace={setPlace}
          selectedType={settype}
          selectedDate={setDate}
          onChangePlace={onChagePlaceHandler}
          onChangeCost={onChangeCosthandler}
          onChangeType={onChnageTypeHandler}
          onChangeDate={onChangeDateHandler}
        ></HouseFilter>
        {firstLoad ? (
          <HouseList item={houses} />
        ) : (
          <HouseList item={filterHouse} />
        )}
      </Card>
    </div>
  );
}
export default Homepage;
