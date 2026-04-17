import PageBanner from '../components/common/PageBanner'
import Container from '../components/common/Container'

export default function ForumPage() {
  return (
    <>
      <PageBanner title="예닮 나눔터" subtitle="성도들의 나눔과 소통 공간" />
      <section className="py-16 md:py-20">
        <Container size="md">
          <p className="text-gray-600 leading-relaxed">
            예닮 나눔터(포럼) 콘텐츠는 추후 업데이트될 예정입니다.
          </p>
        </Container>
      </section>
    </>
  )
}
