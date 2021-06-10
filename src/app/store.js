import { configureStore } from '@reduxjs/toolkit';
import seatsReducer from "./seats/duck";
import reservationReducer from "./reservations/duck";

export const store = configureStore({
  reducer: {
    seats: seatsReducer,
    reservations: reservationReducer
  },
});