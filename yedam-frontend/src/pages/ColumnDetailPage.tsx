import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import { columnService } from '../services/columnService'
import { formatDateKorean } from '../utils/formatDate'
import type { Column } from '../types/column'

const CATEGORY_STYLES: Record<Column['category'], string> = {
  '담임목사 칼럼': 'bg-brand-gold-pale text-brand-navy border-warm-border',
  '부목사 칼럼': 'bg-warm-stone text-warm-text border-warm-border',
}

export default function ColumnDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [column, setColumn] = useState<Column | null>(null)
  const [neighbors, setNeighbors] = useState<{ prev: Column | null; next: Column | null }>({
    prev: null,
    next: null,
  })
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    setNotFound(false)
    Promise.all([columnService.getById(id), columnService.getNeighbors(id)])
      .then(([c, nb]) => {
        if (!c) {
          setNotFound(true)
        } else {
          setColumn(c)
          setNeighbors(nb)
        }
      })
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <Container size="md" className="py-20 text-center text-muted-text">
        불러오는 중…
      </Container>
    )
  }

  if (notFound || !column) {
    return (
      <Container size="md" className="py-20 text-center">
        <p className="text-muted-text">칼럼을 찾을 수 없습니다.</p>
        <Button to="/columns" variant="outline" className="mt-6">
          칼럼 목록으로
        </Button>
      </Container>
    )
  }

  return (
    <article className="py-10 md:py-14">
      <Container size="md">
        <Link to="/columns" className="text-sm text-brand-navy hover:underline">
          ← 목회칼럼
        </Link>

        <header className="mt-4 border-b border-warm-border pb-6">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border ${
              CATEGORY_STYLES[column.category]
            }`}
          >
            {column.category}
          </span>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-warm-text leading-tight tracking-[-0.02em]">
            {column.title}
          </h1>
          <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-text">
            <div className="flex gap-2">
              <dt className="text-muted-text/70">작성</dt>
              <dd>{column.author}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted-text/70">날짜</dt>
              <dd>{formatDateKorean(column.date)}</dd>
            </div>
          </dl>
        </header>

        <div className="mt-8 text-warm-text/90 leading-[1.9] whitespace-pre-line">
          {column.content}
        </div>

        <nav className="mt-12 grid gap-3 sm:grid-cols-2 border-t border-warm-border pt-6">
          {neighbors.prev ? (
            <Link
              to={`/columns/${neighbors.prev.id}`}
              className="group p-4 rounded-md border border-warm-border hover:border-brand-gold/60 hover:bg-brand-gold-pale/40 transition-colors"
            >
              <p className="text-xs text-muted-text/70">이전 칼럼</p>
              <p className="mt-1 text-sm font-medium text-warm-text group-hover:text-brand-navy line-clamp-1">
                ← {neighbors.prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {neighbors.next ? (
            <Link
              to={`/columns/${neighbors.next.id}`}
              className="group p-4 rounded-md border border-warm-border hover:border-brand-gold/60 hover:bg-brand-gold-pale/40 transition-colors text-right"
            >
              <p className="text-xs text-muted-text/70">다음 칼럼</p>
              <p className="mt-1 text-sm font-medium text-warm-text group-hover:text-brand-navy line-clamp-1">
                {neighbors.next.title} →
              </p>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </Container>
    </article>
  )
}
