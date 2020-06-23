import React from "react";
import { Card } from "./Card"
import "./card.css";

export const CardList = props => (
    <div className="card-list">
        {props.cases.map(value => (
            <Card key={value.Country} value={value} />
        ))}
    </div>
)
