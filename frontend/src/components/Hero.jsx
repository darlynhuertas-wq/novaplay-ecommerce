import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import GameCover from '@/components/GameCover'

const frases = ['DISEÑADO PARA JUGAR', 'HECHO PARA COMPARTIR', 'NUEVAS AVENTURAS', 'ESTRATEGIA · FAMILIA · CARTAS']

export default function Hero() {
  return (
    <>
      <section id="inicio" className="relative overflow-hidden border-b border-nova-line">
        {/* Fondo decorativo */}
        <div className="bg-dots absolute inset-0 opacity-[0.085] [mask-image:linear-gradient(to_right,transparent,#000_56%)]" />
        <div className="pointer-events-none absolute -right-10 top-10 size-[460px] rounded-full bg-nova-violet opacity-40 blur-[80px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          {/* Texto principal */}
          <div>
            <p className="flex items-center gap-3 text-[10px] font-extrabold tracking-[0.2em] text-nova-lime">
              <span className="h-px w-8 bg-nova-lime" /> MÁS QUE JUEGOS. EXPERIENCIAS.
            </p>
            <h1 className="mt-7 mb-6 font-display text-[clamp(3rem,7vw,6rem)] leading-[1.05] font-bold tracking-tighter">
              Tu mundo.
              <br />
              Tus reglas.
              <br />
              <span className="text-nova-lime">Tu partida</span>.
            </h1>
            <p className="max-w-md text-[15px] leading-8 text-nova-mute">
              Explora universos extraordinarios, reúne a tu equipo y convierte cualquier noche en una historia para
              contar.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button asChild size="lg" className="h-12 rounded-lg px-6 text-xs font-extrabold">
                <a href="#catalogo">
                  Descubrir juegos <ArrowUpRight />
                </a>
              </Button>
              <a href="#nosotros" className="inline-flex items-center gap-3 text-xs font-extrabold hover:text-nova-lime">
                Conoce NOVA <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Portadas flotantes */}
          <div className="relative mx-auto h-[340px] w-full max-w-[560px] sm:h-[460px]">
            <div className="absolute left-[18%] top-[15%] size-[320px] rounded-full bg-[radial-gradient(circle,#8a9e42_0%,#353958_35%,transparent_69%)] opacity-45 blur-[32px]" />
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[420px] -translate-x-1/2 -translate-y-1/2 -rotate-[18deg] rounded-full border border-white/15" />
            <div className="absolute left-[40%] top-[6%] aspect-[5/4] w-[58%] animate-float-back overflow-hidden rounded-2xl border border-white/25 shadow-2xl shadow-black/60">
              <GameCover nombre="Eclipse" categoria="Estrategia" semilla={1} className="size-full" />
            </div>
            <div className="absolute left-[4%] top-[26%] aspect-[5/4] w-[58%] animate-float-front overflow-hidden rounded-2xl border border-white/25 shadow-2xl shadow-black/60">
              <GameCover nombre="Órbita" categoria="Estrategia" semilla={0} className="size-full" />
            </div>
            <span className="absolute right-0 top-[12%] rounded-full border border-white/20 bg-[#151925dd] px-4 py-3 text-[9px] font-extrabold tracking-widest backdrop-blur-md">
              ✦ UNIVERSOS POR DESCUBRIR
            </span>
            <span className="absolute bottom-[2%] right-[8%] flex items-center gap-2 rounded-full border border-white/20 bg-[#151925dd] px-4 py-3 text-[9px] font-extrabold tracking-widest backdrop-blur-md">
              <span className="size-2 rounded-full bg-nova-lime shadow-[0_0_0_4px_#cefa6527]" /> ELIGE TU PRÓXIMO JUEGO
            </span>
          </div>
        </div>
      </section>

      {/* Cinta animada */}
      <div className="relative z-10 flex h-16 -rotate-[1.2deg] scale-[1.03] items-center overflow-hidden bg-nova-lime text-nova-ink">
        <div className="flex min-w-max animate-marquee font-display text-lg font-bold tracking-[0.12em]">
          {[...frases, ...frases].map((frase, i) => (
            <span key={i} className="px-8">
              {frase} <span className="pl-8">✳</span>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}