import "@/config/Global.css";
import { Layout } from "@/layout";
import { Router } from "@/router";
import { ErrorBoundary } from "@/utils";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { configStore, initState } from "./store";
import { Provider } from "react-redux";

const store = configStore;
initState(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        {location.pathname !== "/login" ? (
          <Layout currentPath={location.pathname}>
            <RouterProvider router={Router} />
          </Layout>
        ) : (
          <RouterProvider router={Router} />
        )}
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
