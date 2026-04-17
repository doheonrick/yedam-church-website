import { useEffect, useState } from 'react'
import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import Card from '../common/Card'
import Button from '../common/Button'
import { sermonService } from '../../services/sermonService'
import { formatDate } from '../../utils/formatDate'
import type { Sermon } from '../../types/sermon'

export default function LatestSermonsSection() {
  const [sermons, setSermons] = useState<Sermon[]>([])

  useEffect(() => {
    sermonService.getLatest(3).then(setSermons)
  }, [])

  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionTitle eyebrow="Sermons" title="최근 설교" />
          <Button to="/sermons" variant="ghost" size="sm">
            전체 보기 →
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {sermons.map((sermon) => (
            <Card key={sermon.id} to={`/sermons/${sermon.id}`} hoverable>
              {/* 썸네일 플레이스홀더 */}
              <div className="relative aspect-video bg-gradient-to-br from-brand-navy to-brand-navy-dark overflow-hidden">
                <div className="absolute inset-0 opacity-20" aria-hidden="true">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern
                        id={`sermon-dots-${sermon.id}`}
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="2" cy="2" r="1" fill="#D4A847" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#sermon-dots-${sermon.id})`} />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4A847"
                    strokeWidth="1.2"
                    className="opacity-80"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" fill="#D4A847" />
                  </svg>
                </div>
              </div>
              <Card.Body>
                {sermon.series && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    {sermon.series}
                  </p>
                )}
                <h3 className="font-display mt-2 text-lg font-semibold text-warm-text line-clamp-2">
                  {sermon.title}
                </h3>
                <p className="mt-2 text-sm text-muted-text">{sermon.scripture}</p>
                <div className="mt-4 pt-4 border-t border-warm-border flex items-center justify-between text-sm text-muted-text">
                  <span>{sermon.preacher}</span>
                  <span>{formatDate(sermon.date)}</span>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
