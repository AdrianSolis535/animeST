// src/components/Navbar.tsx
import type { ReactNode } from "react"
import { Link } from "react-router-dom"

type Props = Readonly<{
  className?: string
  drawerId?: string
  showBurger?: boolean
  /** Logo opcional; si no lo pasas usa /public/imagenes/logo.png */
  logo?: ReactNode
  /** Ruta SPA a la que navega el logo */
  homeHref?: string
}>

export default function Navbar({
  className = "",
  drawerId = "app-drawer",
  showBurger = false,
  logo,
  homeHref = "/app",
}: Props) {
  const defaultLogo = (
    <Link to={homeHref} aria-label="Ir a inicio">
      <img
        src={`${import.meta.env.BASE_URL}imagenes/logo.png`}
        alt="Mi App"
        className="h-16 w-auto block"
        loading="eager"
        decoding="async"
        draggable={true}
      />
    </Link>
  )

  return (
    <header className={`navbar bg-base-200 ${className}`}>
      {/* Izquierda: hamburguesa opcional (usa input del drawer) */}
      <div className="navbar-start">
        {showBurger && (
          <label
            htmlFor={drawerId}
            className="btn btn-ghost btn-circle"
            aria-label="Abrir menú lateral"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </label>
        )}
      </div>

      {/* Centro: logo */}
      <div className="navbar-center">
        {logo ?? defaultLogo}
      </div>

      <div className="navbar-end" />
    </header>
  )
}
