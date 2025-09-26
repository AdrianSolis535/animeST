// src/components/Navbar.tsx
import type { ReactNode } from "react"

type Props = {
  className?: string
  drawerId?: string
  showBurger?: boolean
  logo?: ReactNode
}

export default function Navbar({ className = "", logo }: Readonly<Props>) {
  // Ruta robusta para assets en /public
  const logoSrc = `${import.meta.env.BASE_URL}imagenes/logo.png`

  return (
    <header className={`navbar bg-base-200 ${className}`}>
      <div className="navbar-start" />
      <div className="navbar-center">
        {/* Si te pasan un logo por props lo usa; si no, muestra el de /public */}
        {logo ?? (
          <a href="/" aria-label="Inicio — Mi App">
            <img
              src={logoSrc}
              alt="Mi App"
              className="h-16 w-auto block"
              loading="eager"
              decoding="async"
              draggable={false}
            />
          </a>
        )}
      </div>
      <div className="navbar-end" />
    </header>
  )
}
