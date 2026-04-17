import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import { churchHistory } from '../../constants/churchHistory'

export default function HistorySection() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <Container size="md">
        <SectionTitle eyebrow="History" title="교회 연혁" align="center" />
        <ol className="mt-12 relative border-l-2 border-blue-200 ml-4">
          {churchHistory.map((entry) => (
            <li key={entry.year} className="mb-8 ml-6 last:mb-0">
              <span className="absolute -left-[11px] flex items-center justify-center w-5 h-5 bg-blue-700 rounded-full ring-4 ring-white" />
              <h3 className="text-lg font-bold text-blue-900">{entry.year}</h3>
              <p className="mt-1 text-gray-700">{entry.event}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
