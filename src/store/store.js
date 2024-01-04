import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../features/countrySlice";

export const store = configureStore({
  reducer: { countries: countryReducer },
});
