export interface NavItem {
  label: string
  path: string
  external?: boolean
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
      { label: '연혁', path: '/history' },
    ],
  },
  {
    label: '목회자코너',
    path: '/sermons',
    children: [
      { label: '설교', path: '/sermons' },
      { label: '목회칼럼', path: '/columns' },
    ],
  },
  { label: '예배 안내', path: '/worship' },
  {
    label: '가정교회',
    path: '/community',
    children: [
      { label: '가정교회란', path: '/community' },
      { label: '목장소개', path: '/community/houses' },
      { label: '삶공부', path: '/community/study' },
    ],
  },
  { label: '예닮모습', path: '/gallery' },
  { label: '예닮나눔터', path: '/forum' },
  { label: '예닮소식', path: '/news' },
  { label: '오시는 길', path: '/contact' },
  { label: '영어회중예배', path: 'https://www.anfdallas.org/', external: true },
  { label: '온라인 봉헌', path: '/offering' },
]
