export interface CoreValue {
  title: string
  description: string
  icon: string
}

export const coreValues: CoreValue[] = [
  {
    title: '말씀 중심',
    description: '성경을 삶의 기준으로 삼고 하나님의 뜻을 분별합니다.',
    icon: '📖',
  },
  {
    title: '기도와 예배',
    description: '끊임없는 기도와 신령과 진정으로 드리는 예배를 소중히 여깁니다.',
    icon: '🙏',
  },
  {
    title: '사랑의 공동체',
    description: '서로 돌아보며 사랑으로 하나 되는 가족 같은 교회를 추구합니다.',
    icon: '❤️',
  },
  {
    title: '선교와 섬김',
    description: '복음을 땅끝까지 전하며 이웃을 섬기는 사명을 감당합니다.',
    icon: '🌍',
  },
]
