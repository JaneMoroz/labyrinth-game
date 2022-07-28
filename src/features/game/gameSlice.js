import { createSlice } from "@reduxjs/toolkit";
import {
  getDirections,
  getAnswer,
  getInitialPosition,
} from "../../helpers/gameLogic";

const initialState = {
  numOfSteps: 10,
  boardSize: 3,
  answer: null,
  userAnswer: null,
  isModalOpen: false,
  inGameMode: false,
  isGameOver: false,
  directions: [],
  initialPosition: 0,
  isWinner: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state) => {
      const tempInitialPosition = getInitialPosition(state.boardSize);
      const tempDirections = getDirections(state.numOfSteps);
      state.directions = tempDirections;
      state.initialPosition = tempInitialPosition;
      state.answer = getAnswer(
        tempInitialPosition,
        tempDirections,
        state.boardSize
      );
      console.log(state.answer);
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
  },
});

export const { startGame, openModal, exitGame, checkAnswer } =
  gameSlice.actions;

export default gameSlice.reducer;
