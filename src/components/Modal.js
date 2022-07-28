import React from "react";
import { useDispatch } from "react-redux";
import { startGame } from "../features/game/gameSlice";
import { exitGame } from "../features/game/gameSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className="modal-background">
      <div className="container">
        <h1>Еще раз?</h1>
        <button
          onClick={() => dispatch(startGame())}
          className="btn btn-solid"
          type="button"
        >
          да
        </button>
        <button
          onClick={() => dispatch(exitGame())}
          className="btn btn-outlined"
          type="button"
        >
          к заданию
        </button>
      </div>
    </div>
  );
};

export default Modal;
