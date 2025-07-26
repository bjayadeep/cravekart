import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./components/approuter";
import "./index.css";

import { Provider } from "react-redux";
import appStore from "./utils/appStore"; // make sure the path is correct

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </React.StrictMode>
);
