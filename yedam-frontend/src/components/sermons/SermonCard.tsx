import Card from '../common/Card'
import { formatDate } from '../../utils/formatDate'
import type { Sermon } from '../../types/sermon'

interface SermonCardProps {
  sermon: Sermon
}

export default function SermonCard({ sermon }: SermonCardProps) {
  return (
    <Card to={`/sermons/${sermon.id}`} hoverable>
      {sermon.thumbnailUrl ? (
        <Card.Image src={sermon.thumbnailUrl} alt={sermon.title} />
      ) : (
        <div className="aspect-video bg-gradient-to-br from-brand-gold-pale to-brand-gold-pale flex items-center justify-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-gold">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
      <Card.Body>
        {sermon.series && (
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy">
            {sermon.series}
          </p>
        )}
        <h3 className="mt-2 text-lg font-semibold text-gray-900 line-clamp-2">
          {sermon.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600">{sermon.scripture}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>{sermon.preacher}</span>
          <span>{formatDate(sermon.date)}</span>
        </div>
      </Card.Body>
    </Card>
  )
}
