import PageBanner from '../components/common/PageBanner'
import HouseChurchOverviewSection from '../components/community/HouseChurchOverviewSection'
import HouseChurchMeetingFlow from '../components/community/HouseChurchMeetingFlow'
import HouseChurchJoinCTA from '../components/community/HouseChurchJoinCTA'

export default function HouseChurchesPage() {
  return (
    <>
      <PageBanner
        title="목장 소개"
        subtitle="예닮교회의 소그룹 공동체, 목장을 소개합니다."
      />
      <HouseChurchOverviewSection />
      <HouseChurchMeetingFlow />
      <HouseChurchJoinCTA />
    </>
  )
}
