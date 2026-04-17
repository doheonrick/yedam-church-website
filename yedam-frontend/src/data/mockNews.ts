import type { News } from '../types/news'

// 실제 공지 콘텐츠 확보 전까지는 구조만 유지한 샘플
export const mockNews: News[] = [
  {
    id: 'n-001',
    title: '예닮 소식',
    category: '공지',
    content: '공지사항 내용이 이곳에 표시됩니다.',
    date: '2026-04-10',
    author: '사무국',
    isPinned: true,
  },
  {
    id: 'n-002',
    title: '예닮 소식',
    category: '행사',
    content: '행사 안내 내용이 이곳에 표시됩니다.',
    date: '2026-04-05',
    author: '사무국',
  },
  {
    id: 'n-003',
    title: '예닮 소식',
    category: '교육',
    content: '교육부 소식이 이곳에 표시됩니다.',
    date: '2026-03-28',
    author: '교육부',
  },
]
