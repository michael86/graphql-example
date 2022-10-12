import React, { useState } from "react";
import { getApiData } from "../Utils/api";
import Form from "./Form";
import Rocket from "./Rocket";

const Landing = () => {
  const [rockets, setRockets] = useState();
  const [error, setError] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    const data = await getApiData(formData.resultCount);

    if (!data) {
      setError(true);
      return;
    }

    setRockets(data);
    setError(false);
  };

  return (
    <>
      <h1>Space X info</h1>
      <Form onSubmit={onSubmit} />

      {rockets && (
        <div className="container flex justify-content-around">
          {rockets.map((rocket) => (
            <Rocket rocket={rocket} />
          ))}
        </div>
      )}

      {error && <p>Something broken</p>}
    </>
  );
};

export default Landing;
