import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../styles/main.css";
import { setUserId } from "../redux/result_reducer";

function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }

  return (
    <div className="container">
      <h1 className="title text-light"> Quiz Application</h1>
      <ol>
        <li> You will be asked 10 question one after another!</li>
        <li>You will be awarded 10 points for each correct answer</li>

        <li>
          For each question you will be presented with three options and you can
          only select one
        </li>

        <li>
          You will be able to review and change your answers before the end of
          the quiz.
        </li>
        <li>The Results will be declared at the end of the quiz</li>
      </ol>
      <form id="form">
        <input
          ref={inputRef}
          className="userid"
          type="text"
          placeholder="Username*"
        />
      </form>

      <div className="start">
        <Link className="btn" to={"quiz"} onClick={startQuiz}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}

export default Main;
