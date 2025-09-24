import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

const DRAWER_ID = "app-drawer"

export default function App() {
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
          {/* Navbar reutilizable: logo + título en el centro */}
          <Navbar
            drawerId={DRAWER_ID}
            className="h-16 px-0 overflow-hidden"
            showBurger={false}
            logo={
              // recomendado: que el logo lleve al inicio
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

          {/* Card con login */}
          <main className="container mx-auto p-6">
            <div className="card bg-base-200 shadow-xl max-w-2xl mx-auto">
              <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">Iniciar sesión</h2>
                <p className="opacity-70">Accede con tu correo y contraseña.</p>

                <form
                  className="w-full max-w-md mt-4 text-left"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const fd = new FormData(e.currentTarget)
                    const email = fd.get("email")
                    const password = fd.get("password")
                    const remember = fd.get("remember") === "on"
                    console.log({ email, password, remember })
                  }}
                >
                  {/* Email */}
                  <div className="form-control">
                    <label className="label" htmlFor="email">
                      <span className="label-text">Correo electrónico</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@correo.com"
                      className="input input-bordered w-full"
                      autoComplete="email"
                    />
                  </div>

                  {/* Password */}
                  <div className="form-control mt-3">
                    <label className="label" htmlFor="password">
                      <span className="label-text">Contraseña</span>
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      minLength={6}
                      placeholder="••••••••"
                      className="input input-bordered w-full"
                      autoComplete="current-password"
                    />
                    <div className="label">
                      <button
                        type="button"
                        className="label-text-alt link link-hover"
                        onClick={() => console.log("Abrir recuperación de contraseña")}
                      >
                        ¿Olvidaste tu contraseña?
                      </button>
                    </div>
                  </div>

                  {/* Remember me (asociación explícita) */}
                  <div className="form-control mt-2">
                    <div className="flex items-center gap-3">
                      <input id="remember" type="checkbox" name="remember" className="checkbox checkbox-primary" />
                      <label htmlFor="remember" className="label cursor-pointer p-0">
                        <span className="label-text">Recuérdame</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="card-actions mt-4">
                    <button type="submit" className="btn btn-primary w-full">
                      Entrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>

        {/* Sidebar separado */}
        <Sidebar drawerId={DRAWER_ID} theme={theme} setTheme={setTheme} />
      </div>
    </div>
  )
}
