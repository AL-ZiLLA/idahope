export default function SpecialtyIcon({ type }: { type: string }) {
  const props = {
    width: 36,
    height: 36,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#6b8f71',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  const icons: Record<string, JSX.Element> = {
    adolescents: (
      <svg {...props}>
        <path d="M12 2C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
        <path d="M20 21c0-3.31-3.58-6-8-6s-8 2.69-8 6" />
        <path d="M15 3.5c1.5 1 2.5 3 2.5 3" />
      </svg>
    ),
    anxiety: (
      <svg {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4" />
        <path d="M9 15s1 2 3 2 3-2 3-2" />
      </svg>
    ),
    depression: (
      <svg {...props}>
        <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z" />
        <path d="M8 14s1.5-2 4-2 4 2 4 2" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
      </svg>
    ),
    eating: (
      <svg {...props}>
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
        <path d="M12 6v6l3 3" />
        <path d="M8 2s2 2 4 2 4-2 4-2" />
      </svg>
    ),
    identity: (
      <svg {...props}>
        <path d="M12 3l1.5 4.5H18l-3.5 2.7 1.3 4.3L12 12l-3.8 2.5 1.3-4.3L6 7.5h4.5z" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    parenting: (
      <svg {...props}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  }

  return icons[type] || null
}
