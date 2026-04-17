import { mockGallery } from '../data/mockGallery'
import type { GalleryItem, GalleryCategory } from '../types/gallery'
import type { Paginated } from '../types/common'

export const GALLERY_CATEGORIES: GalleryCategory[] = ['예배', '행사', '선교', '교제']

export interface GalleryQuery {
  category?: GalleryCategory | ''
  page?: number
  pageSize?: number
}

function sortByDateDesc(items: GalleryItem[]): GalleryItem[] {
  return [...items].sort((a, b) => b.date.localeCompare(a.date))
}

function applyFilters(items: GalleryItem[], q: GalleryQuery): GalleryItem[] {
  return items.filter((g) => {
    if (q.category && g.category !== q.category) return false
    return true
  })
}

export const galleryService = {
  async getAll(): Promise<GalleryItem[]> {
    return sortByDateDesc(mockGallery)
  },

  async getById(id: string): Promise<GalleryItem | null> {
    return mockGallery.find((g) => g.id === id) ?? null
  },

  async search(query: GalleryQuery): Promise<Paginated<GalleryItem>> {
    const page = query.page ?? 1
    const pageSize = query.pageSize ?? 12
    const filtered = sortByDateDesc(applyFilters(mockGallery, query))
    const start = (page - 1) * pageSize
    return {
      items: filtered.slice(start, start + pageSize),
      total: filtered.length,
      page,
      pageSize,
    }
  },
}
