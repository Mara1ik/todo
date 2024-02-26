import { createStore } from "redux";

const ADD_TASK = "ADD_TASK";
const DO_TASK = "DO_TASK";
const DELETE_TASK = "DELETE_TASK";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        { id: Date.now(), value: action.payload, isDone: false },
      ];
    case DO_TASK:
      return state.map((task) => {
        if (task.id !== action.payload) return task;
        return { ...task, isDone: !task.isDone };
      });
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;

export const addTaskAction = (payload) => ({ type: ADD_TASK, payload });
export const doTaskAction = (payload) => ({ type: DO_TASK, payload });
export const deleteTaskAction = (payload) => ({ type: DELETE_TASK, payload });
