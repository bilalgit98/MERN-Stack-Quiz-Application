import React, { useEffect, useState } from "react";
import Questions from "./Questions";

import { useSelector, useDispatch } from "react-redux";
import { MoveAction, MovePrevAction } from "../Hooks/FetchQuestion";
import { pushAnswers } from "../Hooks/setResults";
import { Navigate } from "react-router-dom";

function Quiz() {
  const [check, setCheck] = useState(undefined);

  const state = useSelector((state) => state);
  const result = useSelector((state) => state.results.result);

  const { trace, queue } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state);
  });

  function onNext() {
    if (trace < queue.length) {
      dispatch(MoveAction());

      if (result.length <= trace) {
        dispatch(pushAnswers(check));
      }
    }
  }

  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevAction());
    }
  }

  function onChecked(check) {
    setCheck(check);
  }

  //finishing the quiz at the last question
  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace="true"></Navigate>;
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <Questions onChecked={onChecked} />
      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Previous
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
