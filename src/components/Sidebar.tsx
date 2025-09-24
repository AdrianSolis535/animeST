import type { Dispatch, SetStateAction } from "react"

interface SidebarProps {
  readonly drawerId?: string
  readonly theme: string
  readonly setTheme: Dispatch<SetStateAction<string>>
}

export default function Sidebar(props: Readonly<SidebarProps>) {
  const { drawerId = "app-drawer", theme, setTheme } = props

  return (
    <div className="drawer-side z-50">

      <label
        htmlFor={drawerId}
        className="drawer-overlay bg-black/40"
        aria-label="Cerrar menú lateral"
      />

      <aside className="min-h-full w-72 bg-base-100 p-6 shadow-2xl space-y-6">
        {/* Tema */}
        <div className="flex items-center justify-between">
          <span>Tema</span>
          <div className="flex items-center gap-2 select-none">
            {/* Sol */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 opacity-80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
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
              aria-label="Cambiar tema entre claro y gris oscuro"
            />

            {/* Luna */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 opacity-80"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-2 text-lg font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
          </svg>
          Categorías
        </div>
      </aside>
    </div>
  )
}
