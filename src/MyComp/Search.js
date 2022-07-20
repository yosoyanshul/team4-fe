// import React from 'react'
// import "./Search.css"
// import JSONDATA from "./JSONDATA.json";
// import { useState } from 'react';
// export default function Search() {
//   <div className="Search">
//   <SearchBar placeholder="Enter a Book Name..." data={BookData} />
// </div>
// }
import "./Search.css";
import { CustomerData } from "./Data.js";
import Card from "../MyComp/card/index";
import { useState } from "react";

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
