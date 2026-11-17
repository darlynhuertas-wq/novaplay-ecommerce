import { CircleAlert, RotateCw } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

// Mensaje mientras se cargan los productos: tarjetas "esqueleto"
export function CargandoProductos() {
  return (
    <div>
      <p className="mb-4 flex items-center gap-2 text-xs text-nova-mute">
        <RotateCw className="size-4 animate-spin text-nova-lime" /> Cargando juegos desde el servidor...
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-nova-line bg-nova-panel">
            <Skeleton className="aspect-[5/4] rounded-none bg-[#232637]" />
            <div className="space-y-3 p-5">
              <Skeleton className="h-3 w-24 bg-[#232637]" />
              <Skeleton className="h-6 w-36 bg-[#232637]" />
              <Skeleton className="h-10 w-full bg-[#232637]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Mensaje cuando la API falla (por ejemplo, si Django está apagado)
export function ErrorCarga({ mensaje, onReintentar }) {
  return (
    <Alert variant="destructive" className="rounded-2xl border-destructive/40 bg-nova-panel p-6">
      <CircleAlert />
      <AlertTitle className="font-display text-base">No pudimos cargar el catálogo</AlertTitle>
      <AlertDescription>
        <p>{mensaje}. Verifica que el servidor de Django esté encendido en el puerto 8000.</p>
        <Button onClick={onReintentar} variant="outline" className="mt-3 rounded-full border-nova-line bg-transparent text-foreground">
          <RotateCw /> Reintentar
        </Button>
      </AlertDescription>
    </Alert>
  )
}