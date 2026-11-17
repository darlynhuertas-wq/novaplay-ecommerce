import { SearchX } from 'lucide-react'
import ProductCard from '@/components/ProductCard'

// Recibe una lista de productos y dibuja una ProductCard por cada uno.
export default function ProductList({ productos, onVerDetalle }) {
  if (productos.length === 0) {
    return (
      <div className="flex min-h-72 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-nova-line bg-nova-panel text-center">
        <SearchX className="size-8 text-nova-lime" />
        <strong className="font-display text-lg">No encontramos juegos</strong>
        <span className="max-w-sm text-xs text-nova-mute">Prueba con otra categoría o con otra búsqueda.</span>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
          imagen={producto.imagen}
          categoria={producto.categoria_nombre}
          stock={producto.stock}
          destacado={producto.destacado}
          nuevo={producto.nuevo}
          numero={producto.id}
          onVerDetalle={() => onVerDetalle(producto)}
        />
      ))}
    </div>
  )
}