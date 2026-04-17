import PageBanner from '../components/common/PageBanner'
import MissionStatement from '../components/about/MissionStatement'
import VisionPillars from '../components/about/VisionPillars'

export default function VisionPage() {
  return (
    <>
      <PageBanner title="비전" subtitle="예닮교회가 꿈꾸는 교회의 모습입니다." />
      <MissionStatement />
      <VisionPillars />
    </>
  )
}
