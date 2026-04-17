import PageBanner from '../components/common/PageBanner'
import Container from '../components/common/Container'

export default function LifeStudyPage() {
  return (
    <>
      <PageBanner title="삶공부" subtitle="매주 화·목 오후 7시, 본당 & 코이노니아" />
      <section className="py-16 md:py-20">
        <Container size="md">
          <p className="text-gray-600 leading-relaxed">
            삶공부 과정 안내는 추후 업데이트될 예정입니다.
          </p>
        </Container>
      </section>
    </>
  )
}
