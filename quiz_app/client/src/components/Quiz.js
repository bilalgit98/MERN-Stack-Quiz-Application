import React, { useEffect } from "react";
import Questions from "./Questions";

import { useSelector, useDispatch } from "react-redux";
import { MoveAction, MovePrevAction } from "../Hooks/FetchQuestion";
import { pushAnswers } from "../Hooks/setResults";

function Quiz() {
  const state = useSelector((state) => state);
  const { trace, queue } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(trace);
  });

  function onNext() {
    if (trace < queue.length) {
      dispatch(MoveAction());
      dispatch(pushAnswers(1));
    }
  }

  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevAction());
    }
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <Questions />
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
