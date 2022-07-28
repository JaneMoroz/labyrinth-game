import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { startGame } from "../features/game/gameSlice";

const Instructions = () => {
  const dispatch = useDispatch();

  return (
    <div className="page">
      <div className="container">
        <span className="intro">Вот, что тебя ждет в игре:</span>
        <h1>Двигайся в лабиринте по стрелкам.</h1>
        {/* Детали задания */}
        <div className="details">
          <div className="detail">
            <h2 className="detail__title">уровень сложности:</h2>
            <div className="detail__info">
              <FaStar className="icon-star" />
              <FaRegStar className="icon-star" />
              <FaRegStar className="icon-star" />
              <FaRegStar className="icon-star" />
              <FaRegStar className="icon-star" />
            </div>
          </div>
          <div className="detail">
            <h2 className="detail__title">скорость:</h2>
            <div className="detail__info">
              <span>1</span>
            </div>
          </div>
          <div className="detail">
            <h2 className="detail__title">колличество ходов::</h2>
            <div className="detail__info">
              <span>10</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => dispatch(startGame())}
          className="btn btn-solid"
          type="button"
        >
          понятно
        </button>
      </div>
    </div>
  );
};

export default Instructions;
