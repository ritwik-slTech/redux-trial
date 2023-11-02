import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    open: false,
    message: "",
    severity: "success",
  },
};

export const toastSlice = createSlice({
  name: "toastSlice",
  initialState,
  reducers: {
    handleClose: function (state) {
      state.value.open = false;
    },
    handleOpen: function (state, action) {
      state.value = { ...action.payload, open: true };
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleClose, handleOpen } = toastSlice.actions;

export default toastSlice.reducer;
