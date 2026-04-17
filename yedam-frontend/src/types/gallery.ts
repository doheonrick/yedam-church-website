export type GalleryCategory = '예배' | '행사' | '선교' | '교제'

export interface GalleryItem {
  id: string
  title: string
  category: GalleryCategory
  date: string
  imageUrl: string
  thumbnailUrl?: string
  description?: string
}
