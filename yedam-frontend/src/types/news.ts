export type NewsCategory = '공지' | '행사'

export interface News {
  id: string
  title: string
  category: NewsCategory
  content: string
  date: string
  author?: string
  summary?: string
  imageUrl?: string
  isPinned?: boolean
}
