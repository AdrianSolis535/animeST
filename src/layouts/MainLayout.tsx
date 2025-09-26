import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const DRAWER_ID = "app-drawer"

export default function MainLayout() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <div className="drawer">
        <input id={DRAWER_ID} type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          <Navbar
            drawerId={DRAWER_ID}
            className="h-16 px-0 overflow-hidden"
            showBurger={true}
            logo={
              <a href="/" aria-label="Inicio — Mi App">
                <img
                  src="/imagenes/logo.png"
                  alt="Mi App"
                  className="h-16 w-auto block"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </a>
            }
          />

          <main className="container mx-auto p-6">
            <Outlet />
          </main>
        </div>

        <Sidebar drawerId={DRAWER_ID} theme={theme} setTheme={setTheme} />
      </div>
    </div>
  )
}
