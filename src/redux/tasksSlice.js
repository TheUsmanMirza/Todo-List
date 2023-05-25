import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [
    {
      id: "2023-5-21",
      name: "Title 1",
      desc: "Jumping directly to Web3",
      status: false,
    },
    { 
      id: "2023-5-22", 
      name: "Title 2", 
      desc: "Coding Tech",
       status: true },
    {
      id: "2023-5-23",
      name: "Title 3",
      desc: "You don't need to memorize all the 30 terms",
      status: true,
    },
    {
      id: "2023-5-25",
      name: "Title 4",
      desc: "Rust is an ideal smart contract language",
      status: false,
    },
  ],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date(),
        name: action.payload.task,
        desc: action.payload.desc,
        status: action.payload.status,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },

    updateTask: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            status: !item.status,
          };
        }
        return item;
      });
    },
  },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
