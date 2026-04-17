import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'

interface ScheduleRow {
  day: string
  time: string
  location: string
  note: string
}

const rows: ScheduleRow[] = [
  {
    day: '화요일',
    time: '오후 7:00 ~ 9:00',
    location: '본당',
    note: '새생활 · 새가족',
  },
  {
    day: '목요일',
    time: '오후 7:00 ~ 9:00',
    location: '코이노니아실',
    note: '제자훈련',
  },
]

export default function LifeStudyScheduleSection() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="Schedule"
          title="일정 · 장소"
          description="각 과정별로 요일과 장소가 다를 수 있으니 등록 전 확인해 주세요."
          align="center"
        />

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="grid gap-4 sm:grid-cols-2">
            {rows.map((row) => (
              <div
                key={row.day}
                className="bg-white rounded-xl border border-warm-border p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
                  {row.note}
                </p>
                <p className="mt-3 text-2xl font-bold text-brand-navy tracking-tight">
                  {row.day}
                </p>
                <p className="mt-1 text-lg text-warm-text font-medium">{row.time}</p>
                <p className="mt-3 text-sm text-muted-text flex items-center gap-1.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  {row.location}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button to="/contact" variant="primary" size="lg">
              등록 문의하기
            </Button>
            <p className="mt-4 text-sm text-muted-text">
              학기별로 개강하므로 자세한 일정은 교회로 문의해 주세요.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
