import React from "react";
import { useSelector } from "react-redux";
import {
  FaArrowCircleDown,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaArrowCircleUp,
} from "react-icons/fa";
import { alphabet } from "../helpers/utils";
import BoardSquare from "./BoardSquare";
import Modal from "./Modal";

const Game = () => {
  const { boardSize, directions, isModalOpen } = useSelector(
    (store) => store.game
  );
  const numOfSquares = Array.from(Array(Math.pow(boardSize, 2)).keys());

  return (
    <div className="page">
      <div className="container game-container">
        {/* Цифры */}
        <aside className="numbers grid-1">
          {Array.from(Array(boardSize).keys()).map((_, index) => {
            return <span key={index}>{index + 1}</span>;
          })}
        </aside>
        <div>
          {/* Буквы */}
          <aside className={`letters grid-${boardSize}`}>
            {Array.from(Array(boardSize).keys()).map((_, index) => {
              return <span key={index}>{alphabet[index]}</span>;
            })}
          </aside>
          {/* Доска */}
          <div className={`grid grid-${boardSize}`}>
            {numOfSquares.map((index) => {
              return <BoardSquare key={index} index={index} />;
            })}
          </div>
        </div>
      </div>
      {/* Направления */}
      <div className="directions">
        {directions.map((direction, index) => {
          if (direction === "top")
            return <FaArrowCircleUp className="direction" key={index} />;
          if (direction === "bottom")
            return <FaArrowCircleDown className="direction" key={index} />;
          if (direction === "left")
            return <FaArrowCircleLeft className="direction" key={index} />;
          if (direction === "right")
            return <FaArrowCircleRight className="direction" key={index} />;
        })}
      </div>
      {/* Модал */}
      {isModalOpen && <Modal />}
    </div>
  );
};

export default Game;
