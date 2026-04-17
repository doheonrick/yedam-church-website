import PageBanner from '../components/common/PageBanner'
import Container from '../components/common/Container'

export default function CommunityPage() {
  return (
    <>
      <PageBanner title="가정교회란" subtitle="2005년부터 이어진 달라스 예닮교회의 목장 중심 공동체입니다." />
      <section className="py-16 md:py-20">
        <Container size="md">
          <p className="text-gray-600 leading-relaxed">
            가정교회 소개 콘텐츠는 추후 업데이트될 예정입니다.
          </p>
        </Container>
      </section>
    </>
  )
}
