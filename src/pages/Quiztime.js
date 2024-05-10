import React, { useState } from "react";
import "../App.css";
import { Tooltip } from "react-tooltip";
const Quiztime = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="QuizContainer">
      <h3 className="head">Lets start Learning about planents</h3>
      <h3>Select an option:</h3>

      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="customselect"
      >
        <option value="">Select an option</option>
        <option value="earth.jpeg">Earth</option>
        <option value="jupiter.jpeg">Mars</option>
        <option value="pluto.jpeg">Pluto</option>

        <option value="moon.jpg">Moon</option>
      </select>
      <div>
        {selectedOption && (
          <div className="flex-col">
            <img
              src={`/assets/${selectedOption}`} // Assuming your images are named like "earth.jpg", "mars.jpg", etc.
              alt={selectedOption}
              style={{ width: "300px", marginTop: "20px" }}
            />
            <div style={{maxWidth:"320px"}}>

            {selectedOption === "earth.jpeg"
              ? "earth"
              : selectedOption === "jupiter.jpeg"
              ? "jupiter"
              : selectedOption === "pluto.jpeg"
              ? "pluto"
              : selectedOption === "moon.jpg"
              ? "😅😄😃. haa haa itna bhi aacha nhi hai par yaar khushi tujhe dekhta hu na toh bass voh chand nazar aata hai bhot bhot kuch socha hu yaar tere liye par merse at the mark chizze nhi kar paaata .khushi yaar yehh hi photo daalne ka reason hai ki yeh photo mai tu gor se dekhegi na tu khud khudse pyaar karne lagegi yaar itna itna itna aacha hai na photo ki maine hazaro baar yeh photo dekh li hai.....aur haa jaisa aaj hu vaisa kal bhi rahunga khushi tere liye.yaar mujhe likhna bhot kuch hai par mai chahta hu ki yeh saari cheeze mai tujhe saamne saamne bolu"
              : null}
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiztime;
