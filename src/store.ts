import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import actionTypes from "./constants/actionTypes";
import { weatherIcons } from "./constants/weatherConstants";
import { getWeather, getWeatherFetch } from "./async/weather";

interface ITask {
  id: number;
  value: {
    title: string;
    description: string;
  };
  isDone: boolean;
}

interface IWeather {
  city: string;
  temp: number;
  icon: any;
}

interface IState {
  taskList: ITask[];
  weatherList: IWeather[];
}

interface IAddTaskAction {
  type: actionTypes.ADD_TASK;
  payload: {
    title: string;
    description: string;
  };
}

interface IDoTaskAction {
  type: actionTypes.DO_TASK;
  payload: number;
}

interface IDeleteTaskAction {
  type: actionTypes.DELETE_TASK;
  payload: number;
}

interface IEditTaskAction {
  type: actionTypes.EDIT_TASK;
  payload: {
    id: number;
    value: {
      title: string;
      description: string;
    };
  };
}

interface IAddWeatherSuccessAction {
  type: actionTypes.ADD_WEATHER_SUCCESS;
  payload: {
    name: string;
    main: {
      temp: number;
    };
    weather: { icon: string }[];
  };
}

interface IAddWeatherFailAction {
  type: actionTypes.ADD_WEATHER_FAIL;
}

type IAction =
  | IAddTaskAction
  | IDoTaskAction
  | IDeleteTaskAction
  | IEditTaskAction
  | IAddWeatherSuccessAction
  | IAddWeatherFailAction;

const defaultState: IState = {
  taskList: [],
  weatherList: [],
};

const reducer = (state = defaultState, action: IAction): IState => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
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
    case actionTypes.DO_TASK:
      return {
        ...state,
        taskList: state.taskList.map((task) => {
          if (task.id !== action.payload) return task;
          return { ...task, isDone: !task.isDone };
        }),
      };
    case actionTypes.DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.payload),
      };
    case actionTypes.EDIT_TASK:
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
    case actionTypes.ADD_WEATHER_SUCCESS:
      return {
        ...state,
        weatherList: [
          ...state.weatherList,
          {
            city: action.payload.name,
            temp: Math.round(action.payload.main.temp - 273.15),
            icon: weatherIcons[
              (action.payload.weather[0].icon.slice(0, 2) +
                "d") as keyof typeof weatherIcons
            ],
          },
        ],
      };
    case actionTypes.ADD_WEATHER_FAIL:
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

const addTask = (payload: IAddTaskAction["payload"]) => ({
  type: actionTypes.ADD_TASK,
  payload,
});
const doTask = (payload: IDoTaskAction["payload"]) => ({
  type: actionTypes.DO_TASK,
  payload,
});
const deleteTask = (payload: IDeleteTaskAction["payload"]) => ({
  type: actionTypes.DELETE_TASK,
  payload,
});
const editTask = (payload: IEditTaskAction["payload"]) => ({
  type: actionTypes.EDIT_TASK,
  payload,
});
const addWeatherSuccess = (payload: IAddWeatherSuccessAction["payload"]) => ({
  type: actionTypes.ADD_WEATHER_SUCCESS,
  payload,
});
const addWeatherFail = () => ({
  type: actionTypes.ADD_WEATHER_FAIL,
});

export const boundAddTask = (payload: IAddTaskAction["payload"]) =>
  store.dispatch(addTask(payload));
export const boundDoTask = (payload: IDoTaskAction["payload"]) =>
  store.dispatch(doTask(payload));
export const boundDeleteTask = (payload: IDeleteTaskAction["payload"]) =>
  store.dispatch(deleteTask(payload));
export const boundEditTask = (payload: IEditTaskAction["payload"]) =>
  store.dispatch(editTask(payload));

export const addWeatherFetch = (city: string) => {
  getWeatherFetch(city)
    .then((response) => store.dispatch(addWeatherSuccess(response)))
    .catch((e) => store.dispatch(addWeatherFail()));
};

export const addWeather = (city: string) => {
  getWeather(city)
    .then((response) => store.dispatch(addWeatherSuccess(response)))
    .catch((e) => store.dispatch(addWeatherFail()));
};

export type RootState = ReturnType<typeof reducer>;
