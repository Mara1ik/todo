import { createStore } from "redux";

const defaultState = {
  taskList: [],
};

const ADD_TASK = "ADD_TASK";
const DO_TASK = "DO_TASK";
const DELETE_TASK = "DELETE_TASK";
const EDIT_TASK_TITLE = "EDIT_TASK_TITLE";
const EDIT_TASK_DESCRIPTION = "EDIT_TASK_DESCRIPTION";

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
    case EDIT_TASK_TITLE:
      return {
        ...state,
        taskList: state.taskList.map((task) => {
          if (task.id !== action.payload) return task;
          return {
            ...task,
            value: { ...task.value, title: action.payload.title },
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
