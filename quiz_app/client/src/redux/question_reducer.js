import { createSlice } from "@reduxjs/toolkit";

export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    startExamAction: (state, action) => {
      let { question, answers } = action.payload;
      return {
        ...state,
        queue: question,
        answers: answers,
      };
    },
    moveToNextQuestion: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    moveToPrevQuestion: (state) => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
    ResetQuestions: () => {
      return {
        queue: [],
        answers: [],
        trace: 0,
      };
    },
  },
});

export const {
  startExamAction,
  moveToNextQuestion,
  moveToPrevQuestion,
  ResetQuestions,
} = questionReducer.actions;
export default questionReducer.reducer;
