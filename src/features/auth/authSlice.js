import { createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./authAPI.js";

// Initial state
const initialState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  selectors: {
    selectCount: (counter) => counter.value,
    selectStatus: (counter) => counter.status,
  },
});

// Export actions
export const { increment, incrementByAmount, incrementAsync } =
  counterSlice.actions;

// Export selectors
export const { selectCount, selectStatus } = counterSlice.selectors;

export default counterSlice.reducer;
