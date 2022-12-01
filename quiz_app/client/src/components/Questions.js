import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

//custom hook
import { useFetchQuestion } from "../Hooks/FetchQuestion";
import { updateResultHook } from "../Hooks/setResults";

function Questions({ onChecked }) {
  const [checked, setChecked] = useState(undefined);

  const [{ Loading, apiData, serverError }] = useFetchQuestion();

  const trace = useSelector((state) => state.questions.trace);
  const result = useSelector((state) => state.results.result);
  const questions = useSelector((state) => state.questions.queue[trace]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateResultHook({ trace, checked }));
  }, [checked]);

  function onSelect(i) {
    onChecked(i);
    setChecked(i);
    dispatch(updateResultHook({ trace, checked }));
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
              onChange={() => onSelect(index)}
            />

            <label className="text-primary" htmlFor={`q${index}-option`}>
              {question}
            </label>
            <div
              className={`check ${result[trace] == index ? "checked" : ""}`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
