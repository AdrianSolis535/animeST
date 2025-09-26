type LoginData = { email: string; password: string; remember: boolean }

type Props = {
  className?: string
  title?: string
  subtitle?: string
  onSubmit?: (data: LoginData) => void
  onForgotPassword?: () => void
}

export default function Login({
  className = "",
  title = "Iniciar sesión",
  subtitle = "Accede con tu correo y contraseña.",
  onSubmit,
  onForgotPassword,
}: Props) {
  return (
    <div className={`card bg-base-200 shadow-xl ${className}`}>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl">{title}</h2>
        <p className="opacity-70">{subtitle}</p>

        <form
          className="w-full max-w-md mt-4 text-left"
          onSubmit={(e) => {
            e.preventDefault()
            const fd = new FormData(e.currentTarget)
            const payload: LoginData = {
              email: String(fd.get("email") || ""),
              password: String(fd.get("password") || ""),
              remember: fd.get("remember") === "on",
            }
            onSubmit ? onSubmit(payload) : console.log("Login submit:", payload)
          }}
        >
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
                onClick={onForgotPassword ?? (() => console.log("Recuperar contraseña"))}
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          </div>

          <div className="form-control mt-2">
            <div className="flex items-center gap-3">
              <input id="remember" type="checkbox" name="remember" className="checkbox checkbox-primary" />
              <label htmlFor="remember" className="label cursor-pointer p-0">
                <span className="label-text">Recuérdame</span>
              </label>
            </div>
          </div>

          <div className="card-actions mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
