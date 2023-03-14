import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import "./index.css";
import { Provider } from "react-redux";
import store from "./RTK/store";
import Index from "./pages/Index";
import ErrorHandler from "./pages/ErrorHandler";
import Movie from "./pages/Movie";

const container = document.getElementById("root");
const root = createRoot(container);
const ParamHandler = ({ params }) => {
  if (isNaN(params.id)) {
    throw new Response("Bad Request", {
      statusText: "Please make sure to insert correct moive id",
      status: 400,
    });
  }
  return params;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorHandler />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "movie/:id",
        element: <Movie />,
        loader: ParamHandler,
      },
    ],
  },
]);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
