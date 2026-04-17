import { SERMON_SERIES, type SermonSeries } from '../../services/sermonService'

interface SermonFiltersProps {
  keyword: string
  series: SermonSeries | ''
  onKeywordChange: (v: string) => void
  onSeriesChange: (v: SermonSeries | '') => void
}

export default function SermonFilters({
  keyword,
  series,
  onKeywordChange,
  onSeriesChange,
}: SermonFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="search"
          value={keyword}
          onChange={(e) => onKeywordChange(e.target.value)}
          placeholder="제목, 본문, 설교자로 검색"
          className="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </div>

      <div className="flex flex-wrap gap-2">
        <FilterChip
          label="전체"
          active={series === ''}
          onClick={() => onSeriesChange('')}
        />
        {SERMON_SERIES.map((s) => (
          <FilterChip
            key={s}
            label={s}
            active={series === s}
            onClick={() => onSeriesChange(s)}
          />
        ))}
      </div>
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
          ? 'bg-blue-700 text-white border-blue-700'
          : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:text-blue-700'
      }`}
    >
      {label}
    </button>
  )
}
