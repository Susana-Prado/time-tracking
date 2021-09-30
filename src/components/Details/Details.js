import React, { useEffect, useState } from "react";
import "./Details.css";

export default function Details() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("../../data.json")
      .then((res) =>  res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <div className="full">
      <div className="image-box"></div>
      <div className="details-box">
        {details.map((item) => (
          <div>
            <p>{item.title}</p>
            <h1>{item.timeframes.weekly.current} hrs</h1>
            <h2>{item.timeframes.weekly.previous} hrs</h2>
            {console.log(item)}
          </div>
        ))}
      </div>
    </div>
  );
}
