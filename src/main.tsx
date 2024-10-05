// react-dom/client
import { createRoot } from "react-dom/client";

// react-router-dom
import { RouterProvider } from "react-router-dom";

// @tanstack/react-query
import { QueryClientProvider } from "@tanstack/react-query";

// Router
import router from "./router";

// Query cLient
import queryClient from "./config/queryClient";

// Style
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
