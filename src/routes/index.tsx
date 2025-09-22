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
import TermsPage from "@/pages/Terms";
import PrivacyPage from "@/pages/Privacy";
import SupportPage from "@/pages/auth/Support";
import AnalyticsPage from "@/pages/Analytics";
import NotFoundPage from "@/pages/NotFound";
import UserDashboard from "@/pages/dashboard/UserDashboard";
import AgentDashboard from "@/pages/dashboard/AgentDashboard";
import AdminDashboard from "@/pages/dashboard/AdminDashboard";

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
        path: "terms",
        element: <TermsPage />,
      },
      {
        path: "privacy",
        element: <PrivacyPage />,
      },
      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "dashboard/user",
        element: <UserDashboard />,
      },
      {
        path: "dashboard/agent",
        element: <AgentDashboard />,
      },
      {
        path: "dashboard/admin",
        element: <AdminDashboard />,
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
      {
        path: "auth/support",
        element: <SupportPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ]
  },
]);
