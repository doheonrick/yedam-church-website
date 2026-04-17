export interface HistoryEntry {
  year: string
  event: string
}

// 실제 교회 연혁 확보 전까지는 확인된 사실만 기재
export const churchHistory: HistoryEntry[] = [
  { year: '2005', event: '가정교회(목장) 체계 시작' },
]
