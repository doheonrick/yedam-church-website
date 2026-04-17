import type { Sermon } from '../types/sermon'

// 실제 설교 제목·본문 확인 전까지는 대표 설교자 이우철 목사 기준 샘플
export const mockSermons: Sermon[] = [
  {
    id: 's-001',
    title: '설교 제목',
    preacher: '이우철 목사',
    scripture: '본문',
    date: '2026-04-12',
    description: '연합목장 설교 영상 — 실제 콘텐츠 입력 예정',
  },
  {
    id: 's-002',
    title: '설교 제목',
    preacher: '이우철 목사',
    scripture: '본문',
    date: '2026-04-05',
  },
  {
    id: 's-003',
    title: '설교 제목',
    preacher: '이우철 목사',
    scripture: '본문',
    date: '2026-03-29',
  },
  {
    id: 's-004',
    title: '설교 제목',
    preacher: '이성은 목사',
    scripture: '본문',
    date: '2026-03-22',
  },
]
