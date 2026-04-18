interface PaginationProps {
  page: number
  total: number
  pageSize: number
  onChange: (page: number) => void
  className?: string
}

export default function Pagination({
  page,
  total,
  pageSize,
  onChange,
  className = '',
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  if (totalPages <= 1) return null

  const pages = buildPageList(page, totalPages)

  return (
    <nav
      className={`flex items-center justify-center gap-1 ${className}`}
      aria-label="페이지네이션"
    >
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="px-3 py-2 text-sm rounded border border-gray-300 text-gray-700 hover:bg-warm-cream disabled:opacity-40 disabled:cursor-not-allowed"
      >
        이전
      </button>
      {pages.map((p, i) =>
        p === '...' ? (
          <span key={`gap-${i}`} className="px-2 text-gray-400">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onChange(p)}
            aria-current={p === page ? 'page' : undefined}
            className={`min-w-[36px] h-9 rounded text-sm ${
              p === page
                ? 'bg-brand-navy text-white font-semibold'
                : 'text-gray-700 hover:bg-warm-stone'
            }`}
          >
            {p}
          </button>
        )
      )}
      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="px-3 py-2 text-sm rounded border border-gray-300 text-gray-700 hover:bg-warm-cream disabled:opacity-40 disabled:cursor-not-allowed"
      >
        다음
      </button>
    </nav>
  )
}

function buildPageList(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const pages: (number | '...')[] = [1]
  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)
  if (start > 2) pages.push('...')
  for (let p = start; p <= end; p++) pages.push(p)
  if (end < total - 1) pages.push('...')
  pages.push(total)
  return pages
}
