import HeroSection from '../components/home/HeroSection'
import QuickLinksSection from '../components/home/QuickLinksSection'
import VisionTeaserSection from '../components/home/VisionTeaserSection'
import WorshipTimesSection from '../components/home/WorshipTimesSection'
import LatestSermonsSection from '../components/home/LatestSermonsSection'
import LatestNewsSection from '../components/home/LatestNewsSection'
import VisitSection from '../components/home/VisitSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickLinksSection />
      <VisionTeaserSection />
      <WorshipTimesSection />
      <LatestSermonsSection />
      <LatestNewsSection />
      <VisitSection />
    </>
  )
}
