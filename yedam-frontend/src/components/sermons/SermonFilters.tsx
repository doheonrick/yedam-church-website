interface SermonFiltersProps {
  keyword: string
  preacher: string
  preachers: string[]
  onKeywordChange: (v: string) => void
  onPreacherChange: (v: string) => void
}

export default function SermonFilters({
  keyword,
  preacher,
  preachers,
  onKeywordChange,
  onPreacherChange,
}: SermonFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
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
      <select
        value={preacher}
        onChange={(e) => onPreacherChange(e.target.value)}
        className="px-3 py-2.5 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:min-w-[160px]"
      >
        <option value="">전체 설교자</option>
        {preachers.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
    </div>
  )
}
