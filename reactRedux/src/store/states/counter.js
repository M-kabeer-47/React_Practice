// toDos.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: []
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add: (state, action) => {
      state.taskList.push(action.payload);
    },
    // You can add other reducers here
  }
});

export const { add } = taskSlice.actions;
export default taskSlice.reducer;
