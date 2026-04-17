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
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-700 pb-3">
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
                      <p className="mt-3 text-blue-700 font-medium">{service.time}</p>
                      {service.location && (
                        <p className="mt-1 text-sm text-gray-500">📍 {service.location}</p>
                      )}
                      {service.note && (
                        <p className="mt-3 text-xs text-gray-500 bg-gray-50 rounded px-2 py-1.5">
                          {service.note}
                        </p>
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
