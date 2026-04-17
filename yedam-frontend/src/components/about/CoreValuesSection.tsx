import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import Card from '../common/Card'
import { coreValues } from '../../constants/coreValues'

export default function CoreValuesSection() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="Core Values"
          title="핵심 가치"
          description="예닮교회가 추구하는 4가지 핵심 가치입니다."
          align="center"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value) => (
            <Card key={value.title}>
              <Card.Body className="text-center">
                <div className="text-4xl">{value.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
