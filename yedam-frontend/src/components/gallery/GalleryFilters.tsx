import { GALLERY_CATEGORIES } from '../../services/galleryService'
import type { GalleryCategory } from '../../types/gallery'

interface GalleryFiltersProps {
  category: GalleryCategory | ''
  onCategoryChange: (v: GalleryCategory | '') => void
}

export default function GalleryFilters({ category, onCategoryChange }: GalleryFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <FilterChip
        label="전체"
        active={category === ''}
        onClick={() => onCategoryChange('')}
      />
      {GALLERY_CATEGORIES.map((c) => (
        <FilterChip
          key={c}
          label={c}
          active={category === c}
          onClick={() => onCategoryChange(c)}
        />
      ))}
    </div>
  )
}

interface FilterChipProps {
  label: string
  active: boolean
  onClick: () => void
}

function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
        active
          ? 'bg-brand-navy text-white border-brand-navy'
          : 'bg-white text-gray-700 border-gray-300 hover:border-brand-gold hover:text-brand-navy'
      }`}
    >
      {label}
    </button>
  )
}
