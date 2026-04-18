import PageBanner from '../components/common/PageBanner'
import LifeStudyIntroSection from '../components/community/LifeStudyIntroSection'
import LifeStudyCoursesSection from '../components/community/LifeStudyCoursesSection'
import LifeStudyScheduleSection from '../components/community/LifeStudyScheduleSection'

export default function LifeStudyPage() {
  return (
    <>
      <PageBanner title="삶공부" subtitle="단계별 성경공부로 믿음의 뿌리를 내립니다." />
      <LifeStudyIntroSection />
      <LifeStudyCoursesSection />
      <LifeStudyScheduleSection />
    </>
  )
}
