import { createBrowserRouter, Navigate } from "react-router-dom"
import AuthLayout from "../layouts/AuthLayout"
import Home from "../pages/Home"
import GeneroDetalle from "../pages/GeneroDetalle"
import EstadoDetalle from "../pages/EstadoDetalle"
import CategoriaDetalle from "../pages/CategoriaDetalle"
import LoginPage from "../Auth/LoginPage"

export const router = createBrowserRouter([

  { path: "/", element: <Navigate to="/auth/login" replace /> },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [{ path: "login", element: <LoginPage /> }],
  },

  { path: "/app", element: <Home /> },

  { path: "/generos/:slug", element: <GeneroDetalle /> },
  { path: "/estado/:slug", element: <EstadoDetalle /> },
  { path: "/categorias/:slug", element: <CategoriaDetalle /> },

  { path: "*", element: <div className="p-6">404 - No encontrado</div> },
])
