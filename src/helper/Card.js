import React from "react";

export default function (props) {
  return (
    <div className="card--container">
      <div>
        <img className="card--img" src={`./${props.image}`} />
      </div>
      <div>
        <p className="card--location">
          <i className="fa-solid fa-location-dot "></i>{" "}
          {props.location}{" "}
          <a href={props.googleMapsUrl} target="_blank" className="card--url">
            View on Google Maps
          </a>
        </p>
        <h1 className="card--title">{props.title}</h1>
        <h3 className="card--date">
          {props.startDate}-{props.endDate}
        </h3>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}
