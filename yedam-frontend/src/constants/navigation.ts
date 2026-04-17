export interface NavItem {
  label: string
  path: string
  children?: NavItem[]
}

export const mainNav: NavItem[] = [
  {
    label: '교회소개',
    path: '/about',
    children: [
      { label: '교회 소개', path: '/about' },
      { label: '비전', path: '/vision' },
      { label: '섬기는 분들', path: '/staff' },
    ],
  },
  { label: '예배 안내', path: '/worship' },
  { label: '설교', path: '/sermons' },
  { label: '공지사항', path: '/news' },
  { label: '갤러리', path: '/gallery' },
  { label: '오시는 길', path: '/contact' },
  { label: '온라인 헌금', path: '/offering' },
  { label: 'English', path: '/english' },
]
