import { useParams } from "react-router-dom"

export default function EstadoDetalle() {
  const { slug } = useParams()
  return <div className="p-6">Estado seleccionado: <strong>{slug}</strong></div>
}
