export interface AvatarProps {
  skin: string
  hair: string
  style: 'long' | 'short' | 'bun' | 'curly'
  glasses?: boolean
  hearing?: boolean
  bg?: string
}

/** Illustrated, diverse avatar (decorative: always paired with a visible name). */
export function Avatar({ skin, hair, style, glasses, hearing, bg = '#EDE5FF', size = 56 }: AvatarProps & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" focusable="false" className="shrink-0 rounded-full">
      <circle cx="50" cy="50" r="50" fill={bg} />
      {style === 'long' && <path d="M22 50c0-22 12-34 28-34s28 12 28 34v32H22z" fill={hair} />}
      {style === 'curly' && (
        <g fill={hair}>
          {[[30, 32], [42, 22], [58, 22], [70, 32], [25, 48], [75, 48], [27, 64], [73, 64]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="13" />)}
        </g>
      )}
      {style === 'bun' && <circle cx="50" cy="16" r="11" fill={hair} />}
      <path d="M18 100c2-18 15-26 32-26s30 8 32 26z" fill="#7B4FD8" />
      <path d="M42 70h16v10a8 8 0 0 1-16 0z" fill={skin} />
      <ellipse cx="50" cy="50" rx="20" ry="23" fill={skin} />
      {(style === 'short' || style === 'bun' || style === 'long') && (
        <path d={style === 'short' ? 'M28 50c-2-20 9-30 22-30s25 9 22 30c-4-9-12-14-22-14s-18 4-22 14z' : 'M30 46c0-15 9-22 20-22s20 7 20 22c-5-8-12-11-20-11s-15 3-20 11z'} fill={hair} />
      )}
      {style === 'curly' && <path d="M30 46c0-15 9-22 20-22s20 7 20 22c-6-7-12-9-20-9s-14 2-20 9z" fill={hair} />}
      <path d="M41 52q2.5-3 5 0M54 52q2.5-3 5 0" stroke="#2A1B3D" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M43 61q7 6 14 0" stroke="#2A1B3D" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="38" cy="58" r="3" fill="#F49AC1" opacity=".55" />
      <circle cx="62" cy="58" r="3" fill="#F49AC1" opacity=".55" />
      {glasses && (
        <g stroke="#4C2A9E" strokeWidth="2" fill="none">
          <circle cx="43.5" cy="52" r="6" /><circle cx="56.5" cy="52" r="6" /><path d="M49.5 52h1" />
        </g>
      )}
      {hearing && <path d="M70 46c4 0 5 4 4 7s-3 4-3 6" stroke="#2F9BDA" strokeWidth="3.5" fill="none" strokeLinecap="round" />}
    </svg>
  )
}
