import PageBanner from '../components/common/PageBanner'
import HouseChurchIntroSection from '../components/community/HouseChurchIntroSection'
import HouseChurchFeaturesSection from '../components/community/HouseChurchFeaturesSection'
import HouseChurchFlowSection from '../components/community/HouseChurchFlowSection'

export default function CommunityPage() {
  return (
    <>
      <PageBanner
        title="가정교회란"
        subtitle="2005년부터 이어진 달라스 예닮교회의 목장 공동체입니다."
      />
      <HouseChurchIntroSection />
      <HouseChurchFeaturesSection />
      <HouseChurchFlowSection />
    </>
  )
}
