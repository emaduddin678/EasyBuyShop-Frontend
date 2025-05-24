import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { counterSlice } from "../features/counter/counterSlice";
import { quotesApiSlice } from "../features/quotes/quotesApiSlice";

// Combine reducers from slices
const rootReducer = combineSlices(counterSlice, quotesApiSlice);

// Store setup function for testing and reuse
export const makeStore = (preloadedState) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(quotesApiSlice.middleware),
    preloadedState,
  });

  setupListeners(store.dispatch);
  return store;
};

export const store = makeStore();

