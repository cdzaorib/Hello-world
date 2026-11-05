/** Ornamento botânico discreto (decorativo). */
export function Botanical({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 320" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden className={className}>
      <path d="M100 318C96 240 104 150 100 10" />
      {[40, 90, 140, 190, 240].map((y, i) => (
        <g key={y}>
          <path d={`M100 ${y + 40}C${60 - i * 4} ${y + 20} ${50 - i * 3} ${y - 10} ${48} ${y - 20}C${80} ${y - 14} ${98} ${y + 10} 100 ${y + 40}Z`} />
          <path d={`M100 ${y + 20}C${140 + i * 4} ${y + 4} ${150 + i * 3} ${y - 24} ${152} ${y - 32}C${120} ${y - 28} ${102} ${y - 6} 100 ${y + 20}Z`} />
        </g>
      ))}
    </svg>
  );
}
