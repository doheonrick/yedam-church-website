import { mockColumns } from '../data/mockColumns'
import type { Column, ColumnCategory } from '../types/column'
import type { Paginated } from '../types/common'

export const COLUMN_CATEGORIES: ColumnCategory[] = ['담임목사 칼럼', '부목사 칼럼']

export interface ColumnQuery {
  keyword?: string
  category?: ColumnCategory | ''
  page?: number
  pageSize?: number
}

function sortByDateDesc(items: Column[]): Column[] {
  return [...items].sort((a, b) => b.date.localeCompare(a.date))
}

function applyFilters(items: Column[], q: ColumnQuery): Column[] {
  const keyword = q.keyword?.trim().toLowerCase()
  return items.filter((c) => {
    if (q.category && c.category !== q.category) return false
    if (keyword) {
      const hay =
        `${c.title} ${c.content} ${c.summary ?? ''} ${c.author} ${c.category}`.toLowerCase()
      if (!hay.includes(keyword)) return false
    }
    return true
  })
}

export const columnService = {
  async getAll(): Promise<Column[]> {
    return sortByDateDesc(mockColumns)
  },

  async getById(id: string): Promise<Column | null> {
    return mockColumns.find((c) => c.id === id) ?? null
  },

  async getLatest(limit = 5): Promise<Column[]> {
    return sortByDateDesc(mockColumns).slice(0, limit)
  },

  async search(query: ColumnQuery): Promise<Paginated<Column>> {
    const page = query.page ?? 1
    const pageSize = query.pageSize ?? 10
    const filtered = sortByDateDesc(applyFilters(mockColumns, query))
    const start = (page - 1) * pageSize
    return {
      items: filtered.slice(start, start + pageSize),
      total: filtered.length,
      page,
      pageSize,
    }
  },

  async getNeighbors(id: string): Promise<{ prev: Column | null; next: Column | null }> {
    const sorted = sortByDateDesc(mockColumns)
    const idx = sorted.findIndex((c) => c.id === id)
    if (idx === -1) return { prev: null, next: null }
    return {
      prev: idx > 0 ? sorted[idx - 1] : null,
      next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
    }
  },
}
