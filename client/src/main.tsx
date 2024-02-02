import "@/config/Global.css";
import { Layout } from "@/layout";
import { Router } from "@/router";
import { ErrorBoundary } from "@/utils";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { configStore } from "./store";

const store = configStore;

console.log(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Layout>
        <RouterProvider router={Router} />
      </Layout>
    </ErrorBoundary>
  </React.StrictMode>,
);
