import PageBanner from '../components/common/PageBanner'
import WorshipScheduleSection from '../components/worship/WorshipScheduleSection'
import WorshipContactSection from '../components/worship/WorshipContactSection'

export default function WorshipPage() {
  return (
    <>
      <PageBanner
        title="예배 안내"
        subtitle="달라스 예닮교회의 모든 예배에 여러분을 초대합니다."
      />
      <WorshipScheduleSection />
      <WorshipContactSection />
    </>
  )
}
