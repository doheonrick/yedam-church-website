export interface CoreValue {
  title: string
  description: string
  icon: string
}

// 핵심 가치 관련 상세 내용은 추후 교회 확인 후 업데이트 필요
export const coreValues: CoreValue[] = [
  {
    title: '영혼 구원',
    description: '잃어버린 영혼을 하나님께로 인도하는 사명을 최우선으로 삼습니다.',
    icon: '✝️',
  },
  {
    title: '제자 양성',
    description: '예수 그리스도를 닮은 온전한 제자로 성도를 세워갑니다.',
    icon: '📖',
  },
  {
    title: '가정교회',
    description: '2005년부터 이어진 목장 중심의 가정교회 공동체입니다.',
    icon: '🏠',
  },
  {
    title: '선교와 동역',
    description: '선교사와 동역하며 복음을 땅끝까지 전하는 교회가 되고자 합니다.',
    icon: '🌍',
  },
]
