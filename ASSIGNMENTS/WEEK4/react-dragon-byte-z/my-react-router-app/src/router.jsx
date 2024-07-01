// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import "bulma/css/bulma.min.css";
import HomePage from "./components/Pages/HomePage";
import NotFound from "./components/Pages/NotFound";
import Planet from "./components/Pages/Planet";

// router.jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "planet",
        element: <Planet/>,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
