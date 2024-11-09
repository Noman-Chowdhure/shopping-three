import { createBrowserRouter } from "react-router-dom";
import HomePG from "./component/HomePage/HomePG";
import LayOut from "./layOut/LayOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <HomePG></HomePG>,
      },
    ],
  },
]);
