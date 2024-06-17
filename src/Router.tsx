import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Error404 from "./pages/Error404";

// Auth
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Otp from "./pages/Auth/Otp";
import ForgotPassword from "./pages/Auth/ForgotPassword";

// Layouts & User Protected Layout
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import GuardLayout from "./layout/GuardLayout";

export const router = createBrowserRouter([
  {
    element: <GuardLayout />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },

          {
            path: "/privacy-policy",
            element: <PrivacyPolicy />,
          },
          {
            path: "/terms-and-conditions",
            element: <TermsAndConditions />,
          },
        ],
      },
      {
        path: "/otp",
        element: <Otp />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
      // Auth
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/signup",
            element: <SignUp />,
          },

          {
            path: "/forgot-password",
            element: <ForgotPassword />,
          },
        ],
      },
    ],
  },
]);
