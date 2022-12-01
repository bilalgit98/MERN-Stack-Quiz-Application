import React, { useEffect, useState } from "react";
import Questions from "./Questions";

import { useSelector, useDispatch } from "react-redux";
import { MoveAction, MovePrevAction } from "../Hooks/FetchQuestion";
import { pushAnswers } from "../Hooks/setResults";

function Quiz() {
  const [check, setCheck] = useState(undefined);

  const state = useSelector((state) => state);
  const { trace, queue } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state);
  });

  function onNext() {
    if (trace < queue.length) {
      dispatch(MoveAction());
      dispatch(pushAnswers(check));
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
