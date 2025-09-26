import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function AuthLayout() {

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light"
    document.documentElement.setAttribute("data-theme", saved)
  }, [])

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar showBurger={false} />
      <main className="container mx-auto p-6">
        <Outlet />
      </main>
    </div>
  )
}
