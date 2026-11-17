import { useState } from 'react'
import { ArrowUpRight, CircleDot } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import GameCover from '@/components/GameCover'

// Tarjeta de un producto. Toda la información llega por props.
export default function ProductCard({
  id,
  nombre,
  descripcion,
  precio,
  imagen,
  categoria,
  stock,
  destacado = false,
  nuevo = false,
  numero,
  onVerDetalle,
}) {
  const [imagenRota, setImagenRota] = useState(false)
  const usarPortada = !imagen || imagenRota
  const agotado = stock === 0

  return (
    <Card className="group gap-0 overflow-hidden rounded-2xl border-nova-line bg-nova-panel py-0 transition duration-300 hover:-translate-y-1.5 hover:border-nova-lime/50 hover:shadow-2xl hover:shadow-black/50">
      {/* Imagen */}
      <div className="relative aspect-[5/4] overflow-hidden bg-muted">
        {usarPortada ? (
          <GameCover
            nombre={nombre}
            categoria={categoria}
            semilla={id}
            marca={false}
            className="size-full transition duration-500 group-hover:scale-105"
          />
        ) : (
          <img
            src={imagen}
            alt={nombre}
            onError={() => setImagenRota(true)}
            className="size-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}

        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {nuevo && <Badge className="rounded-md text-[9px] font-extrabold tracking-wider">NUEVO</Badge>}
          {destacado && (
            <Badge variant="outline" className="rounded-md border-white/40 bg-black/40 text-[9px] font-extrabold tracking-wider text-white backdrop-blur">
              DESTACADO
            </Badge>
          )}
        </div>
        {numero && (
          <span className="absolute bottom-3 right-3 text-[10px] tracking-widest text-white/60">
            NO. {String(numero).padStart(2, '0')}
          </span>
        )}
      </div>

      {/* Información */}
      <CardContent className="flex flex-1 flex-col px-5 pt-5">
        <p className="flex items-center gap-2 text-[9px] font-extrabold tracking-[0.13em] text-nova-lime uppercase">
          {categoria} <span className="text-nova-mute/50">✦</span> Edición Nova
        </p>
        <h3 className="mt-2.5 mb-2 font-display text-2xl font-semibold tracking-tight">{nombre}</h3>
        <p className="line-clamp-3 min-h-[3.6rem] text-xs leading-relaxed text-nova-mute">{descripcion}</p>
      </CardContent>

      {/* Precio y acción */}
      <CardFooter className="mx-5 mt-4 flex-col items-stretch border-t border-nova-line px-0 pt-4 pb-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[9px] font-extrabold tracking-[0.12em] text-nova-mute">DESDE</span>
            <strong className="font-display text-xl">S/ {Number(precio).toFixed(2)}</strong>
          </div>
          <Button
            size="icon"
            variant="outline"
            aria-label={`Ver detalle de ${nombre}`}
            onClick={onVerDetalle}
            className="size-10 rounded-xl border-[#454956] bg-[#262b39] hover:border-nova-lime hover:bg-nova-lime hover:text-nova-ink"
          >
            <ArrowUpRight />
          </Button>
        </div>
        <p className={`mt-3 flex items-center gap-1.5 text-[11px] ${agotado ? 'text-destructive' : 'text-nova-mute'}`}>
          <CircleDot className={`size-3 ${agotado ? '' : 'text-nova-lime'}`} />
          {agotado ? 'Agotado por ahora' : `${stock} disponibles`}
        </p>
      </CardFooter>
    </Card>
  )
}