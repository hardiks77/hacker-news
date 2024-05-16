import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import DetailPage from "./pages/DetailPage.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/news/:id",
    element: <DetailPage />,
  },
  {
    path: "*", // This will match any route not defined above
    element: <ErrorPage />, // Display the Error page component
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="header">Hacker News</div>

      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
