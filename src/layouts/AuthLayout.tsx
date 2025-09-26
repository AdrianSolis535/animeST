import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar drawerId="app-drawer" showBurger={false} />
      <main className="container mx-auto p-6">
        <Outlet />
      </main>
    </div>
  )
}
