import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Details } from "../pages/Details";
import { Cart } from "../pages/Cart";
import { Layout } from "./Layout";

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
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
