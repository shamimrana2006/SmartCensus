import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Index from "./components/pages/Index";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import Feature from "./components/pages/features/Feature";
import { AuthProvider } from "./AuthContext/AuthContext";
import Myinfo from "./components/pages/Myinfo";
import CitizenRegistrationForm from "./components/pages/features/several from/CitizenRegisterFrom";
import NewbornRegistrationForm from "./components/pages/features/several from/NewBornFrom";
import DeathRegistrationForm from "./components/pages/features/several from/NewDeadFrom";
import AdminDashboard from "./components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "Dashboard",
        element: <div className="text-center h-screen">Dashboard</div>,
      },
      {
        path: "feature",
        element: (
          <>
            <Outlet />
          </>
        ),

        children: [
          {
            index: true,
            element: <Feature />,
          },
          {
            path: "citizenFrom",
            element: <CitizenRegistrationForm />,
          },
          {
            path: "newBornFrom",
            element: <NewbornRegistrationForm />,
          },
          {
            path: "newDeadFrom",
            element: <DeathRegistrationForm />,
          },
        ],
      },
      {
        path: "MyInfo",
        element: <Myinfo />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "AdminDashboard",
    element: <AdminDashboard />,
  },
  {
    path: "Register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
