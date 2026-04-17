import PageBanner from '../components/common/PageBanner'
import IntroSection from '../components/about/IntroSection'
import CoreValuesSection from '../components/about/CoreValuesSection'
import HistorySection from '../components/about/HistorySection'

export default function AboutPage() {
  return (
    <>
      <PageBanner title="교회 소개" subtitle="예닮교회가 걸어온 길과 추구하는 가치를 소개합니다." />
      <IntroSection />
      <CoreValuesSection />
      <HistorySection />
    </>
  )
}
