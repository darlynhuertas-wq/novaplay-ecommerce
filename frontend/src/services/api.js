// Servicio que centraliza todas las peticiones HTTP al backend Django
const API_URL = import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:8000/api'

async function pedir(ruta) {
  let respuesta
  try {
    respuesta = await fetch(`${API_URL}${ruta}`)
  } catch {
    throw new Error('No se pudo conectar con el servidor')
  }
  if (!respuesta.ok) {
    throw new Error(`El servidor respondió con el código ${respuesta.status}`)
  }
  return respuesta.json()
}

// GET /api/productos/   o   GET /api/productos/?categoria=<id>
export function obtenerProductos(categoriaId = null) {
  const filtro = categoriaId ? `?categoria=${categoriaId}` : ''
  return pedir(`/productos/${filtro}`)
}

// GET /api/categorias/
export function obtenerCategorias() {
  return pedir('/categorias/')
}