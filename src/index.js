import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AboutPage from "./pages/aboutPage";
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "about",
        element: <AboutPage />,
      },
  ]);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));