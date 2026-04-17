import type { GalleryItem } from '../../types/gallery'
import { formatDate } from '../../utils/formatDate'

interface GalleryGridProps {
  items: GalleryItem[]
  onItemClick: (index: number) => void
}

export default function GalleryGrid({ items, onItemClick }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {items.map((item, idx) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onItemClick(idx)}
          className="group relative aspect-square overflow-hidden rounded-md bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <img
            src={item.thumbnailUrl ?? item.imageUrl}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-xs text-blue-200">{item.category}</p>
            <p className="mt-0.5 text-sm font-medium text-white line-clamp-1">{item.title}</p>
            <p className="text-xs text-gray-300">{formatDate(item.date)}</p>
          </div>
        </button>
      ))}
    </div>
  )
}
