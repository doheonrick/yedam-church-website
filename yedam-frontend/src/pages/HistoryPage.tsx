import PageBanner from '../components/common/PageBanner'
import Container from '../components/common/Container'
import { churchHistory } from '../constants/churchHistory'

export default function HistoryPage() {
  return (
    <>
      <PageBanner title="연혁" subtitle="달라스 예닮교회가 걸어온 길" />
      <section className="py-16 md:py-20">
        <Container size="md">
          <ol className="relative border-l-2 border-warm-border ml-4">
            {churchHistory.map((entry) => (
              <li key={entry.year} className="mb-8 ml-6 last:mb-0">
                <span className="absolute -left-[11px] flex items-center justify-center w-5 h-5 bg-brand-navy rounded-full ring-4 ring-white" />
                <h3 className="text-lg font-bold text-brand-navy-dark">{entry.year}</h3>
                <p className="mt-1 text-gray-700">{entry.event}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 text-sm text-gray-500">
            * 상세 연혁은 추후 업데이트될 예정입니다.
          </p>
        </Container>
      </section>
    </>
  )
}
