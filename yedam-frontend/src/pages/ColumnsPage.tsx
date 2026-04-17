import PageBanner from '../components/common/PageBanner'
import Container from '../components/common/Container'

export default function ColumnsPage() {
  return (
    <>
      <PageBanner title="목회칼럼" subtitle="이우철 담임목사의 목회 칼럼" />
      <section className="py-16 md:py-20">
        <Container size="md">
          <p className="text-gray-600 leading-relaxed">
            목회칼럼 콘텐츠는 추후 업데이트될 예정입니다.
          </p>
        </Container>
      </section>
    </>
  )
}
