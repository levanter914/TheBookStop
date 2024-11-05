import { createBrowserRouter } from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
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
        path: "/store",
        element: <div>store</div>,
      },
      {
        path: "/sell-books",
        element: <div>sell</div>,
      },
      {
        path: "/cart",
        element: <div>cart</div>,
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
        path: "/login",
        element: <div>login</div>,
      },
      {
        path: "/logout",
        element: <div>logout</div>,
      },
    ],
  },
  
]);

export default router;
