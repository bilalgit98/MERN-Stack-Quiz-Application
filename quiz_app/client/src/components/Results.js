import React, { useEffect } from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";
import { useDispatch, useSelector } from "react-redux";
import { ResetResult } from "../redux/result_reducer";
import { ResetQuestions } from "../redux/question_reducer";
import attemptsNumber, { earnPointNumber, flagResults } from "../helper/helper";

function Results() {
  const dispatch = useDispatch();

  const {
    questions: { queue, answers },
    results: { result, userId },
  } = useSelector((state) => state);

  const totalPoints = queue.length * 10;
  const attempts = attemptsNumber(result);
  const earnPoints = earnPointNumber(result, answers, 10);
  const flag = flagResults(totalPoints, earnPoints);

  function onRestart() {
    dispatch(ResetQuestions());
    dispatch(ResetResult());
    console.log("onrestart");
  }

  useEffect(() => {
    console.log(earnPoints);
  });

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application </h1>
      <div className="result flex-center">
        <div className="flex">
          <span>Username </span>
          <span className="bold">ff</span>
        </div>

        <div className="flex">
          <span>Total Quiz Points : </span>
          <span className="bold">{totalPoints || 0}</span>
        </div>

        <div className="flex">
          <span>Total Questions : </span>
          <span className="bold">{queue.length}</span>
        </div>

        <div className="flex">
          <span>Total Attempts : </span>
          <span className="bold">{attempts || 0}</span>
        </div>

        <div className="flex">
          <span>Total Earnt Points : </span>
          <span className="bold">{earnPoints || 0}</span>
        </div>

        <div className="flex">
          <span>Quiz Result : </span>
          <span
            style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}
            className="bold"
          >
            {flag ? "Passed" : "Failed"}
          </span>
        </div>
      </div>

      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>

      <div className="container ">
        <ResultTable />
      </div>
    </div>
  );
}

export default Results;
