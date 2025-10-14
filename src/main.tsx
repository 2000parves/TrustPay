import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./styles/theme.css";
import { router } from "./routes/index.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "./components/ui/sonner.tsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <div className="min-h-screen bg-background">
          <RouterProvider router={router} />
          <Toaster richColors />
        </div>
      </Provider>
    </HelmetProvider>
  </StrictMode>
);
