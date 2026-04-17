import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import SermonVideoEmbed from '../components/sermons/SermonVideoEmbed'
import { sermonService } from '../services/sermonService'
import { formatDateKorean } from '../utils/formatDate'
import type { Sermon } from '../types/sermon'

export default function SermonDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [sermon, setSermon] = useState<Sermon | null>(null)
  const [neighbors, setNeighbors] = useState<{ prev: Sermon | null; next: Sermon | null }>({
    prev: null,
    next: null,
  })
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    setNotFound(false)
    Promise.all([sermonService.getById(id), sermonService.getNeighbors(id)])
      .then(([s, n]) => {
        if (!s) {
          setNotFound(true)
        } else {
          setSermon(s)
          setNeighbors(n)
        }
      })
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <Container size="md" className="py-20 text-center text-gray-400">
        불러오는 중…
      </Container>
    )
  }

  if (notFound || !sermon) {
    return (
      <Container size="md" className="py-20 text-center">
        <p className="text-gray-600">설교를 찾을 수 없습니다.</p>
        <Button to="/sermons" variant="outline" className="mt-6">
          설교 목록으로
        </Button>
      </Container>
    )
  }

  return (
    <article className="py-10 md:py-14">
      <Container size="md">
        <Link to="/sermons" className="text-sm text-brand-navy hover:underline">
          ← 설교 목록
        </Link>

        <header className="mt-4">
          {sermon.series && (
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-navy">
              {sermon.series}
            </p>
          )}
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {sermon.title}
          </h1>
          <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600">
            <div className="flex gap-2">
              <dt className="text-gray-400">설교</dt>
              <dd>{sermon.preacher}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-gray-400">본문</dt>
              <dd>{sermon.scripture}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-gray-400">날짜</dt>
              <dd>{formatDateKorean(sermon.date)}</dd>
            </div>
          </dl>
        </header>

        <div className="mt-8 rounded-lg overflow-hidden border border-gray-200">
          <SermonVideoEmbed videoUrl={sermon.videoUrl} />
        </div>

        {sermon.description && (
          <div className="mt-8 text-gray-700 leading-relaxed whitespace-pre-line">
            {sermon.description}
          </div>
        )}

        <nav className="mt-12 grid gap-3 sm:grid-cols-2 border-t border-gray-200 pt-6">
          {neighbors.prev ? (
            <Link
              to={`/sermons/${neighbors.prev.id}`}
              className="group p-4 rounded-md border border-gray-200 hover:border-brand-gold/60 hover:bg-brand-gold-pale/40 transition-colors"
            >
              <p className="text-xs text-gray-400">이전 설교</p>
              <p className="mt-1 text-sm font-medium text-gray-900 group-hover:text-brand-navy line-clamp-1">
                ← {neighbors.prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {neighbors.next ? (
            <Link
              to={`/sermons/${neighbors.next.id}`}
              className="group p-4 rounded-md border border-gray-200 hover:border-brand-gold/60 hover:bg-brand-gold-pale/40 transition-colors text-right"
            >
              <p className="text-xs text-gray-400">다음 설교</p>
              <p className="mt-1 text-sm font-medium text-gray-900 group-hover:text-brand-navy line-clamp-1">
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
