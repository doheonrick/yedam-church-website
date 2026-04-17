import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import VisionPage from '../pages/VisionPage'
import StaffPage from '../pages/StaffPage'
import WorshipPage from '../pages/WorshipPage'
import SermonsPage from '../pages/SermonsPage'
import SermonDetailPage from '../pages/SermonDetailPage'
import NewsPage from '../pages/NewsPage'
import NewsDetailPage from '../pages/NewsDetailPage'
import GalleryPage from '../pages/GalleryPage'
import ContactPage from '../pages/ContactPage'
import OfferingPage from '../pages/OfferingPage'
import EnglishPage from '../pages/EnglishPage'
import NotFoundPage from '../pages/NotFoundPage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'vision', Component: VisionPage },
      { path: 'staff', Component: StaffPage },
      { path: 'worship', Component: WorshipPage },
      { path: 'sermons', Component: SermonsPage },
      { path: 'sermons/:id', Component: SermonDetailPage },
      { path: 'news', Component: NewsPage },
      { path: 'news/:id', Component: NewsDetailPage },
      { path: 'gallery', Component: GalleryPage },
      { path: 'contact', Component: ContactPage },
      { path: 'offering', Component: OfferingPage },
      { path: 'english', Component: EnglishPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
])
