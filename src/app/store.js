import { configureStore } from '@reduxjs/toolkit';
import seatsReducer from "./seats/duck";

export const store = configureStore({
  reducer: {
    seats: seatsReducer,
  },
});