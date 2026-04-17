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
    <section className="py-16 md:py-20">
      <Container>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionTitle eyebrow="Sermons" title="최근 설교" />
          <Button to="/sermons" variant="ghost" size="sm">
            전체 보기 →
          </Button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {sermons.map((sermon) => (
            <Card key={sermon.id} to={`/sermons/${sermon.id}`} hoverable>
              <Card.Body>
                {sermon.series && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
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
          ))}
        </div>
      </Container>
    </section>
  )
}
