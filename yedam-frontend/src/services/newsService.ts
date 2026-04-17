import { mockNews } from '../data/mockNews'
import type { News, NewsCategory } from '../types/news'
import type { Paginated } from '../types/common'

export const NEWS_CATEGORIES: NewsCategory[] = ['공지', '행사']

export interface NewsQuery {
  keyword?: string
  category?: NewsCategory | ''
  page?: number
  pageSize?: number
}

function sortPinnedThenDateDesc(items: News[]): News[] {
  return [...items].sort((a, b) => {
    if (!!a.isPinned !== !!b.isPinned) return a.isPinned ? -1 : 1
    return b.date.localeCompare(a.date)
  })
}

function sortByDateDesc(items: News[]): News[] {
  return [...items].sort((a, b) => b.date.localeCompare(a.date))
}

function applyFilters(items: News[], q: NewsQuery): News[] {
  const keyword = q.keyword?.trim().toLowerCase()
  return items.filter((n) => {
    if (q.category && n.category !== q.category) return false
    if (keyword) {
      const hay = `${n.title} ${n.content} ${n.summary ?? ''} ${n.author ?? ''} ${n.category}`.toLowerCase()
      if (!hay.includes(keyword)) return false
    }
    return true
  })
}

export const newsService = {
  async getAll(): Promise<News[]> {
    return sortPinnedThenDateDesc(mockNews)
  },

  async getById(id: string): Promise<News | null> {
    return mockNews.find((n) => n.id === id) ?? null
  },

  async getLatest(limit = 5): Promise<News[]> {
    return sortByDateDesc(mockNews).slice(0, limit)
  },

  async search(query: NewsQuery): Promise<Paginated<News>> {
    const page = query.page ?? 1
    const pageSize = query.pageSize ?? 10
    const filtered = sortPinnedThenDateDesc(applyFilters(mockNews, query))
    const start = (page - 1) * pageSize
    return {
      items: filtered.slice(start, start + pageSize),
      total: filtered.length,
      page,
      pageSize,
    }
  },

  async getNeighbors(id: string): Promise<{ prev: News | null; next: News | null }> {
    const sorted = sortByDateDesc(mockNews)
    const idx = sorted.findIndex((n) => n.id === id)
    if (idx === -1) return { prev: null, next: null }
    return {
      prev: idx > 0 ? sorted[idx - 1] : null,
      next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
    }
  },
}
