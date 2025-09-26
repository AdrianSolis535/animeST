export const GENEROS = [
  "Acción",
  "Comedia",
  "Romance",
  "Drama",
  "Fantasía",
  "Ciencia ficción",
  "Terror",
]

export const ESTADOS = [
  "Finalizados",
  "En emision",
  "Proximamente",
]

export const CATEGORIAS = [
  "Shōnen",
  "Shōjo",
  "Seinen",
  "Josei",
  "Kodomo",
]

export function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
}
