import { createBrowserRouter } from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Store from "../pages/books/Store";
import ExploreBooks from "../pages/books/ExploreBooks";
import SellBooks from "../pages/sell/sellbooks";
import CartPage from "../pages/books/CartPage";
import CheckOutPage from "../pages/books/CheckOutPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/orders",
        element: <div>order</div>,
      },
      {
        path: "/exploreBooks",
        element: <ExploreBooks />,
      },
      {
        path: "/sell-books",
        element: <SellBooks/>,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/my-listings",
        element: <div>my-listings</div>,
      },
      {
        path: "/user-reviews",
        element: <div>user-reviews</div>,
      },
      {
        path: "/my-profile",
        element: <div>My profile</div>,
      },
      {
        path: "/community",
        element: <div>Community</div>,
      },
      {
        path: "/messages",
        element: <div>messages</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      
      {
        path: "/checkout",
        element: <PrivateRoute> <CheckOutPage /> </PrivateRoute>  ,
      },
    ],
  },
  
]);

export default router;
