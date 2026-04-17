import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import VisionPage from '../pages/VisionPage'
import StaffPage from '../pages/StaffPage'
import HistoryPage from '../pages/HistoryPage'
import WorshipPage from '../pages/WorshipPage'
import SermonsPage from '../pages/SermonsPage'
import SermonDetailPage from '../pages/SermonDetailPage'
import ColumnsPage from '../pages/ColumnsPage'
import CommunityPage from '../pages/CommunityPage'
import HouseChurchesPage from '../pages/HouseChurchesPage'
import LifeStudyPage from '../pages/LifeStudyPage'
import NewsPage from '../pages/NewsPage'
import NewsDetailPage from '../pages/NewsDetailPage'
import GalleryPage from '../pages/GalleryPage'
import ForumPage from '../pages/ForumPage'
import ContactPage from '../pages/ContactPage'
import OfferingPage from '../pages/OfferingPage'
import NotFoundPage from '../pages/NotFoundPage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      // 교회소개
      { path: 'about', Component: AboutPage },
      { path: 'vision', Component: VisionPage },
      { path: 'staff', Component: StaffPage },
      { path: 'history', Component: HistoryPage },
      // 목회자코너
      { path: 'sermons', Component: SermonsPage },
      { path: 'sermons/:id', Component: SermonDetailPage },
      { path: 'columns', Component: ColumnsPage },
      // 예배
      { path: 'worship', Component: WorshipPage },
      // 가정교회
      { path: 'community', Component: CommunityPage },
      { path: 'community/houses', Component: HouseChurchesPage },
      { path: 'community/study', Component: LifeStudyPage },
      // 기타
      { path: 'news', Component: NewsPage },
      { path: 'news/:id', Component: NewsDetailPage },
      { path: 'gallery', Component: GalleryPage },
      { path: 'forum', Component: ForumPage },
      { path: 'contact', Component: ContactPage },
      { path: 'offering', Component: OfferingPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
])
