import { useParams } from "react-router-dom"

export default function GeneroDetalle() {
  const { slug } = useParams()
  return <div className="p-6">Género seleccionado: <strong>{slug}</strong></div>
}
