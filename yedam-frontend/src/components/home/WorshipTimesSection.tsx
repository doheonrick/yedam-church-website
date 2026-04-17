import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
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
            <div
              key={service.name}
              className="relative bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold rounded-l-xl" />
              <div className="pl-4">
                <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                <p className="mt-3 text-2xl font-bold text-brand-navy">{service.time}</p>
                {service.location && (
                  <p className="mt-2 text-sm text-gray-500 flex items-center gap-1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    {service.location}
                  </p>
                )}
              </div>
            </div>
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
