import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/formatDate'
import type { News } from '../../types/news'

interface NewsListItemProps {
  news: News
}

const CATEGORY_STYLES: Record<News['category'], string> = {
  공지: 'bg-blue-50 text-blue-700 border-blue-200',
  행사: 'bg-amber-50 text-amber-700 border-amber-200',
}

export default function NewsListItem({ news }: NewsListItemProps) {
  return (
    <Link
      to={`/news/${news.id}`}
      className="block group border-b border-gray-200 py-5 px-2 hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-start gap-3">
        <span
          className={`shrink-0 inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border ${
            CATEGORY_STYLES[news.category]
          }`}
        >
          {news.category}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            {news.isPinned && (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-red-500 shrink-0"
                aria-label="고정"
              >
                <path d="M16 3v6l3 3v2H5v-2l3-3V3h8z" />
              </svg>
            )}
            <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-700 line-clamp-1">
              {news.title}
            </h3>
          </div>
          {news.summary && (
            <p className="mt-1 text-sm text-gray-600 line-clamp-1">{news.summary}</p>
          )}
        </div>

        <div className="shrink-0 text-right text-xs text-gray-500">
          <div>{formatDate(news.date)}</div>
          {news.author && <div className="mt-0.5">{news.author}</div>}
        </div>
      </div>
    </Link>
  )
}
