import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";
//bulma CSS
import "bulma/css/bulma.min.css";
//for icons that bulma can use 'npm install --save @fortawesome/fontawesome-free'
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
