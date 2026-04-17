import { mockSermons } from '../data/mockSermons'
import type { Sermon } from '../types/sermon'

export const sermonService = {
  async getAll(): Promise<Sermon[]> {
    return [...mockSermons].sort((a, b) => b.date.localeCompare(a.date))
  },

  async getById(id: string): Promise<Sermon | null> {
    return mockSermons.find((s) => s.id === id) ?? null
  },

  async getLatest(limit = 3): Promise<Sermon[]> {
    const sorted = [...mockSermons].sort((a, b) => b.date.localeCompare(a.date))
    return sorted.slice(0, limit)
  },
}
