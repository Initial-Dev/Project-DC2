import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: "*",
    async lazy() {
      const { NotFoundError } = await import("../pages");
      return { Component: NotFoundError };
    },
  },
  {
    path: "/",
    async lazy() {
      const { Home } = await import("../pages");
      return { Component: Home };
    },
  },
  {
    path: "/:id",
    async lazy() {
      console.log("detail");
      const { Detail } = await import("../pages");
      return { Component: Detail };
    },
  },
  {
    path: "/login",
    async lazy() {
      const { Login } = await import("../pages");
      return { Component: Login };
    },
  },
  {
    path: "/catalog",
    async lazy() {
      const { Catalog } = await import("../pages");
      return { Component: Catalog };
    },
  },
  {
    path: "/cart",
    async lazy() {
      const { Cart } = await import("../pages");
      return { Component: Cart };
    },
  },
]);
