import { mockNews } from '../data/mockNews'
import type { News, NewsCategory } from '../types/news'

export const newsService = {
  async getAll(): Promise<News[]> {
    return [...mockNews].sort((a, b) => {
      if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1
      return b.date.localeCompare(a.date)
    })
  },

  async getById(id: string): Promise<News | null> {
    return mockNews.find((n) => n.id === id) ?? null
  },

  async getByCategory(category: NewsCategory): Promise<News[]> {
    return mockNews.filter((n) => n.category === category)
  },

  async getLatest(limit = 5): Promise<News[]> {
    const sorted = [...mockNews].sort((a, b) => b.date.localeCompare(a.date))
    return sorted.slice(0, limit)
  },
}
