const DAYS = 7

// 5×7 pixel font for the letters used in the banner (space is 1 col wide)
const glyphs: Record<string, string[]> = {
  H: ['#...#', '#...#', '#...#', '#####', '#...#', '#...#', '#...#'],
  E: ['#####', '#....', '#....', '####.', '#....', '#....', '#####'],
  L: ['#....', '#....', '#....', '#....', '#....', '#....', '#####'],
  O: ['.###.', '#...#', '#...#', '#...#', '#...#', '#...#', '.###.'],
  W: ['#...#', '#...#', '#...#', '#.#.#', '#.#.#', '#.#.#', '.#.#.'],
  R: ['####.', '#...#', '#...#', '####.', '#.#..', '#..#.', '#...#'],
  D: ['####.', '#...#', '#...#', '#...#', '#...#', '#...#', '####.'],
  ' ': ['.', '.', '.', '.', '.', '.', '.'],
}

const WORD = 'HELLO WORLD'
const PAD = 2

// mulberry32 — deterministic PRNG so the decorative texture renders
// identically on every load
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function buildCells(): number[][] {
  const rand = mulberry32(20210517)

  // flatten the word into bitmap columns with a 1-col gap between characters
  const cols: string[][] = []
  WORD.split('').forEach((ch, i) => {
    const glyph = glyphs[ch]
    for (let c = 0; c < glyph[0].length; c++) {
      cols.push(glyph.map(row => row[c]))
    }
    if (i < WORD.length - 1) cols.push(Array(DAYS).fill('.'))
  })

  const weeks = cols.length + PAD * 2
  return Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: DAYS }, (_, d) => {
      const col = w - PAD
      const lit = col >= 0 && col < cols.length && cols[col][d] === '#'
      if (lit) return rand() < 0.5 ? 3 : 4
      return rand() < 0.08 ? 1 : 0
    }),
  )
}

const cells = buildCells()
const levelClasses = ['bg-contrib-0', 'bg-contrib-1', 'bg-contrib-2', 'bg-contrib-3', 'bg-contrib-4']

export default function ContributionGraph() {
  return (
    <div className="rounded-md border border-border-default bg-canvas p-4">
      <div className="overflow-x-auto pb-1">
        <div className="flex gap-[3px] w-max">
          {cells.map((week, w) => (
            <div key={w} className="flex flex-col gap-[3px]">
              {week.map((level, d) => (
                <span key={d} className={`w-[10px] h-[10px] rounded-[2px] ${levelClasses[level]}`} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-3 text-xs text-fg-muted">
        <span className="flex items-center gap-1">
          Less
          {levelClasses.map(cls => (
            <span key={cls} className={`w-[10px] h-[10px] rounded-[2px] ${cls}`} />
          ))}
          More
        </span>
      </div>
    </div>
  )
}
