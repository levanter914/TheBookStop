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
import SingleBook from "../pages/books/SingleBook";
import OrderPage from "../pages/books/OrderPage";
import Loading from "../components/Loading";
import Contact from "../components/Contact";
import Faqs from "../components/Faqs";
import About from "../components/About";

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
        element: <About />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            {" "}
            <OrderPage />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/exploreBooks",
        element: <ExploreBooks />,
      },
      {
        path: "/sell-books",
        element: <SellBooks />,
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
        element: <div>Dashboard Layout</div>,
      },
      {
        path: "/dashboard",
        element: <div>Dashboard</div>,
      },
      {
        path: "/add-new-books",
        element: <div>Add new books</div>,
      },
      {
        path: "/edit-books",
        element: <div>Edit books</div>,
      },
      {
        path: "/delete-books",
        element: <div>Delete books</div>,
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
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },

      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            {" "}
            <CheckOutPage />{" "}
          </PrivateRoute>
        ),
      },

      {
        path: "/book/:id",
        element: <SingleBook />,
      },
      {
        path: "/load",
        element: <Loading />,
      },
    ],
  },
]);

export default router;
