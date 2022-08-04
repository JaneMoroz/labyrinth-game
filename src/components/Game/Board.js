import React from "react";
import { useSelector } from "react-redux";
import BoardSquare from "./BoardSquare";

const Game = () => {
  const { boardSize } = useSelector((store) => store.game);

  // Колличество ячек
  const numOfSquares = Array.from(Array(Math.pow(boardSize, 2)).keys());

  return (
    <div className={`grid grid-${boardSize}`}>
      {numOfSquares.map((index) => {
        return <BoardSquare key={index} index={index} />;
      })}
    </div>
  );
};

export default Game;
