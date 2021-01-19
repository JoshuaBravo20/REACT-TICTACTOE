import React from "react";
import "../components/ChooseWeapon.css";

const ChooseWeapon = (props) => {
  return (
    <div className="container">
      <div className={"" + (props.hideChoose === true ? 'd-none' : ' ')}>
        <div className="row">
          <div className="text-white" id="heading">
            <strong>⚛️ Tic Tac Toe in React.JS ⚛️</strong>
          </div>
          <div
            className="text-white d-flex justify-content-center mt-4"
            id="pickaweapon"
          >
            <strong>Pick a Weapon! 🔫</strong>
          </div>
          <div className="selectionBox text-white d-flex justify-content-center">
            <div className="container">
              <div className="row">
                <div className="col d-flex justify-content-center mt-5 mb-5">
                  CHOOSE YOUR WEAPON
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    name="player1"
                    id={props.turn}
                    placeholder="PLAYER 1 NAME"
                    onChange={props.player1Name}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="player2"
                    id={props.turn}
                    placeholder="PLAYER 2 NAME"
                    onChange={props.player1Name}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-center mt-5 mb-5">
                  <button
                    className="btn btn-primary text-white"
                    id="botoncito1" onClick={props.startPlayer1}
                  >
                    X
                  </button>
                </div>
                <div className="col d-flex justify-content-center mt-5 mb-5">
                  <button className="btn btn-info text-white" id="botoncito2" onClick={props.startPlayer2}>
                    O
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseWeapon;
