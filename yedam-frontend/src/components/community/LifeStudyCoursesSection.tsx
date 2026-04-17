import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'

interface Course {
  step: string
  name: string
  description: string
  target: string
  topics: string[]
}

const courses: Course[] = [
  {
    step: '01',
    name: '새생활',
    description: '예수님을 구주로 영접한 후 신앙의 기초를 다지는 첫 단계입니다.',
    target: '새신자 · 초신자',
    topics: ['구원의 확신', '기도 생활', '성경 읽기', '예배와 교제'],
  },
  {
    step: '02',
    name: '새가족',
    description: '가정교회의 철학과 목장 생활의 실제를 배우며 공동체에 뿌리내립니다.',
    target: '새생활 수료자 · 등록 교인',
    topics: ['가정교회 철학', '목장 사역', 'VIP 초청', '섬김의 실천'],
  },
  {
    step: '03',
    name: '제자훈련',
    description: '더 깊은 말씀 묵상과 제자도 훈련을 통해 주님의 일꾼으로 세워집니다.',
    target: '새가족 수료자 · 목자 후보',
    topics: ['성경 파노라마', '제자도', '전도와 선교', '목자 세미나'],
  },
]

export default function LifeStudyCoursesSection() {
  return (
    <section className="bg-warm-cream py-16 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="Courses"
          title="3단계 커리큘럼"
          description="새신자에서 제자까지, 한 단계씩 깊어지는 여정입니다."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.step}
              className="relative bg-white rounded-xl border border-warm-border p-7 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold rounded-l-xl" />
              <div className="pl-2">
                <span className="text-3xl font-bold text-brand-gold tracking-tight">
                  {course.step}
                </span>
                <h3 className="mt-2 text-xl font-bold text-brand-navy tracking-tight">
                  {course.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-text">
                  {course.target}
                </p>
                <p className="mt-4 text-sm text-warm-text/80 leading-relaxed">
                  {course.description}
                </p>

                <div className="mt-5 pt-5 border-t border-warm-border">
                  <p className="text-xs font-semibold text-muted-text uppercase tracking-wider mb-2">
                    주요 주제
                  </p>
                  <ul className="space-y-1.5">
                    {course.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-2 text-sm text-warm-text/80"
                      >
                        <span className="w-1 h-1 rounded-full bg-brand-gold shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
