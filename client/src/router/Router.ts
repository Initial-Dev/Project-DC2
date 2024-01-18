import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: "*",
    async lazy() {
      const { NotFoundError } = await import("../pages/Error/404");
      return { Component: NotFoundError };
    },
  },
  {
    path: "/",
    async lazy() {
      const { Home } = await import("../pages/Home");
      return { Component: Home };
    },
  },
  {
    path: "/cart",
    async lazy() {
      const { Cart } = await import("../pages/Cart");
      return { Component: Cart };
    },
  },
]);
