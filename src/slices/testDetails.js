import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const testDetails = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setData: (state, action) => {
      console.log(state, action);
      state.value = action.payload;
    },
    deleteData: (state, action) => {
      const { payload } = action;
      const id = payload.id;
      if (id) {
        const index = state.value.findIndex((item) => item.id === id);
        const temp = [...state.value]
        state.value.splice(index, 1);
      }
    },
    updateData: (state, action) => {
      debugger
      const { payload } = action;
      const id = payload.id;
      if (id) {
        const index = state.value.findIndex((item) => item.id === id);
        state.value.splice(index, 1,payload);
      }
    },
    addData: (state, action) => {
      const { payload } = action;
      state.value.push(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData, deleteData, updateData, addData } = testDetails.actions;

export default testDetails.reducer;
