import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { QuestionsData } from './QuestionsData';

const ScorePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="box-container">
      <div className="box score-box">
        <h1 className="textcenter">Congratulations</h1>
        <h2 className="textcenter score">Your Score: {state.score}</h2>
        <div className="answers">
          {QuestionsData.map((question, index) => (
            <div className="answer">
              <p>
                Q{index + 1}. {question.question}
              </p>
              <p
                className={
                  question.answer === state.submittedData[index]
                    ? "correct"
                    : "incorrect"
                }
              >
                {state.submittedData[index]
                  ? `Your Answer: ${state.submittedData[index]} `
                  : "Not Answered"}
              </p>
            </div>
          ))}
        </div>
        <div>
          {state.score == 3 ? (
            <button
              className="btn textcenter"
              onClick={() => navigate("/story1")}
            >
              Jaa Download karle (Code : Jajantaram Mamantaram )
            </button>
          ) : (
            <button className="btn textcenter">
              Chal koi na !! Ek aur chance deta hu tujhe there is code hidden in
              these /story1 page  if you are smart then find it...{" "}
              <a href="/story1" style={{ textDecoration: "none", color: "white" }}>
                Click here
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScorePage