import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'
import { newsService } from '../../services/newsService'
import { formatDate } from '../../utils/formatDate'
import type { News } from '../../types/news'

export default function LatestNewsSection() {
  const [items, setItems] = useState<News[]>([])

  useEffect(() => {
    newsService.getLatest(5).then(setItems)
  }, [])

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <Container>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionTitle eyebrow="News" title="교회 소식" />
          <Button to="/news" variant="ghost" size="sm">
            전체 보기 →
          </Button>
        </div>
        {items.length === 0 ? (
          <div className="mt-8 py-12 text-center text-gray-400 bg-white rounded-lg border border-gray-200">
            등록된 소식이 없습니다.
          </div>
        ) : (
        <ul className="mt-8 divide-y divide-gray-200 bg-white rounded-lg border border-gray-200">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                to={`/news/${item.id}`}
                className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors"
              >
                <span className="flex-shrink-0 text-xs font-semibold px-2 py-1 rounded bg-blue-50 text-blue-700">
                  {item.category}
                </span>
                <span className="flex-1 min-w-0 text-gray-900 truncate">{item.title}</span>
                <span className="flex-shrink-0 text-sm text-gray-500">{formatDate(item.date)}</span>
              </Link>
            </li>
          ))}
        </ul>
        )}
      </Container>
    </section>
  )
}
