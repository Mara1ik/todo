import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import GlobalStyle from "./globalStyle";
import store from "./store";
import AddTaskPage from "./pages/AddTaskPage.js";
import ErrorPage from "./pages/ErrorPage.js";
import TaskPage from "./pages/TaskPage.js";

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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
