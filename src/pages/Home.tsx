import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const DRAWER_ID = "app-drawer"

export default function Home() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div className="drawer min-h-screen bg-base-100 text-base-content">
      <input id={DRAWER_ID} type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <Navbar className="h-16 px-0 overflow-hidden" drawerId={DRAWER_ID} showBurger />
        <main className="container mx-auto p-6">
          <h1 className="text-2xl font-bold">Inicio</h1>
        </main>
      </div>

      <Sidebar drawerId={DRAWER_ID} theme={theme} setTheme={setTheme} />
    </div>
  )
}
