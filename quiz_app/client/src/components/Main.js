import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

function Main() {
  const inputRef = useRef(null);
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
        <Link className="btn" to={"quiz"}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}

export default Main;
