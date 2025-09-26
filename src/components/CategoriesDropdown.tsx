import { useRef } from "react"
import { Link } from "react-router-dom"
import { GENEROS, ESTADOS, CATEGORIAS, slugify } from "../config/catalogs"

export default function CategoriesDropdown() {
  const rootRef = useRef<HTMLDetailsElement>(null)
  const close = () => rootRef.current?.removeAttribute("open")

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {

      e.preventDefault()
      close()
    }
  }

  return (
    <details ref={rootRef} className="dropdown dropdown-end">
      <summary className="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
        Categorías
      </summary>

      <ul className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-64">
        <li>
          <details>
            <summary>Géneros</summary>
            <ul>
              {GENEROS.map((g) => (
                <li key={g}>
                  <Link
                    to={`/generos/${slugify(g)}`}
                    onClick={close}
                    onKeyDown={handleKeyDown}
                  >
                    {g}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Estado</summary>
            <ul>
              {ESTADOS.map((e) => (
                <li key={e}>
                  <Link
                    to={`/estado/${slugify(e)}`}
                    onClick={close}
                    onKeyDown={handleKeyDown}
                  >
                    {e}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Categorías</summary>
            <ul>
              {CATEGORIAS.map((c) => (
                <li key={c}>
                  <Link
                    to={`/categorias/${slugify(c)}`}
                    onClick={close}
                    onKeyDown={handleKeyDown}
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
    </details>
  )
}
