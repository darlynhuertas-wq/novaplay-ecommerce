import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import GameCover from '@/components/GameCover'

// Ventana (modal de shadcn/ui) con el detalle del producto seleccionado
export default function ProductDetail({ producto, onCerrar }) {
  return (
    <Dialog open={producto !== null} onOpenChange={(abierto) => !abierto && onCerrar()}>
      <DialogContent className="grid max-h-[90vh] gap-0 overflow-y-auto rounded-3xl border-[#454b61] bg-[#1b2030] p-0 sm:max-w-3xl md:grid-cols-[43%_57%]">
        {producto && (
          <>
            <div className="flex items-center bg-[#151a30]">
              {producto.imagen ? (
                <img src={producto.imagen} alt={producto.nombre} className="h-56 w-full object-cover md:h-full" />
              ) : (
                <GameCover
                  nombre={producto.nombre}
                  categoria={producto.categoria_nombre}
                  semilla={producto.id}
                  className="h-auto w-full"
                />
              )}
            </div>
            <div className="p-7 md:p-9">
              <Badge variant="outline" className="border-nova-lime/40 text-[10px] tracking-widest text-nova-lime uppercase">
                {producto.categoria_nombre}
              </Badge>
              <DialogTitle className="mt-4 font-display text-4xl font-bold tracking-tighter">
                {producto.nombre}
              </DialogTitle>
              <DialogDescription className="mt-3 text-sm leading-7 text-nova-mute">
                {producto.descripcion}
              </DialogDescription>
              <strong className="mt-6 block font-display text-3xl text-nova-lime">
                S/ {Number(producto.precio).toFixed(2)}
              </strong>
              <p className="mt-2 text-xs text-nova-mute">
                {producto.stock > 0 ? `${producto.stock} unidades disponibles` : 'Sin stock por el momento'}
              </p>
              <p className="mt-6 text-[10px] text-nova-mute/70">
                El carrito de compras se implementará en el siguiente laboratorio.
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}