export interface WorshipService {
  name: string
  nameEn?: string
  time: string
  location?: string
  note?: string
  zoomUrl?: string
  meetingId?: string
}

export interface WorshipGroup {
  title: string
  items: WorshipService[]
}

export const worshipGroups: WorshipGroup[] = [
  {
    title: '주일 예배',
    items: [
      { name: '1부 예배', time: '주일 오전 9:00', location: '본당' },
      { name: '2부 예배', time: '주일 오전 11:00', location: '본당' },
      { name: '3부 예배', time: '주일 오후 2:00', location: '본당' },
      { name: '중고등부 예배', time: '주일 오전 11:00', location: '예닮채플' },
      {
        name: '영어회중 예배 (ANF)',
        nameEn: 'English Ministry',
        time: '주일 오전 9:00 & 11:00',
        location: 'ANF 예배당',
      },
    ],
  },
  {
    title: '수요 예배',
    items: [
      {
        name: '수요예배',
        time: '매주 수요일 오후 7:30',
        location: '본당',
        note: '매달 첫째 주는 월삭 기도회',
      },
    ],
  },
  {
    title: '새벽 기도회',
    items: [
      {
        name: '욥기로 여는 아침묵상',
        time: '화 · 수 · 목 · 금 오전 6:00',
        location: 'Zoom',
        zoomUrl:
          'https://us02web.zoom.us/j/87210897915?pwd=10B0RFz2t0YnvMw4gvr3NyzjouCHva.1',
        meetingId: '872 1089 7915',
      },
    ],
  },
  {
    title: '목장 · 삶공부',
    items: [
      { name: '목장 모임', time: '각 목장별 진행', location: '가정/교회' },
      { name: '삶공부', time: '매주 화 · 목 오후 7:00', location: '본당 & 코이노니아' },
    ],
  },
]

// 하위 호환용 flat 목록
export const worshipSchedule: WorshipService[] = worshipGroups.flatMap((g) => g.items)
