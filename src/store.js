import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import {
  ADD_TASK,
  DO_TASK,
  DELETE_TASK,
  EDIT_TASK,
  ADD_WEATHER,
} from "./constants/actionTypes.js";

const defaultState = {
  taskList: [],
  weatherList: [],
};

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
    case ADD_WEATHER:
      return {
        ...state,
        weatherList: [...state.weatherList, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));
export default store;

const addTask = (payload) => ({ type: ADD_TASK, payload });
const doTask = (payload) => ({ type: DO_TASK, payload });
const deleteTask = (payload) => ({ type: DELETE_TASK, payload });
const editTask = (payload) => ({ type: EDIT_TASK, payload });
const addWeather = (payload) => ({ type: ADD_WEATHER, payload });

export const boundAddTask = (payload) => store.dispatch(addTask(payload));
export const boundDoTask = (payload) => store.dispatch(doTask(payload));
export const boundDeleteTask = (payload) => store.dispatch(deleteTask(payload));
export const boundEditTask = (payload) => store.dispatch(editTask(payload));
export const boundAddWeather = (payload) => store.dispatch(addWeather(payload));
