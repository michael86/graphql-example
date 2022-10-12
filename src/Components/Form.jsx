import React, { useState } from "react";
import "../styles/Form.css";

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    if (e.target.value === "") return; //Because number allows E, and apparantly E is an empty string?
    setValue(Number(e.target.value));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="resultCount"># of results</label>
        <input
          type="number"
          min="1"
          id="resultCount"
          name="resultCount"
          value={value}
          onChange={onChange}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
