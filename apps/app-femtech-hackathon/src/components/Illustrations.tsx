/** Hero illustration: young woman using a wheelchair, working on a laptop. */
export function HeroIllustration({ label = 'Ilustración: una chica en silla de ruedas sonríe mientras usa su ordenador portátil', className = '' }: { label?: string; className?: string }) {
  return (
    <svg viewBox="0 0 320 300" role="img" aria-label={label} className={className}>
      <defs>
        <linearGradient id="hoodie" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#A98BF0" /><stop offset="1" stopColor="#7B4FD8" />
        </linearGradient>
      </defs>
      <ellipse cx="160" cy="170" rx="150" ry="120" fill="#EDE5FF" />
      <ellipse cx="160" cy="292" rx="120" ry="8" fill="#D9CBFA" />
      {/* decorative */}
      <g className="float" fill="none" stroke="#9B7BEA" strokeWidth="6" strokeLinecap="round">
        <path d="M40 92a30 30 0 0 1 40 0" /><path d="M50 104a16 16 0 0 1 20 0" />
        <path d="M262 130a30 30 0 0 1 40 0" /><path d="M272 142a16 16 0 0 1 20 0" />
      </g>
      <g fill="#F7C948">
        <path d="M272 52l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" />
        <path d="M54 180l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
      </g>
      <g transform="translate(236 40) rotate(40)" className="float">
        <path d="M0 0c10-14 26-14 0-40-26 26-10 26 0 40z" fill="#7B4FD8" />
        <circle cx="0" cy="-22" r="5" fill="#DFF1FF" />
        <path d="M-6 4l6 12 6-12z" fill="#FF9AC5" />
      </g>
      {/* hair behind */}
      <path d="M112 96c0-34 18-52 42-52s42 18 42 50c0 30-6 48-10 60h-66c-6-14-8-34-8-58z" fill="#5A3420" />
      {/* wheelchair back */}
      <path d="M112 128v84" stroke="#4C2A9E" strokeWidth="8" strokeLinecap="round" />
      {/* torso */}
      <path d="M118 132c8-10 22-14 36-14s28 4 36 14l6 74h-86z" fill="url(#hoodie)" />
      <path d="M144 120l10 14 10-14" fill="none" stroke="#5E36B8" strokeWidth="3" />
      {/* legs */}
      <path d="M128 206h82l14 60" stroke="#3B3F8F" strokeWidth="28" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M216 270h22" stroke="#2A1B3D" strokeWidth="12" strokeLinecap="round" />
      {/* wheelchair frame + wheels */}
      <path d="M112 212h102l20 52" stroke="#4C2A9E" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="140" cy="240" r="48" fill="none" stroke="#4C2A9E" strokeWidth="7" />
      <circle cx="140" cy="240" r="38" fill="none" stroke="#9B7BEA" strokeWidth="3" />
      <g stroke="#9B7BEA" strokeWidth="2.5">
        <path d="M140 202v76M102 240h76M113 213l54 54M167 213l-54 54" />
      </g>
      <circle cx="140" cy="240" r="7" fill="#4C2A9E" />
      <circle cx="240" cy="276" r="12" fill="none" stroke="#4C2A9E" strokeWidth="6" />
      {/* laptop */}
      <path d="M176 134h62l-10 62h-62z" fill="#C8B6F5" />
      <path d="M210 158c-4-6-12-2-8 5l8 8 8-8c4-7-4-11-8-5z" fill="#FF8DBE" />
      <path d="M160 196h76v8h-76z" fill="#A58BE8" />
      {/* arms */}
      <path d="M124 142c-6 30 4 52 44 54" stroke="#8A63E0" strokeWidth="20" fill="none" strokeLinecap="round" />
      <circle cx="172" cy="194" r="9" fill="#E3A982" />
      <path d="M186 138c8 22 4 40-4 54" stroke="#9673E6" strokeWidth="18" fill="none" strokeLinecap="round" />
      <circle cx="181" cy="194" r="8" fill="#E3A982" />
      {/* head */}
      <path d="M144 106h20v18h-20z" fill="#D9976E" />
      <circle cx="154" cy="86" r="32" fill="#E8B08A" />
      <path d="M120 84c2-26 18-38 36-38s32 12 32 34c-12-4-28-14-36-26-6 14-18 24-32 30z" fill="#5A3420" />
      <path d="M140 90q5-5 10 0M160 90q5-5 10 0" stroke="#2A1B3D" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M144 102q10 10 20 0" stroke="#2A1B3D" strokeWidth="3" fill="#fff" strokeLinecap="round" />
      <circle cx="136" cy="98" r="5" fill="#F49AC1" opacity=".6" />
      <circle cx="174" cy="98" r="5" fill="#F49AC1" opacity=".6" />
    </svg>
  )
}

/** Small decorative illustration of a trophy for "you can go far". */
export function TrophyIllustration() {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
      <path d="M18 8h28v14a14 14 0 0 1-28 0z" fill="#F7C948" />
      <path d="M18 12H8c0 10 6 14 12 14M46 12h10c0 10-6 14-12 14" stroke="#E0A800" strokeWidth="4" fill="none" />
      <path d="M28 36h8v10h-8z" fill="#E0A800" />
      <path d="M20 46h24v8H20z" fill="#7B4FD8" />
      <path d="M32 14l2 5 5 .5-4 3.5 1 5-4-2.5-4 2.5 1-5-4-3.5 5-.5z" fill="#fff" />
    </svg>
  )
}
