import React, { useEffect, useState } from "react";
import "./Detail.css";
import image from "../../images/icon-play.svg";

export default function Detail({preference}) {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("../../data.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <div className="card-dashboard">
      {details.map((item) => (
        <div className="card-wrapper">
          <div className="image">
            <img src={image} alt="detail-img" />
          </div>
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
