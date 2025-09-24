/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      {
        mydark: {
          /* Colores principales (ajusta a tu gusto) */
          primary: "#60a5fa",   // azul suave
          secondary: "#a78bfa", // violeta suave
          accent: "#f472b6",    // rosa suave
          neutral: "#374151",   // gray-700

          /* Bases en gris oscuro */
          "base-100": "#1f2937", // gray-800 (fondo principal)
          "base-200": "#111827", // gray-900 (tarjetas/barras)
          "base-300": "#0b0f19", // casi negro (bordes/sombras)
          "base-content": "#e5e7eb", // gray-200 (texto)

          /* Opcionales (alertas/estados) */
          info: "#38bdf8",
          success: "#22c55e",
          warning: "#fbbf24",
          error: "#ef4444",
        },
      },
    ],
  },
}
