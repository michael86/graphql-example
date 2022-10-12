import React from "react";

import "../styles/Card.css";

const Rocket = (props) => {
  console.log(props);
  const {
    id,
    active,
    first_flight,
    name,
    success_rate_pct,
    wikipedia,
    description,
  } = props.rocket;

  return (
    <>
      <div className="card">
        <div className="card-header">{name}</div>
        <div className="card-body">
          <p>{description}</p>
          <p>
            {name} first flew {first_flight} and its succese rate is{" "}
            {success_rate_pct}% its currently{" "}
            {active ? "active" : "not in service"}
          </p>
        </div>
        <div className="card-footer">
          <p>
            To read more visit{" "}
            <a href={wikipedia} target="_blank">
              this wiki
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Rocket;
