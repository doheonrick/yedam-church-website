import PageBanner from '../components/common/PageBanner'
import StaffGrid from '../components/about/StaffGrid'

export default function StaffPage() {
  return (
    <>
      <PageBanner title="섬기는 분들" subtitle="예닮교회를 섬기는 사역자들을 소개합니다." />
      <StaffGrid />
    </>
  )
}
