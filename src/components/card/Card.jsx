import React from "react";
import "./card.css";

export const Card = props => (
    <div className="card shadow-sm rounded text-center">
        <div className="card-body card-bg-color">
            <h5 className="card-text">{props.value.Country}</h5>
            <p className="card-text">Cases: {props.value.TotalConfirmed}</p>
            <p className="card-text">Deaths: {props.value.TotalDeaths}</p>
            <p className="card-text">Recoveries: {props.value.TotalRecovered}</p>
        </div>
    </div>
)