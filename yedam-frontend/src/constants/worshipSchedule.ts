export interface WorshipService {
  name: string
  time: string
  location?: string
  description?: string
}

export const worshipSchedule: WorshipService[] = [
  {
    name: '주일 1부 예배',
    time: '주일 오전 9:00',
    location: '본당',
  },
  {
    name: '주일 2부 예배',
    time: '주일 오전 11:00',
    location: '본당',
  },
  {
    name: '주일 오후 예배',
    time: '주일 오후 2:00',
    location: '본당',
  },
  {
    name: '수요예배',
    time: '수요일 오후 7:30',
    location: '본당',
  },
  {
    name: '금요기도회',
    time: '금요일 오후 8:00',
    location: '본당',
  },
  {
    name: '새벽기도회',
    time: '화-토 오전 5:30',
    location: '본당',
  },
]
