import { useParams } from "react-router-dom"

export default function CategoriaDetalle() {
  const { slug } = useParams()
  return <div className="p-6">Categoría seleccionada: <strong>{slug}</strong></div>
}
