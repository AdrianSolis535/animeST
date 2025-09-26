import { createBrowserRouter, Navigate } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import AuthLayout from "../layouts/AuthLayout"
import Home from "../pages/Home"
import LoginPage from "../Auth/LoginPage"

export const router = createBrowserRouter([

  { path: "/", element: <Navigate to="/auth/login" replace /> },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
    ],
  },

  {
    path: "/app",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
    ],
  },

  { path: "*", element: <div className="p-6">404 - No encontrado</div> },
])
