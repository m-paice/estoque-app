import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Details } from "../pages/Details";
import { Cart } from "../pages/Cart";
import { PersonalData } from "../pages/PersonalData";
import { Resume } from "../pages/Resume";
import { Layout } from "./Layout";
import { Finished } from "../pages/Finished";
import { Order } from "../pages/Order";
import { Orders } from "../pages/Orders";

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
        path: "/personal-data",
        element: <PersonalData />,
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
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
