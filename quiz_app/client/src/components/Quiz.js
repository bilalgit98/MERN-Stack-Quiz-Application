import React from "react";

function onNext() {
  console.log("next");
}

function onPrev() {
  console.log("click");
}

function Quiz() {
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
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
