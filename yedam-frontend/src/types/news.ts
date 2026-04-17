export type NewsCategory = '공지' | '행사' | '교육' | '선교' | '기타'

export interface News {
  id: string
  title: string
  category: NewsCategory
  content: string
  date: string
  author?: string
  imageUrl?: string
  isPinned?: boolean
}
