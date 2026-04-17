import PageBanner from '../components/common/PageBanner'
import Container from '../components/common/Container'

export default function HouseChurchesPage() {
  return (
    <>
      <PageBanner title="목장 소개" subtitle="달라스 예닮교회의 목장들을 소개합니다." />
      <section className="py-16 md:py-20">
        <Container size="md">
          <p className="text-gray-600 leading-relaxed">
            목장 소개 콘텐츠는 추후 업데이트될 예정입니다.
          </p>
        </Container>
      </section>
    </>
  )
}
