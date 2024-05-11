import React,{useState} from 'react'



const Story1 = () => {
    const [enteredCode, setEnteredCode] = useState("");
    const [isCodeValid, setIsCodeValid] = useState(false);

    const handleCodeChange = (e) => {
      setEnteredCode(e.target.value);
    };

    const verifyCode = () => {
      // Implement code verification logic here
      // For example, compare enteredCode with a predefined code
      const correctCode = "Jajantaram Mamantaram"; // Replace with your actual correct code
      if (enteredCode === correctCode) {
        setIsCodeValid(true);
      } else {
        setIsCodeValid(false);
      }
    };

    const handleListen = () => {
      // Implement logic to play the audio
      const audio = new Audio("/assets/horse.ogv");
      audio.play();
    };

    const handleDownload = () => {
      // Implement logic to download the audio
      const link = document.createElement("a");
      link.href = "/assets/horse.ogv";
      link.download = "/assets/horse.ogv";
      link.click();
    };

  return (
    <div className="box-container2">
      <h1>Audio Page</h1>
      <div className="flex-row2">
        <input
          type="text"
          value={enteredCode}
          onChange={handleCodeChange}
          placeholder="Enter code"
          className="styled-input"
        />
        <button onClick={verifyCode}>Verify Code</button>
      </div>
      {isCodeValid && (
        <div>
          <p>Code verified!</p>
          <button onClick={handleListen}>Listen</button>
          <button onClick={handleDownload}>Download</button>
          {/* Place your audio player or download link here */}
        </div>
      )}
      {enteredCode === "Jajantaram Mamantaram" ? (
        ""
      ) : (
        <p>Invalid code. Please try again.</p>
      )}

      {console.log("Code: Jajantaram Mamantaram")}
    </div>
  );
}

export default Story1
