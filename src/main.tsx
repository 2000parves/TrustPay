import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router";
import { router } from "./routes/index.tsx";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "./components/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
 <RouterProvider router={router} />
  <Toaster richColors />
      </Provider>
    </HelmetProvider>
  </StrictMode>
);
