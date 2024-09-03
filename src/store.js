import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import {
  ADD_TASK,
  DO_TASK,
  DELETE_TASK,
  EDIT_TASK,
  ADD_WEATHER_SUCCESS,
  ADD_WEATHER_FAIL,
} from "./constants/actionTypes.js";
import { weatherIcons } from "./constants/weatherConstants.js";

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
    case ADD_WEATHER_SUCCESS:
      return {
        ...state,
        weatherList: [
          ...state.weatherList,
          {
            city: action.payload.name,
            temp: Math.round(action.payload.main.temp - 273.15),
            icon: weatherIcons[
              action.payload.weather[0].icon.slice(0, 2) + "d"
            ],
          },
        ],
      };
    case ADD_WEATHER_FAIL:
      return {
        ...state,
        weatherList: [...state.weatherList],
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
const addWeatherSuccess = (payload) => ({ type: ADD_WEATHER_SUCCESS, payload });
const addWeatherFail = (payload) => ({ type: ADD_WEATHER_FAIL, payload });

export const boundAddTask = (payload) => store.dispatch(addTask(payload));
export const boundDoTask = (payload) => store.dispatch(doTask(payload));
export const boundDeleteTask = (payload) => store.dispatch(deleteTask(payload));
export const boundEditTask = (payload) => store.dispatch(editTask(payload));

export const addWeather = (city, func) => {
  func(city)
    .then((response) => store.dispatch(addWeatherSuccess(response)))
    .catch((e) => store.dispatch(addWeatherFail()));
};
