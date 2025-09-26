import type { Dispatch, SetStateAction } from "react"
import { Link } from "react-router-dom"
import { GENEROS, ESTADOS, CATEGORIAS, slugify } from "../config/catalogs"

interface SidebarProps {
  readonly drawerId?: string
  readonly theme: string
  readonly setTheme: Dispatch<SetStateAction<string>>
  readonly homeHref?: string
}

export default function Sidebar({
  drawerId = "app-drawer",
  theme,
  setTheme,
  homeHref = "/app", // misma ruta que usa el logo del Navbar
}: Readonly<SidebarProps>) {
  const logoSrc = `${import.meta.env.BASE_URL}imagenes/logo.png`

  return (
    <div className="drawer-side z-50">
      <label htmlFor={drawerId} className="drawer-overlay bg-black/40" aria-label="Cerrar menú lateral" />

      <aside className="min-h-full w-72 bg-base-100 p-4 shadow-2xl flex flex-col">
        {/* LOGO (igual que en Navbar) */}
        <div className="mb-3">
          <Link to={homeHref} aria-label="Ir a inicio">
            <img
              src={logoSrc}
              alt="Mi App"
              className="h-16 w-auto block"
              loading="eager"
              decoding="async"
              draggable={false}
            />
          </Link>
        </div>

        {/* Menú */}
        <ul className="menu gap-1">
          <li>
            <Link to="/app">
              {/* icono Home */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 9.5l9-7 9 7" /><path d="M9 22V12h6v10" />
              </svg>
              Inicio
            </Link>
          </li>

          <li>
            <details>
              <summary>Géneros</summary>
              <ul>
                {GENEROS.map(g => (
                  <li key={g}><Link to={`/generos/${slugify(g)}`}>{g}</Link></li>
                ))}
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>Estado</summary>
              <ul>
                {ESTADOS.map(e => (
                  <li key={e}><Link to={`/estado/${slugify(e)}`}>{e}</Link></li>
                ))}
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>Categorías</summary>
              <ul>
                {CATEGORIAS.map(c => (
                  <li key={c}><Link to={`/categorias/${slugify(c)}`}>{c}</Link></li>
                ))}
              </ul>
            </details>
          </li>

          {/* Cerrar sesión (lo dejo como estaba) */}
          <li>
            <Link to="/auth/login">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Cerrar sesión
            </Link>
          </li>
        </ul>

        {/* Tema al fondo */}
        <div className="mt-auto pt-4 border-t border-base-300">
          <div className="flex items-center justify-between">
            <span className="text-sm">Tema</span>
            <div className="flex items-center gap-2 select-none">
              {/* sol */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-80"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>

              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={theme === "mydark"}
                onChange={() => setTheme(t => (t === "mydark" ? "light" : "mydark"))}
                role="switch"
                aria-checked={theme === "mydark"}
                aria-label="Cambiar tema"
              />

              {/* luna */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-80"
                viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
