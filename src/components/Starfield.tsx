const COLORS = ["#ff2d78", "#a855f7", "#ff6b35", "#ff9e3d", "#e879f9"];

function makeStars(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const rand = (seed: number) => {
      const x = Math.sin(i * 127.1 + seed * 311.7) * 43758.5453;
      return x - Math.floor(x);
    };
    const round = (v: number) => Math.round(v * 10000) / 10000;
    return {
      left: round(rand(1) * 100),
      top: round(rand(2) * 100),
      size: round(1 + rand(3) * 2.5),
      color: COLORS[Math.floor(rand(4) * COLORS.length)],
      delay: round(rand(5) * 3),
      duration: round(2 + rand(6) * 3),
    };
  });
}

export default function Starfield({ count = 80 }: { count?: number }) {
  const stars = makeStars(count);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s, i) => (
        <span
          key={i}
          className="star-dot absolute rounded-full"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              backgroundColor: s.color,
              boxShadow: `0 0 ${Math.round(s.size * 3 * 10000) / 10000}px ${s.color}`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
        />
      ))}
    </div>
  );
}
