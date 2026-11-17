import { useId } from 'react'

// Paletas de color para las portadas: [fondo 1, fondo 2, color principal, acento]
const PALETAS = [
  ['#332567', '#16113b', '#c9fb69', '#f286fe'],
  ['#151a30', '#39235c', '#ffbe7b', '#9a82ff'],
  ['#143c35', '#254c40', '#e4fc78', '#8fe3b8'],
  ['#402358', '#6c2e67', '#ffba77', '#8eecfd'],
  ['#222c43', '#12292c', '#d0ff62', '#62d3ff'],
  ['#522a3f', '#241a3e', '#feb5d8', '#f3ec8b'],
  ['#2a3940', '#0c2537', '#f2d681', '#93e2e2'],
  ['#143c57', '#0b1d38', '#9befff', '#bfa8fa'],
]

// Dibujo central según la categoría del juego
function Arte({ categoria, c1, c2 }) {
  const tipo = (categoria || '').toLowerCase()

  if (tipo.includes('familia')) {
    return (
      <g transform="translate(500 400)">
        <path d="M0 -260 C-210 -130 -190 70 0 190 C190 70 210 -130 0 -260Z" fill={c1} opacity=".9" />
        <path d="M0 -205 Q-30 0 0 168 M0 -30 Q-75 -95 -135 -93 M0 58 Q80 -5 138 -25"
          fill="none" stroke="#1d3b33" strokeWidth="13" strokeLinecap="round" />
        <circle cx="-205" cy="90" r="40" fill={c2} />
        <circle cx="221" cy="-88" r="18" fill="#fff" opacity=".8" />
      </g>
    )
  }

  if (tipo.includes('carta')) {
    return (
      <g transform="translate(500 395)">
        <g transform="rotate(-20)">
          <rect x="-180" y="-175" width="242" height="350" rx="20" fill={c1} />
          <circle cx="-58" cy="-45" r="75" fill={c2} />
          <path d="M-58 -125L-20 -42 -58 34 -95 -42z" fill="#fff" />
        </g>
        <g transform="rotate(22)">
          <rect x="-10" y="-175" width="242" height="350" rx="20" fill={c2} />
          <circle cx="111" cy="-15" r="85" fill={c1} />
          <path d="M111 -100L151 -15 111 70 71 -15z" fill="#fff" />
        </g>
      </g>
    )
  }

  if (tipo.includes('cooperativ')) {
    return (
      <g transform="translate(500 405)">
        <path d="M-275 170L-65 -220 60 10 145 -150 280 170Z" fill={c2} />
        <path d="M-275 170L-65 -220 60 10 145 -150 280 170Z" stroke={c1} strokeWidth="8" fill="none" />
        <path d="M-115 -125L-65 -220 8 -85 -40 -104 -66 -67Z M110 -92L145 -150 190 -65 152 -86Z" fill="#fff" />
        <circle cx="-215" cy="-167" r="33" fill={c1} />
      </g>
    )
  }

  // Estrategia y cualquier otra categoría: planeta con anillos
  return (
    <g transform="translate(520 385)">
      <ellipse rx="320" ry="112" fill="none" stroke={c1} strokeWidth="19" transform="rotate(-29)" opacity=".92" />
      <ellipse rx="259" ry="81" fill="none" stroke={c2} strokeWidth="4" transform="rotate(31)" />
      <circle r="172" fill={c2} opacity=".85" />
      <circle cx="-72" cy="-70" r="52" fill="#fff" opacity=".2" />
      <circle cx="180" cy="-100" r="17" fill={c1} />
      <circle cx="-312" cy="-85" r="11" fill="#fff" />
    </g>
  )
}

// Portada ilustrada que se usa cuando el producto no tiene imagen
export default function GameCover({ nombre, categoria, semilla = 0, marca = true, className = '' }) {
  const id = useId()
  const [bg1, bg2, c1, c2] = PALETAS[Math.abs(semilla) % PALETAS.length]

  return (
    <svg viewBox="0 0 1000 800" className={className} role="img" aria-label={`Portada de ${nombre}`}
      preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`${id}bg`} x1="0" x2="1" y1="0" y2="1">
          <stop stopColor={bg1} />
          <stop offset="1" stopColor={bg2} />
        </linearGradient>
        <pattern id={`${id}grid`} width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M50 0H0V50" fill="none" stroke="white" strokeOpacity=".09" />
        </pattern>
      </defs>
      <rect width="1000" height="800" fill={`url(#${id}bg)`} />
      <rect width="1000" height="800" fill={`url(#${id}grid)`} />
      <circle cx="860" cy="210" r="320" fill={c1} opacity=".055" />
      <Arte categoria={categoria} c1={c1} c2={c2} />
      {marca && (
        <>
          <text x="66" y="87" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="800" fill="#f5f5f8" letterSpacing="8">
            NOVA / PLAY
          </text>
          <path d="M66 107h870" stroke="#fff" strokeOpacity=".25" />
        </>
      )}
      <text x="66" y="700" fontFamily="Arial Black, Arial, sans-serif" fontSize="77" fontWeight="900" letterSpacing="-2" fill="#fff">
        {nombre?.toUpperCase()}
      </text>
      <path d="M66 740h870" stroke="#fff" strokeOpacity=".22" />
    </svg>
  )
}