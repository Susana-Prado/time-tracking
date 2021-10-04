import React, { useEffect, useState } from "react";
import "./Detail.css";

export default function Detail({preference}) {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("../../data.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <div className="card-dashboard">
      {details.map((item, index) => (
        <div className={item.title} key={index}>
          <div className="card-content">
            <h4>{item.title}</h4>
            <h1>{item.timeframes[preference].current} hrs</h1>
            <h5>Last week - {item.timeframes[preference].previous} hrs</h5> 
          </div>
        </div>
      ))}
    </div>
  );
}
