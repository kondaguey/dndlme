/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function Card(props) {
  return (
    <div class="card">
      <a href={props.url} target="_blank">
        <div class="card__picture">
          <img src={props.image} alt="logo" />
        </div>
        <div className="card__subtitle">
          <ul>
            <li>{props.language}</li>
            <li>{props.skill}</li>
          </ul>
        </div>
        <h4 class="card__heading">
          <span class="card__heading-span card__heading-span--all">
            {props.project}
          </span>
        </h4>
      </a>
    </div>
  );
}

export default Card;
