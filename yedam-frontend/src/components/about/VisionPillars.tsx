import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import { visionPillars } from '../../constants/visionPillars'

export default function VisionPillars() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="Vision Statement"
          title="비전 성명서"
          description="달라스 예닮교회가 추구하는 두 가지 큰 방향입니다."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {visionPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white rounded-lg border border-gray-200 p-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold text-blue-700 leading-none">
                  {pillar.number}
                </span>
                <h3 className="text-xl font-semibold text-gray-900">{pillar.title}</h3>
              </div>
              <ul className="mt-5 space-y-2">
                {pillar.items.map((item) => (
                  <li key={item} className="flex gap-2 text-gray-700">
                    <span className="text-blue-700 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
