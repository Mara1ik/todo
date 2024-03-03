import { createStore } from "redux";

const defaultState = {
  taskList: [],
};

const ADD_TASK = "ADD_TASK";
const DO_TASK = "DO_TASK";
const DELETE_TASK = "DELETE_TASK";
const EDIT_TASK = "EDIT_TASK";

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: [
          ...state.taskList,
          {
            id: Date.now(),
            value: {
              title: action.payload.title,
              description: action.payload.description,
            },
            isDone: false,
          },
        ],
      };
    case DO_TASK:
      return {
        ...state,
        taskList: state.taskList.map((task) => {
          if (task.id !== action.payload) return task;
          return { ...task, isDone: !task.isDone };
        }),
      };
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        taskList: state.taskList.map((task) => {
          if (task.id !== action.payload.id) return task;
          return {
            ...task,
            value: action.payload.value,
          };
        }),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;

export const addTask = (payload) => ({ type: ADD_TASK, payload });
export const doTask = (payload) => ({ type: DO_TASK, payload });
export const deleteTask = (payload) => ({ type: DELETE_TASK, payload });
export const editTask = (payload) => ({ type: EDIT_TASK, payload });
