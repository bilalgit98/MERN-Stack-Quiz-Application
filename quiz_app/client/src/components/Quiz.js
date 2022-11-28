import React from "react";
import Questions from "./Questions";

function Quiz() {
  function onNext() {
    console.log("next");
  }

  function onPrev() {
    console.log("click");
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
