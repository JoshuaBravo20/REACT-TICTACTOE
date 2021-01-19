import React from "react";

const Tile = ({ onClick, value, highlightWinner, hideGrid}) => {
  const className = "square" + (highlightWinner ? "highlight" : "");

  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Tile;
