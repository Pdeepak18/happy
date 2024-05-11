import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Whale", "Giraffe"],
    answer: "Whale",
  },
  // Add more questions here
];

function Audio() {
  const [userAnswers, setUserAnswers] = useState(
    new Array(questions.length).fill("")
  );
  const [showResult, setShowResult] = useState(false);

  const handleOptionChange = (e, index) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[index] = e.target.value;
    setUserAnswers(newUserAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  const handleReset = () => {
    setUserAnswers(new Array(questions.length).fill(""));
    setShowResult(false);
  };

  const correctAnswers = questions.map((q) => q.answer);
  const isAllCorrect = userAnswers.every(
    (answer, index) => answer === correctAnswers[index]
  );

  return (
    <div className="AudioApp">
      <div className="card">
        {!showResult ? (
          <form onSubmit={handleSubmit}>
            {questions.map((question, index) => (
              <div key={index}>
                <h2>{question.question}</h2>
                <div className="options">
                  {question.options.map((option, optionIndex) => (
                    <label key={optionIndex}>
                      <input
                        type="radio"
                        value={option}
                        checked={userAnswers[index] === option}
                        onChange={(e) => handleOptionChange(e, index)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="result">
            <h2>Result</h2>
            <ul>
              {questions.map((question, index) => (
                <li key={index}>
                  <strong>{question.question}</strong>
                  <br />
                  Your answer: {userAnswers[index]}
                  <br />
                  Correct answer: {question.answer}
                </li>
              ))}
            </ul>
            {isAllCorrect ? (
              <div>
                <p>Congratulations! You've answered all questions correctly!</p>
                <p>Here is the code to download the audio: YOUR_CODE</p>
                <button onClick={handleReset}>Try Again</button>
              </div>
            ) : (
              <div>
                <p>Sorry, not all answers are correct. Try again!</p>
                <button onClick={handleReset}>Try Again</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Audio;
