// Datos SIMULADOS (Ejercicio 03). En el Ejercicio 05 se reemplazan por la API de Django.
export const categorias = [
  { id: 1, nombre: 'Estrategia' },
  { id: 2, nombre: 'Familia' },
  { id: 3, nombre: 'Cartas' },
  { id: 4, nombre: 'Cooperativos' },
]

export const productos = [
  { id: 1, nombre: 'Órbita', descripcion: 'Conquista galaxias, negocia alianzas y domina nuevas rutas estelares.', precio: '119.90', imagen: '', stock: 12, categoria: 1, categoria_nombre: 'Estrategia', destacado: true, nuevo: true },
  { id: 2, nombre: 'Eclipse', descripcion: 'Cada turno cuenta en una batalla estratégica entre luz y sombras.', precio: '139.90', imagen: '', stock: 8, categoria: 1, categoria_nombre: 'Estrategia', destacado: true, nuevo: false },
  { id: 3, nombre: 'Bosque Vivo', descripcion: 'Una aventura colorida para explorar la naturaleza en familia.', precio: '79.90', imagen: '', stock: 19, categoria: 2, categoria_nombre: 'Familia', destacado: false, nuevo: true },
  { id: 4, nombre: 'Pixel Quest', descripcion: 'Misiones, criaturas y un universo retro para todos los niveles.', precio: '89.90', imagen: '', stock: 15, categoria: 2, categoria_nombre: 'Familia', destacado: false, nuevo: false },
  { id: 5, nombre: 'Código 7', descripcion: 'Descifra pistas, descubre patrones y sorprende a tus rivales.', precio: '49.90', imagen: '', stock: 26, categoria: 3, categoria_nombre: 'Cartas', destacado: false, nuevo: true },
  { id: 6, nombre: 'Aura', descripcion: 'Partidas rápidas de táctica y combinaciones sorprendentes.', precio: '59.90', imagen: '', stock: 22, categoria: 3, categoria_nombre: 'Cartas', destacado: false, nuevo: false },
  { id: 7, nombre: 'Expedición X', descripcion: 'Trabajen en equipo y sobrevivan a una expedición impredecible.', precio: '109.90', imagen: '', stock: 10, categoria: 4, categoria_nombre: 'Cooperativos', destacado: true, nuevo: false },
  { id: 8, nombre: 'Atlántida', descripcion: 'Resuelvan juntos los enigmas de una ciudad sumergida.', precio: '129.90', imagen: '', stock: 0, categoria: 4, categoria_nombre: 'Cooperativos', destacado: false, nuevo: false },
]