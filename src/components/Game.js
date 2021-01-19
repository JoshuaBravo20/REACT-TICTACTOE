import React, { useState } from "react";
import Tile from "./Tile";
import ChooseWeapon from './ChooseWeapon';
import { CalculateWinner } from "./Functions";

function Game() {
  const [tiles, setTile] = useState(Array(9).fill(null));
  const [isXNext, setXNext] = useState(true);
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [hideChoose, setHideChoose] = useState(false);

  function handlePlayer1() {
    setHideChoose(true);
    setPlayer1(setXNext(isXNext));
  }

  function handlePlayer2() {
    setHideChoose(true);
    setPlayer2(setXNext(!isXNext));
  }

  const winningInfo = CalculateWinner(tiles);
  const winner = winningInfo.winner;

  const winnerHighlight = winningInfo.line;

  let status;
  if (winner) {
    status = "THE WINNER IS " + winner + " !!!!";
  } else if (winningInfo.isDraw) {
    status = "DRAW!!!";
  } else {
    status = "NEXT PLAYER: " + (isXNext ? "X" : "O");
  }

  function renderTile(i) {
    return (
      <Tile
        onClick={() => {
          const nextTile = tiles.slice();
          nextTile[i] = isXNext ? "X" : "O";
          setXNext(!isXNext);
          setTile(nextTile);
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
      <ChooseWeapon startPlayer1={handlePlayer1} startPlayer2={handlePlayer2} hideChoose={hideChoose}/>
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

      <div className="resetButton btn btn-lg btn-warning" onClick={gameReset}>RESET</div>
    </div>
    </>
  );
}

export default Game;
