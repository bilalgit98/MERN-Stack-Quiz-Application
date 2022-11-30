import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
//custom hook
import { useFetchQuestion } from "../Hooks/FetchQuestion";

function Questions() {
  const [checked, setChecked] = useState(undefined);

  const [{ Loading, apiData, serverError }] = useFetchQuestion();

  const trace = useSelector((state) => state.questions.trace);

  const questions = useSelector((state) => state.questions.queue[trace]);

  useEffect(() => {
    console.log(questions);
  });

  function onSelect() {
    // console.log("button change");
  }
  if (Loading) return <h3 className="text-light">loading</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError || "Error Occurred"}</h3>;

  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>

      <ul key={questions?.id}>
        {questions?.options.map((question, index) => (
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
