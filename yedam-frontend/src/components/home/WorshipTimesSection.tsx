import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import Card from '../common/Card'
import Button from '../common/Button'
import { worshipSchedule } from '../../constants/worshipSchedule'

export default function WorshipTimesSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="Worship"
          title="예배 시간 안내"
          description="매주 드려지는 예닮교회의 예배에 초대합니다."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {worshipSchedule.map((service) => (
            <Card key={service.name}>
              <Card.Body>
                <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                <p className="mt-2 text-blue-700 font-medium">{service.time}</p>
                {service.location && (
                  <p className="mt-1 text-sm text-gray-500">{service.location}</p>
                )}
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/worship" variant="outline">
            자세히 보기
          </Button>
        </div>
      </Container>
    </section>
  )
}
