import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkAnswer } from "../../features/game/gameSlice";
import { openModal } from "../../features/game/gameSlice";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import dog from "../../assets/dog-small.svg";

const BoardSquare = ({ index }) => {
  const dispatch = useDispatch();
  const {
    initialPosition,
    isGameOver,
    answer,
    isWinner,
    userAnswer,
    directionDelay,
    numOfSteps,
  } = useSelector((store) => store.game);

  const handleClick = (index) => {
    dispatch(checkAnswer(index));
    setTimeout(() => {
      dispatch(openModal());
    }, 1500);
  };

  // Стартовая Ячейка
  if (isGameOver === false && index === initialPosition) {
    return (
      <button
        onClick={() => handleClick(index)}
        className="square"
        disabled={isGameOver || directionDelay < numOfSteps - 1}
      >
        <span>Старт</span>
        <img className="square__img" src={dog} alt="пёса" />
      </button>
    );
  }

  // Если игра окончена
  if (isGameOver === true) {
    // Ячейка правильного ответа с учетом ответа пользователя
    if (index === answer) {
      return (
        <button
          onClick={() => handleClick(index)}
          className="square"
          disabled={isGameOver || directionDelay < numOfSteps - 1}
        >
          {!isWinner && <span>Финиш</span>}
          {!isWinner && <img className="square__img" src={dog} alt="пёса" />}
          {isWinner && <FaThumbsUp className="icon icon-success" />}
        </button>
      );
    }

    // Ячейка неправильного ответа пользователя
    if (!isWinner && index === userAnswer) {
      return (
        <button
          onClick={() => handleClick(index)}
          className="square"
          disabled={isGameOver || directionDelay < numOfSteps - 1}
        >
          <FaThumbsDown className="icon icon-fail" />
        </button>
      );
    }
  }

  // Остальные ячейки
  return (
    <button
      onClick={() => handleClick(index)}
      key={index}
      className="square"
      disabled={isGameOver || directionDelay < numOfSteps - 1}
    ></button>
  );
};

export default BoardSquare;
