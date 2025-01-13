import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./globalStyle";
import store from "./store";
import AddTaskPage from "./pages/AddTaskPage";
import ErrorPage from "./pages/ErrorPage";
import TaskPage from "./pages/TaskPage";
import WeatherPage from "./pages/WeatherPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/addTask",
    element: <AddTaskPage />,
  },
  {
    path: "/:taskId",
    element: <TaskPage />,
  },
  {
    path: "/weather",
    element: <WeatherPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
