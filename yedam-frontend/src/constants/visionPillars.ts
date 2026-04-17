export interface VisionPillar {
  number: string
  title: string
  items: string[]
}

// 출처: 달라스 예닮교회 비전 성명서
export const visionPillars: VisionPillar[] = [
  {
    number: '01',
    title: '가정교회 목회자 세우기',
    items: [
      '평신도 목회자 개발',
      '이민사회 치유',
      'VIP 구원 추구',
      '선교사와의 동역',
    ],
  },
  {
    number: '02',
    title: '자녀 교육 책임',
    items: [
      '하나님을 올바르게 아는 신앙교육',
      '이웃 사랑의 가치관 형성',
      '성경적 크리스찬 리더십 개발',
      '세상을 변화시키는 하나님의 비전을 심어주는 교육',
    ],
  },
]
