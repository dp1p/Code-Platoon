// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound"
import Characters from "./pages/AllCharacters";
import Character from "./pages/Character";
import Favorites from "./pages/Favorites";

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
        path: "characters/", //this is the dynamic param we will be using, so when a user clicks on a specfic character, their ID with info will pop
        element: <Characters />
      },
        {
          path:"character/:id",
          element: <Character/>,
        },
      {
        path:"favorites",
        element: <Favorites/>,
      },
    ],
    errorElement: <NotFound/>
  },

]);

export default router;
