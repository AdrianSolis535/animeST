import type { ReactNode } from "react"

interface NavbarProps {
  readonly drawerId: string
  readonly title?: string | ReactNode
  readonly logo?: ReactNode
  readonly right?: ReactNode
  readonly className?: string
  readonly showBurger?: boolean
}

export default function Navbar({
  drawerId,
  title,
  logo,
  right,
  className = "",
  showBurger = true,
}: Readonly<NavbarProps>) {
  return (
    <div className={`navbar bg-base-200 shadow ${className}`}>
      <div className="navbar-start">
        {showBurger && (
          <label
            htmlFor={drawerId}
            className="btn btn-ghost btn-square p-0"
            aria-label="Abrir menú lateral"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
        )}
      </div>

      <div className="navbar-center h-full flex items-center gap-2 overflow-hidden">
        {logo}
        {typeof title === "string" ? (
          <span className="text-lg font-semibold truncate">{title}</span>
        ) : (
          title
        )}
      </div>

      <div className="navbar-end gap-2">{right}</div>
    </div>
  )
}
