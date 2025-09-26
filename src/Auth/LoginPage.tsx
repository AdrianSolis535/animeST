import { useNavigate } from "react-router-dom"
import Login from "../components/Login"

type LoginData = { email: string; password: string; remember: boolean }

export default function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = async (data: LoginData) => {
    // Aquí llamas a tu API
    // const res = await authService.login(data)
    // if (res.ok) navigate("/")
    console.log("Enviando login:", data)
    navigate("/") // demo
  }

  return (
    <Login
      className="max-w-2xl mx-auto"
      title="Bienvenido de vuelta"
      subtitle="Ingresa tus credenciales para continuar."
      onSubmit={handleSubmit}
      onForgotPassword={() => navigate("/auth/recover")}
    />
  )
}
