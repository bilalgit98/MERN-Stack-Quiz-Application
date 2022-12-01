import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
  name: "result",
  initialState: {
    userId: null,
    result: [],
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    pushResult: (state, action) => {
      state.result.push(action.payload);
    },
    updateResult: (state, action) => {
      const { trace, checked } = action.payload;
      state.result.fill(checked, trace, trace + 1);
    },
    ResetResult: () => {
      return { userId: null, result: [] };
    },
  },
});

export const { setUserId, pushResult, ResetResult, updateResult } =
  resultReducer.actions;
export default resultReducer.reducer;
