import React from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";
function Results() {
  function onRestart() {
    console.log("onrestart");
  }
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
          <span className="bold">50</span>
        </div>

        <div className="flex">
          <span>Total Questions : </span>
          <span className="bold">50</span>
        </div>

        <div className="flex">
          <span>Total Earnt Points : </span>
          <span className="bold">50</span>
        </div>

        <div className="flex">
          <span>Quiz Result : </span>
          <span className="bold">fail</span>
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
