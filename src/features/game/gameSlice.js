import { createSlice } from "@reduxjs/toolkit";
import {
  getDirections,
  getAnswer,
  getInitialPosition,
} from "../../helpers/gameLogic";

const initialState = {
  numOfSteps: 10,
  boardSize: 3,
  initialPosition: 0,
  directionDelay: 0,
  directions: [],
  answer: null,
  userAnswer: null,
  isModalOpen: false,
  inGameMode: false,
  isGameOver: false,
  isWinner: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state) => {
      state.directionDelay = 0;
      const tempInitialPosition = getInitialPosition(state.boardSize);
      const tempDirections = getDirections(state.numOfSteps);
      state.directions = tempDirections;
      state.initialPosition = tempInitialPosition;
      state.answer = getAnswer(
        tempInitialPosition,
        tempDirections,
        state.boardSize
      );
      state.isGameOver = false;
      state.isModalOpen = false;
      state.inGameMode = true;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    exitGame: (state) => {
      state.isModalOpen = false;
      state.inGameMode = false;
    },
    checkAnswer: (state, action) => {
      const answer = action.payload;
      state.userAnswer = answer;
      if (answer === state.answer) {
        state.isWinner = true;
      } else {
        state.isWinner = false;
      }
      state.isGameOver = true;
    },
    increaseDelay: (state) => {
      state.directionDelay = state.directionDelay + 1;
    },
  },
});

export const {
  startGame,
  openModal,
  exitGame,
  checkAnswer,
  increaseDelay,
  resetDelay,
} = gameSlice.actions;

export default gameSlice.reducer;
