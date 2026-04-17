import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import { newsService } from '../services/newsService'
import { formatDateKorean } from '../utils/formatDate'
import type { News } from '../types/news'

const CATEGORY_STYLES: Record<News['category'], string> = {
  공지: 'bg-blue-50 text-blue-700 border-blue-200',
  행사: 'bg-amber-50 text-amber-700 border-amber-200',
}

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [news, setNews] = useState<News | null>(null)
  const [neighbors, setNeighbors] = useState<{ prev: News | null; next: News | null }>({
    prev: null,
    next: null,
  })
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    setNotFound(false)
    Promise.all([newsService.getById(id), newsService.getNeighbors(id)])
      .then(([n, nb]) => {
        if (!n) {
          setNotFound(true)
        } else {
          setNews(n)
          setNeighbors(nb)
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

  if (notFound || !news) {
    return (
      <Container size="md" className="py-20 text-center">
        <p className="text-gray-600">공지를 찾을 수 없습니다.</p>
        <Button to="/news" variant="outline" className="mt-6">
          소식 목록으로
        </Button>
      </Container>
    )
  }

  return (
    <article className="py-10 md:py-14">
      <Container size="md">
        <Link to="/news" className="text-sm text-blue-700 hover:underline">
          ← 예닮 소식
        </Link>

        <header className="mt-4 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border ${
                CATEGORY_STYLES[news.category]
              }`}
            >
              {news.category}
            </span>
            {news.isPinned && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-red-600">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 3v6l3 3v2H5v-2l3-3V3h8z" />
                </svg>
                고정
              </span>
            )}
          </div>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {news.title}
          </h1>
          <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600">
            {news.author && (
              <div className="flex gap-2">
                <dt className="text-gray-400">작성</dt>
                <dd>{news.author}</dd>
              </div>
            )}
            <div className="flex gap-2">
              <dt className="text-gray-400">날짜</dt>
              <dd>{formatDateKorean(news.date)}</dd>
            </div>
          </dl>
        </header>

        {news.imageUrl && (
          <img
            src={news.imageUrl}
            alt={news.title}
            className="mt-8 w-full rounded-lg border border-gray-200"
          />
        )}

        <div className="mt-8 text-gray-700 leading-relaxed whitespace-pre-line">
          {news.content}
        </div>

        <nav className="mt-12 grid gap-3 sm:grid-cols-2 border-t border-gray-200 pt-6">
          {neighbors.prev ? (
            <Link
              to={`/news/${neighbors.prev.id}`}
              className="group p-4 rounded-md border border-gray-200 hover:border-blue-300 hover:bg-blue-50/40 transition-colors"
            >
              <p className="text-xs text-gray-400">이전 글</p>
              <p className="mt-1 text-sm font-medium text-gray-900 group-hover:text-blue-700 line-clamp-1">
                ← {neighbors.prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {neighbors.next ? (
            <Link
              to={`/news/${neighbors.next.id}`}
              className="group p-4 rounded-md border border-gray-200 hover:border-blue-300 hover:bg-blue-50/40 transition-colors text-right"
            >
              <p className="text-xs text-gray-400">다음 글</p>
              <p className="mt-1 text-sm font-medium text-gray-900 group-hover:text-blue-700 line-clamp-1">
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
