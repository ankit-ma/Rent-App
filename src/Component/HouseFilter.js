import "./HouseFilter.css";

function HouseFilter(props) {
  const dropdownChangeHandler = (event) => {
    props.onChangeCost(event.target.value);
  };
  const dropdownPlaceHandler = (event) => {
    props.onChangePlace(event.target.value);
  };
  const dropdownTypeHandler = (event) => {
    props.onChangeType(event.target.value);
  };
  const dropdownDateHandler = (event) => {
    props.onChangeDate(event.target.value);
  };
  return (
    <div className="house-filter">
      <div className="house-filter-controls">
        <div className="place-selection">
          <label>Cost</label>
          <select value={props.selectedCost} onChange={dropdownChangeHandler}>
            <option value="200">0-200</option>
            <option value="400">0-400</option>
            <option value="600">0-600</option>
            <option value="800">0-800</option>
          </select>
        </div>
        <div className="place-selection">
          <label>Place</label>
          <select value={props.selectedPlace} onChange={dropdownPlaceHandler}>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="kolkata">kolkata</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>
        <div className="place-selection">
          <label>Type</label>
          <select value={props.selectedType} onChange={dropdownTypeHandler}>
            <option value="Houses">Houses</option>
            <option value="Villa">Villa</option>
          </select>
        </div>
        <div className="place-selection">
          <label>Availabilty</label>
          {/* <select value={props.selectedType} onChange={dropdownTypeHandler}>
            <option value="Houses">Houses</option>
            <option value="Villa">Villa</option>
          </select> */}
          <input
            type="date"
            min="2022-05-01"
            max="2022-12-30"
            value={props.selectedDate}
            onChange={dropdownDateHandler}
          />
        </div>
      </div>
    </div>
  );
}
export default HouseFilter;
