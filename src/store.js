import { configureStore } from "@reduxjs/toolkit";
import testDetails from "./slices/testDetails";
export const store = configureStore({
  reducer: { testDetails },
});
