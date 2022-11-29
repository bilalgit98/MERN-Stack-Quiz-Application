import React, { useEffect, useState } from "react";
import data from "../database/data";
//custom hook
import { useFetchQuestion } from "../Hooks/FetchQuestion";

function Questions() {
  const [checked, setChecked] = useState(undefined);
  const [{ Loading, apiData, serverError }] = useFetchQuestion();
  const question = data[0];

  useEffect(() => {
    console.log(Loading);
    console.log(apiData);
    console.log(serverError);
  });

  function onSelect() {
    console.log("button change");
  }

  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>

      <ul key={question.id}>
        {question.options.map((question, index) => (
          <li key={index}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${index}-option`}
              onChange={onSelect()}
            />

            <label className="text-primary" htmlFor={`q${index}-option`}>
              {question}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
