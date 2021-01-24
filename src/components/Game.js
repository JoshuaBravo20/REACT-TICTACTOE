import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import ChooseWeapon from "./ChooseWeapon";
import { CalculateWinner } from "./Functions";

function Game() {
  const [tiles, setTile] = useState(Array(9).fill(false));
  const [isXNext, setXNext] = useState(true);
  const [turn1, setTurn1] = useState("");
  const [turn2, setTurn2] = useState("");
  const [hideChoose, setHideChoose] = useState(false);

  function handleTurn1() {
    setHideChoose(true);
    setTurn1(setXNext(isXNext));
  }

  function handleTurn2() {
    setHideChoose(true);
    setTurn2(setXNext(!isXNext));
  }

  const winningInfo = CalculateWinner(tiles);
  const winner = winningInfo.winner;
  const isGameOver = winningInfo.gameOver;
  const winnerHighlight = winningInfo.line;

  let status;
  if (winner) {
    status = "THE WINNER IS " + winner + " !!!!";
  }

  function renderTile(i) {
    return (
      <Tile
        onClick={() => {
          if (isGameOver === false) {
            if (tiles[i] === false) {
              const nextTile = tiles.slice();
              //Determinando a quién le toca jugar
              nextTile[i] = isXNext ? "X" : "O";
              setTile(nextTile);
              setXNext(!isXNext);
            } else {
              alert("INVALIDA!!!!!!!!!");
            }
          } else {
            alert("GAME IS OVER, PLEASE RESET");
          }
        }}
        value={tiles[i]}
        highlightWinner={winnerHighlight && winnerHighlight.includes(i)}
      />
    );
  }

  function gameReset() {
    window.location.reload();
  }

  return (
    <>
      <ChooseWeapon
        startPlayer1={handleTurn1}
        startPlayer2={handleTurn2}
        hideChoose={hideChoose}
      />
      <div className="container mainCo">
        <div className="status">{status}</div>
        <div className="board-row">
          {renderTile(0)}
          {renderTile(1)}
          {renderTile(2)}
        </div>

        <div className="board-row">
          {renderTile(3)}
          {renderTile(4)}
          {renderTile(5)}
        </div>

        <div className="board-row">
          {renderTile(6)}
          {renderTile(7)}
          {renderTile(8)}
        </div>

        <div className="resetButton btn btn-lg btn-warning" onClick={gameReset}>
          RESET
        </div>
      </div>
    </>
  );
}

export default Game;
