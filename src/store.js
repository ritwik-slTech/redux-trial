import { configureStore } from "@reduxjs/toolkit";
import testDetails from "./slices/testDetails";
import toastSlice from "./slices/toastSlice";

// after creating slices register them here
export const store = configureStore({
  reducer: { testDetails, toastSlice },
});
