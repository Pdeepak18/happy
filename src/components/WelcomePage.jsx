import React from 'react'
import { useNavigate } from 'react-router-dom'
import { QuestionsData } from './QuestionsData'
const WelcomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="box-container">
      <div className="box textcenter">
        <h1 className="title">Welcome to the Challenge Khushi Ji !</h1>

        <p>If you want to listen the story you have to play a game</p>
        <div className="description">
          <p>You will be presented with 2 MCQs on cybersecurity and 1 general. (Don't google it)</p>
          <p>Can you score 100%?</p>
          <p>Chalo dekhte hai kitni meri baate yaad hai aapko</p>
        </div>
        <div>
          <button className="btn" onClick={() => navigate("/quiz")}>
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage