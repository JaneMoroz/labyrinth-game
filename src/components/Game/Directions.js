import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FaArrowCircleDown,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaArrowCircleUp,
} from "react-icons/fa";
import { increaseDelay } from "../../features/game/gameSlice";

const Directions = () => {
  const dispatch = useDispatch();
  const { directions, directionDelay, numOfSteps } = useSelector(
    (store) => store.game
  );

  // Поэтапное появление направлений
  useEffect(() => {
    if (directionDelay < numOfSteps - 1) {
      const timer = setTimeout(() => {
        dispatch(increaseDelay());
      }, 1000);
      return () => clearTimeout(timer);
    }
    return;
  }, [directionDelay]);

  return (
    <div className="directions">
      {directions.map((direction, index) => {
        if (index <= directionDelay) {
          if (direction === "top")
            return <FaArrowCircleUp className="direction" key={index} />;
          if (direction === "bottom")
            return <FaArrowCircleDown className="direction" key={index} />;
          if (direction === "left")
            return <FaArrowCircleLeft className="direction" key={index} />;
          if (direction === "right")
            return <FaArrowCircleRight className="direction" key={index} />;
        }
      })}
    </div>
  );
};

export default Directions;
