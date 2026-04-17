import { mockSermons } from '../data/mockSermons'
import type { Sermon } from '../types/sermon'
import type { Paginated } from '../types/common'

export interface SermonQuery {
  keyword?: string
  preacher?: string
  page?: number
  pageSize?: number
}

function sortByDateDesc(items: Sermon[]) {
  return [...items].sort((a, b) => b.date.localeCompare(a.date))
}

function applyFilters(items: Sermon[], q: SermonQuery): Sermon[] {
  const keyword = q.keyword?.trim().toLowerCase()
  return items.filter((s) => {
    if (q.preacher && s.preacher !== q.preacher) return false
    if (keyword) {
      const hay = `${s.title} ${s.preacher} ${s.scripture} ${s.description ?? ''} ${s.series ?? ''}`.toLowerCase()
      if (!hay.includes(keyword)) return false
    }
    return true
  })
}

export const sermonService = {
  async getAll(): Promise<Sermon[]> {
    return sortByDateDesc(mockSermons)
  },

  async getById(id: string): Promise<Sermon | null> {
    return mockSermons.find((s) => s.id === id) ?? null
  },

  async getLatest(limit = 3): Promise<Sermon[]> {
    return sortByDateDesc(mockSermons).slice(0, limit)
  },

  async search(query: SermonQuery): Promise<Paginated<Sermon>> {
    const page = query.page ?? 1
    const pageSize = query.pageSize ?? 9
    const filtered = sortByDateDesc(applyFilters(mockSermons, query))
    const start = (page - 1) * pageSize
    return {
      items: filtered.slice(start, start + pageSize),
      total: filtered.length,
      page,
      pageSize,
    }
  },

  async getPreachers(): Promise<string[]> {
    return Array.from(new Set(mockSermons.map((s) => s.preacher))).sort()
  },

  async getNeighbors(id: string): Promise<{ prev: Sermon | null; next: Sermon | null }> {
    const sorted = sortByDateDesc(mockSermons)
    const idx = sorted.findIndex((s) => s.id === id)
    if (idx === -1) return { prev: null, next: null }
    return {
      prev: idx > 0 ? sorted[idx - 1] : null,
      next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
    }
  },
}
