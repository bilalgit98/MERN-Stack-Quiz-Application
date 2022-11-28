import React, { useState } from "react";

function Questions() {
  const [checked, setChecked] = useState(undefined);

  function onSelect() {
    console.log("button change");
  }

  return (
    <div className="questions">
      <h2 className="text-light">Demo TEXT </h2>
      <ul>
        <li>
          <input
            type="radio"
            value={false}
            name="options"
            id="q1-option"
            onChange={onSelect()}
          />
          <label className="text-primary" htmlFor="q1-option">
            Option
          </label>
          <div className="check"> </div>
        </li>
      </ul>
    </div>
  );
}

export default Questions;
