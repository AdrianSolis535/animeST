import { useNavigate } from "react-router-dom"
import Login from "../components/Login";

type LoginData = { email: string; password: string; remember: boolean }

export default function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = (data: LoginData) => {
    console.log("Login OK:", data)
    navigate("/app")
  }

  return (
    <Login
      className="max-w-2xl mx-auto"
      onSubmit={handleSubmit}
      onForgotPassword={() => navigate("/auth/recover")}
    />
  )
}
