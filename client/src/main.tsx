import React from "react";
import ReactDOM from "react-dom/client";
import { configStore } from "./store";
import { RouterProvider } from "react-router-dom";
import { Router } from "@/router";
import { ErrorBoundary } from "@/utils";

const store = configStore;

console.log(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={Router} />
    </ErrorBoundary>
  </React.StrictMode>,
);
