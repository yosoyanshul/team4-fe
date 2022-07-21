

import { CustomerData} from '../../Data.js';
import Card from "../../myCompo/card/index";
import React,{ useState } from "react";
import "../../Search.css";

function Search() {
  const [tempData, setTempData] = useState(CustomerData);
  const inputStyle = {
    padding: 12,
    width: "100%",
    fontSize: "105%",
  };
  const onSearchChange = (value) => {
    const newData = CustomerData.filter(
      (cust) =>
        cust.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        cust.order.includes(value)
    );
    setTempData(newData);
  };
  return (
    <div className="Search">
      <h2>Search Your Uploaded Books Here</h2>
      
      <input
        type="search"
        placeholder="Type something to search..."
        style={inputStyle}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {tempData.map((customer, index) => (
        <Card userInfo={customer} key={index} />
      ))}
    </div>
  );
}
export default Search;
