import { createBrowserRouter } from "react-router-dom";
import HomePG from "./component/HomePage/HomePG";
import LogIn from "./component/logInPage/LogIn";
import LayOut from "./layOut/LayOut";
import SignUP from "./component/logInPage/signUp";
import CheackOut from "./component/checkOutPage/CheackOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <HomePG></HomePG>,
      },
      {
        path:'/checkOut/:id',
        element:<CheackOut></CheackOut>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path:"/signUp",
        element:<SignUP></SignUP>
      }
    ],
  },
]);
