import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import { visionPillars } from '../../constants/visionPillars'

export default function VisionPillars() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="Vision"
          title="네 가지 비전"
          description="예닮교회가 꿈꾸는 공동체의 모습입니다."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {visionPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white rounded-lg border border-gray-200 p-8 flex gap-6"
            >
              <span className="text-4xl font-bold text-blue-700 leading-none flex-shrink-0">
                {pillar.number}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{pillar.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
