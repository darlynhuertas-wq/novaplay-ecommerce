import { Sparkles, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const enlaces = [
  { texto: 'Inicio', href: '#inicio' },
  { texto: 'Catálogo', href: '#catalogo' },
  { texto: 'Nuestra esencia', href: '#nosotros' },
]

// Logotipo reutilizable (también se usa en el Footer)
export function Logo({ pequeno = false }) {
  return (
    <a href="#inicio" className="inline-flex items-center gap-2.5 font-display font-extrabold tracking-tighter">
      <span
        className={`grid place-items-center rounded-xl bg-nova-lime text-nova-ink -rotate-8 ${
          pequeno ? 'size-8 text-lg' : 'size-10 text-2xl'
        }`}
      >
        ✣
      </span>
      <span className={pequeno ? 'text-xl' : 'text-2xl'}>
        NOVA<span className="text-nova-lime">PLAY</span>
        <span className="text-nova-lime">.</span>
      </span>
    </a>
  )
}

export default function Header() {
  return (
    <>
      {/* Barra de anuncio */}
      <div className="flex h-8 items-center justify-center gap-4 bg-nova-lime px-4 text-center text-[10px] font-extrabold tracking-[0.2em] text-nova-ink">
        EL UNIVERSO DE LOS JUEGOS DE MESA <span className="text-sm">✦</span>
        <span className="hidden sm:inline">TU PRÓXIMA AVENTURA EMPIEZA AQUÍ</span>
      </div>

      <header className="sticky top-0 z-40 border-b border-nova-line/60 bg-nova-ink/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-9 text-xs font-semibold text-nova-mute md:flex">
            {enlaces.map((enlace) => (
              <a key={enlace.href} href={enlace.href} className="transition-colors hover:text-white">
                {enlace.texto}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-2 text-[9px] font-extrabold tracking-[0.12em] text-nova-mute lg:flex">
              <Sparkles className="size-3.5 text-nova-lime" /> EDICIÓN 2026
            </span>
            <Button asChild className="h-11 rounded-lg px-5 text-xs font-extrabold">
              <a href="#catalogo">
                Explorar juegos <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}