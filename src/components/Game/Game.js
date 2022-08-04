import React from "react";
import { useSelector } from "react-redux";
import Board from "./Board";
import Directions from "./Directions";
import Modal from "../Modal";
import { alphabet } from "../../helpers/utils";

const Game = () => {
  const { boardSize, isModalOpen } = useSelector((store) => store.game);

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
          <Board />
        </div>
      </div>
      {/* Направления */}
      <Directions />
      {/* Модал */}
      {isModalOpen && <Modal />}
    </div>
  );
};

export default Game;
