// Сгенирировать случайную начальную позицию согласно колличеству ячеек
export const getInitialPosition = (boardSize) => {
  return Math.floor(Math.random() * Math.pow(boardSize, 2));
};

// Сгенерировать массив направлений (случайных)
export const getDirections = (numOfSteps) => {
  const options = ["top", "bottom", "left", "right"];
  const directions = [];
  for (let i = 0; i < numOfSteps; i++) {
    const randomNum = Math.floor(Math.random() * 4);
    directions.push(options[randomNum]);
  }
  return directions;
};

// Получть новую позицию после хода
const nextPosition = (position, direction, boardSize) => {
  if (direction === "top") {
    if (position < boardSize) {
      return position + boardSize * (boardSize - 1);
    } else {
      return position - boardSize;
    }
  }

  if (direction === "bottom") {
    if (position >= boardSize * (boardSize - 1)) {
      return position - boardSize * (boardSize - 1);
    } else {
      return position + boardSize;
    }
  }

  if (direction === "left") {
    if (position === 0 || position % boardSize === 0) {
      return position + boardSize - 1;
    } else {
      return position - 1;
    }
  }

  if (direction === "right") {
    if ((position + 1) % boardSize === 0) {
      return position - (boardSize - 1);
    } else {
      return position + 1;
    }
  }
};

// Получить решение
export const getAnswer = (initial, directions, boardSize) => {
  let position = initial;
  directions.forEach((direction) => {
    position = nextPosition(position, direction, boardSize);
  });

  return position;
};
