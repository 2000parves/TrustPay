import App from "@/App";
import { createBrowserRouter } from "react-router";
import Home from "@/pages/Home";
import Features from "@/pages/Features";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import FAQ from "@/pages/FAQ";
import ForgotPasswordPage from "@/pages/auth/ForgotPassword";
import OtpPage from "@/pages/auth/OtpPage";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "auth/login",
        element: <Login />,
      },
      {
        path: "auth/signup",
        element: <Signup />,
      },
      {
        path: "auth/forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "auth/otp-verification",
        element: <OtpPage />,
      },
    ]
  },
]);
