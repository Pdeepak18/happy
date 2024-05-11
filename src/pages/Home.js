import React,{useState} from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
const Home  =  () => {
    const [showYesModal, setShowYesModal] = useState(false);
    const [showNoModal, setShowNoModal] = useState(false);

    const handleYesClick = () => {
      setShowYesModal(true);
    };

    const handleNoClick = () => {
      setShowNoModal(true);
    };

    const closeYesModal = () => {
      setShowYesModal(false);
    };

    const closeNoModal = () => {
      setShowNoModal(false);
    };

    return (
      <div className="AppHome">
        <h3 className="head">Welcome to a Night Under the Moon's Spell...</h3>

        <p className="text-p">
          Khushi Ji, would you like to embark on an enchanting journey together?
        </p>

        <div className="buttons" style={{ marginTop: "200px" }}>
          <button onClick={handleYesClick}>Yes</button>
          <button onClick={handleNoClick}>No</button>
        </div>

        <div class="bounce">
          <a href="/audio" style={{ textDecoration: "none", color: "black" }}>
            Audio  🔽
          </a>
        </div>

        <Modal
          isOpen={showYesModal}
          onRequestClose={closeYesModal}
          contentLabel="Yes Modal"
          style={{
            content: {
              width: "300px",
              height: "200px",
              margin: "auto",
              backgroundColor: "white",
              borderRadius: "10px",
              border: "1px solid #ccc",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              overflow: "auto",
            },
          }}
        >
          <div className="flex-row">
            <button onClick={closeYesModal} style={{ float: "right" }}>
              <span aria-hidden="true">&times;</span>
            </button>
            <p style={{ color: "black", textAlign: "center" }}>
              I knew you were just as excited as I am! Let's make tonight
              unforgettable 😁.
            </p>

            <a href="/quiztime" style={{ textDecoration: "", color: "black" }}>
              {"Chaliye shuru karte hai"}
            </a>
          </div>
        </Modal>

        <Modal
          isOpen={showNoModal}
          onRequestClose={closeNoModal}
          contentLabel="No Modal"
          style={{
            content: {
              width: "350px",
              height: "250px",
              margin: "auto",
              backgroundColor: "white",
              borderRadius: "10px",
              border: "1px solid #ccc",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              overflow: "auto",
            },
          }}
        >
          <div className="flex-row">
            <button
              onClick={closeNoModal}
              style={{ float: "right", backgroundColor: "#dc2f02" }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <p style={{ color: "black", textAlign: "center" }}>
              Chal de yaar sath mai. Pakka end tak rahunga tere sath 😊.
            </p>

            <div className="buttons" style={{ paddingTop: "20px" }}>
              <button onClick={handleYesClick}>
                <a
                  href="/quiztime"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  Chale !!
                </a>
              </button>
              <button
                onClick={handleNoClick}
                className="dnd"
                onMouseOver={() => {
                  <p>{"Karna hi padega"}</p>;
                }}
              >
                Ya Abhi bhi doubt hai
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );

}

export default Home;