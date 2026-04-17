import Container from '../common/Container'
import Card from '../common/Card'
import { worshipGroups } from '../../constants/worshipSchedule'

export default function WorshipScheduleSection() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="space-y-14">
          {worshipGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-brand-navy pb-3">
                {group.title}
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((service) => (
                  <Card key={service.name}>
                    <Card.Body>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {service.name}
                      </h3>
                      {service.nameEn && (
                        <p className="mt-0.5 text-xs text-gray-400">{service.nameEn}</p>
                      )}
                      <p className="mt-3 text-brand-navy font-medium">{service.time}</p>
                      {service.location && (
                        <p className="mt-1 text-sm text-gray-500">📍 {service.location}</p>
                      )}
                      {service.note && (
                        <p className="mt-3 text-xs text-gray-500 bg-warm-cream rounded px-2 py-1.5">
                          {service.note}
                        </p>
                      )}
                      {service.zoomUrl && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <a
                            href={service.zoomUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-navy hover:text-brand-navy-dark"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polygon points="23 7 16 12 23 17 23 7" />
                              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                            </svg>
                            Zoom 참여하기
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M7 17L17 7" />
                              <polyline points="7 7 17 7 17 17" />
                            </svg>
                          </a>
                          {service.meetingId && (
                            <p className="mt-1.5 text-xs text-gray-500">
                              Meeting ID: <span className="font-mono">{service.meetingId}</span>
                            </p>
                          )}
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
