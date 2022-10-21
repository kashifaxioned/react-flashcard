import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="front-side">
        <span className="card-num">{props.num}</span>
        <h2 className="card-title">{props.title}</h2>
      </div>
      <div className="back-side">
        <p className="card-info">{props.info}</p>
      </div>
    </div>
  );
}
