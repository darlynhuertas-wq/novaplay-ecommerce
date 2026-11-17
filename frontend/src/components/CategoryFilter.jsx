import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Muestra las categorías como "pastillas". Cuando el usuario hace clic,
// avisa al componente padre mediante la función onSeleccionar (evento).
export default function CategoryFilter({ categorias, categoriaActiva, onSeleccionar }) {
  const opciones = [{ id: null, nombre: 'Todos los juegos ✦' }, ...categorias]

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
      {opciones.map((categoria) => {
        const activa = categoria.id === categoriaActiva
        return (
          <Button
            key={categoria.id ?? 'todas'}
            variant="outline"
            onClick={() => onSeleccionar(categoria.id)}
            className={cn(
              'h-10 shrink-0 rounded-full border-nova-line bg-[#171a24] px-5 text-[11px] font-bold text-nova-mute hover:border-nova-lime hover:bg-[#171a24] hover:text-white',
              activa && 'border-nova-lime bg-nova-lime text-nova-ink hover:bg-nova-lime hover:text-nova-ink'
            )}
          >
            {categoria.nombre}
            {categoria.total_productos !== undefined && (
              <span className={cn('text-[10px]', activa ? 'text-nova-ink/60' : 'text-nova-mute/60')}>
                {categoria.total_productos}
              </span>
            )}
          </Button>
        )
      })}
    </div>
  )
}