import React, { useState } from "react";
import Questions from "./Questions";

const Questioncard = () => {
  const [initialQuestion, setInitialQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  function answerHandler(value) {
    if (value === true) {
      var newScore = score + 1;
      setScore(newScore);
    }
    const nextQuestion = initialQuestion + 1;

    if (nextQuestion < Questions.length) {
      setInitialQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }
  return (
    <div className="container">
      {showScore ? (
        <div>Your score is {score}</div>
      ) : (
        <div>
          <div className="questions-div">
            <p>{Questions[initialQuestion].question}</p>
          </div>
          <div className="answerOptions-div">
            {Questions[initialQuestion].answer.map((answerOptions) => {
              return (
                <button
                  className="answer-btn"
                  key={answerOptions}
                  onClick={() => answerHandler(answerOptions.value)}
                >
                  {answerOptions.answerText}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Questioncard;
