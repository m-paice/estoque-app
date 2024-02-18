import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Details } from "../pages/Details";
import { Cart } from "../pages/Cart";
import { Register } from "../pages/Register";
import { Resume } from "../pages/Resume";
import { Layout } from "./Layout";
import { Finished } from "../pages/Finished";
import { Order } from "../pages/Order";
import { Orders } from "../pages/Orders";
import { Login } from "../pages/Login";
import { Address } from "../pages/Address";
import { PersonalData } from "../pages/PersonalData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/finished",
        element: <Finished />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/order/:id",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/address",
        element: <Address />,
      },

      {
        path: "/personal-data",
        element: <PersonalData />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
