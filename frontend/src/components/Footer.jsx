import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/Header'

export default function Footer() {
  return (
    <>
      {/* Banner de cierre */}
      <section className="relative mx-5 mb-24 overflow-hidden rounded-3xl bg-nova-lime px-8 py-14 text-nova-ink lg:mx-8 lg:px-16">
        <span className="pointer-events-none absolute -top-36 right-[6%] rotate-12 text-[380px] leading-none font-extrabold text-[#a0ce4f]">
          ✳
        </span>
        <p className="relative text-[10px] font-extrabold tracking-[0.18em]">LISTOS PARA LA PRÓXIMA PARTIDA</p>
        <h2 className="relative mt-4 mb-7 font-display text-[clamp(2rem,4vw,3.6rem)] leading-tight font-bold tracking-tighter">
          Hay un universo esperando
          <br />a que lo descubras.
        </h2>
        <Button asChild className="relative h-12 rounded-lg border border-nova-ink bg-transparent px-6 text-xs font-extrabold text-nova-ink hover:bg-nova-ink hover:text-white">
          <a href="#catalogo">
            Volver a los juegos <ArrowUpRight />
          </a>
        </Button>
      </section>

      <footer id="nosotros" className="border-t border-nova-line bg-nova-night">
        <div className="mx-auto max-w-7xl px-5 pt-20 pb-8 lg:px-8">
          <div className="flex items-end justify-between gap-6 pb-16">
            <div>
              <p className="text-[10px] font-extrabold tracking-[0.17em] text-nova-lime">JUGAR ES EXPLORAR</p>
              <h2 className="mt-3 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-none font-bold tracking-tighter">
                Crea historias.
                <br />
                <em className="text-nova-lime not-italic">Juega diferente.</em>
              </h2>
            </div>
            <a href="#inicio" aria-label="Volver arriba"
              className="grid size-14 shrink-0 place-items-center rounded-full border border-[#515461] hover:bg-nova-lime hover:text-nova-ink">
              <ArrowUp />
            </a>
          </div>
          <div className="flex flex-col gap-4 border-t border-nova-line pt-8 text-[10px] font-extrabold tracking-wider text-nova-mute sm:flex-row sm:items-center sm:justify-between">
            <Logo pequeno />
            <span>CATÁLOGO DEMOSTRATIVO · PROYECTO ACADÉMICO</span>
            <span>© 2026 NOVA PLAY</span>
          </div>
        </div>
      </footer>
    </>
  )
}