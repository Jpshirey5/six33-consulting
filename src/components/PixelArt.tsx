type Square = { x: number; y: number; o: number; sz: number };

/** Deterministic pseudo-random squares for a given seed. */
function makeSquares(seed: number, count: number): Square[] {
  let s = seed * 9301 + 49297;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: count }, () => ({
    x: Math.floor(rand() * 11) * 14,
    y: Math.floor(rand() * 6) * 14,
    o: 0.25 + rand() * 0.75,
    sz: rand() > 0.7 ? 12 : 8,
  }));
}

/** Scattered bronze squares, like the template's decorative pixel clusters. */
export default function PixelArt({ seed = 1, className = "", count = 18 }: { seed?: number; className?: string; count?: number }) {
  const squares = makeSquares(seed, count);
  return (
    <svg aria-hidden="true" viewBox="0 0 160 90" className={className}>
      {squares.map((q, i) => (
        <rect key={i} x={q.x} y={q.y} width={q.sz} height={q.sz} rx="1" fill="#F48D16" opacity={q.o} />
      ))}
    </svg>
  );
}
