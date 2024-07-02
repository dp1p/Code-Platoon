// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound"
import AllCharacters from "./pages/AllCharacters";

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
        path: "characters",
        element: <AllCharacters />
      },
    ],
    errorElement: <NotFound/>
  },

]);

export default router;
