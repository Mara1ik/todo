import { configureStore, createSlice } from "@reduxjs/toolkit";

const taskListSlice = createSlice({
  name: "taskList",
  initialState: [],
  reducers: {
    addTask: (state, action) => [
      ...state,
      { id: Date.now(), value: action.payload, isDone: false },
    ],

    doTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      task.isDone = !task.isDone;
    },

    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    taskList: taskListSlice.reducer,
  },
});

export const { addTask, doTask, deleteTask } = taskListSlice.actions;

export default store;
