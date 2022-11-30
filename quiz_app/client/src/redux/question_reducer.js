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
      return {
        ...state,
        queue: action.payload,
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
  },
});

export const { startExamAction, moveToNextQuestion, moveToPrevQuestion } =
  questionReducer.actions;
export default questionReducer.reducer;
