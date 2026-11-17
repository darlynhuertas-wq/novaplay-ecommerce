import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import CategoryFilter from '@/components/CategoryFilter'
import ProductList from '@/components/ProductList'
import ProductDetail from '@/components/ProductDetail'
import { CargandoProductos, ErrorCarga } from '@/components/StatusMessage'
import { obtenerCategorias, obtenerProductos } from '@/services/api'

// VERSIÓN EJERCICIO 05: los datos llegan desde Django REST Framework
export default function CatalogPage() {
  const [categorias, setCategorias] = useState([])
  const [productos, setProductos] = useState([])
  const [categoriaActiva, setCategoriaActiva] = useState(null) // null = todas
  const [busqueda, setBusqueda] = useState('')
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [intento, setIntento] = useState(0) // sirve para el botón "Reintentar"

  // 1) Consultar las categorías al cargar la página
  useEffect(() => {
    obtenerCategorias()
      .then(setCategorias)
      .catch((e) => setError(e.message))
  }, [intento])

  // 2) Consultar los productos cada vez que cambia la categoría seleccionada
  useEffect(() => {
    let cancelado = false
    setCargando(true)
    setError(null)

    obtenerProductos(categoriaActiva)
      .then((datos) => !cancelado && setProductos(datos))
      .catch((e) => !cancelado && setError(e.message))
      .finally(() => !cancelado && setCargando(false))

    return () => {
      cancelado = true
    }
  }, [categoriaActiva, intento])

  // Búsqueda por nombre (se hace en el navegador)
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )
  const totalCatalogo = categorias.reduce((suma, c) => suma + c.total_productos, 0)

  return (
    <section id="catalogo" className="mx-auto max-w-7xl scroll-mt-24 px-5 pt-28 pb-32 lg:px-8">
      {/* Encabezado */}
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="flex items-center gap-2.5 text-[10px] font-extrabold tracking-[0.17em] text-nova-lime">
            <span className="size-2 rounded-full bg-nova-lime" /> TU PRÓXIMA OBSESIÓN
          </p>
          <h2 className="mt-3 mb-3 font-display text-[clamp(2.3rem,4.3vw,3.8rem)] font-bold tracking-tighter">
            Explora la <em className="text-nova-lime not-italic">colección.</em>
          </h2>
          <p className="text-sm text-nova-mute">Una selección de experiencias para cada tipo de jugador.</p>
        </div>
        <div className="hidden items-center gap-3 pb-1 sm:flex">
          <strong className="font-display text-6xl font-semibold text-nova-lime">
            {String(totalCatalogo).padStart(2, '0')}
          </strong>
          <span className="text-[10px] leading-relaxed font-bold tracking-widest text-nova-mute">
            JUEGOS EN EL
            <br />
            CATÁLOGO
          </span>
        </div>
      </div>

      {/* Barra de filtros */}
      <div className="mt-10 flex flex-col gap-4 border-t border-nova-line pt-6 md:flex-row md:items-center md:justify-between">
        <CategoryFilter
          categorias={categorias}
          categoriaActiva={categoriaActiva}
          onSeleccionar={setCategoriaActiva}
        />
        <label className="relative w-full md:w-60">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-nova-mute" />
          <Input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar juegos..."
            className="h-10 rounded-full border-nova-line bg-[#171a24] pl-9 text-xs"
          />
        </label>
      </div>

      <div className="mt-8 mb-5 flex justify-between text-[10px] font-bold tracking-[0.13em] text-nova-mute">
        <span>
          <b className="text-nova-lime">{cargando ? '–' : productosFiltrados.length}</b> RESULTADOS ENCONTRADOS
        </span>
        <span className="hidden sm:inline">DATOS EN VIVO · DJANGO REST</span>
      </div>

      {/* Estados: cargando / error / lista */}
      {cargando && <CargandoProductos />}
      {!cargando && error && <ErrorCarga mensaje={error} onReintentar={() => setIntento(intento + 1)} />}
      {!cargando && !error && (
        <ProductList productos={productosFiltrados} onVerDetalle={setProductoSeleccionado} />
      )}

      <ProductDetail producto={productoSeleccionado} onCerrar={() => setProductoSeleccionado(null)} />
    </section>
  )
}