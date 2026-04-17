import type { News } from '../types/news'

export const mockNews: News[] = [
  {
    id: 'n-001',
    title: '2026년 부활절 연합예배 안내',
    category: '행사',
    content:
      '2026년 부활절 연합예배를 4월 5일 주일 오전 11시 본당에서 드립니다. 많은 참여 바랍니다.',
    date: '2026-04-01',
    author: '사무국',
    isPinned: true,
  },
  {
    id: 'n-002',
    title: '새가족 환영회 안내',
    category: '공지',
    content: '4월 셋째 주 주일, 예배 후 친교실에서 새가족 환영회가 있습니다.',
    date: '2026-04-10',
    author: '새가족부',
  },
  {
    id: 'n-003',
    title: '여름 성경학교 자원봉사자 모집',
    category: '교육',
    content: '2026년 여름 성경학교 교사 및 자원봉사자를 모집합니다. 교육부로 신청해주세요.',
    date: '2026-04-08',
    author: '교육부',
  },
  {
    id: 'n-004',
    title: '필리핀 단기선교팀 파송',
    category: '선교',
    content: '7월 중 필리핀 단기선교팀을 파송합니다. 중보기도와 후원을 부탁드립니다.',
    date: '2026-04-03',
    author: '선교부',
  },
]
