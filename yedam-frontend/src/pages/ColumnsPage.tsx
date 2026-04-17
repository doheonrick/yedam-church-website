import { useEffect, useState } from 'react'
import PageBanner from '../components/common/PageBanner'
import Container from '../components/common/Container'
import Pagination from '../components/common/Pagination'
import ColumnListItem from '../components/columns/ColumnListItem'
import { columnService, COLUMN_CATEGORIES } from '../services/columnService'
import type { Column, ColumnCategory } from '../types/column'

const PAGE_SIZE = 10

export default function ColumnsPage() {
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState<ColumnCategory | ''>('')
  const [page, setPage] = useState(1)
  const [items, setItems] = useState<Column[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setPage(1)
  }, [keyword, category])

  useEffect(() => {
    setLoading(true)
    columnService
      .search({ keyword, category, page, pageSize: PAGE_SIZE })
      .then((res) => {
        setItems(res.items)
        setTotal(res.total)
      })
      .finally(() => setLoading(false))
  }, [keyword, category, page])

  return (
    <>
      <PageBanner title="목회칼럼" subtitle="이우철 담임목사의 목회 칼럼입니다." />
      <section className="py-12 md:py-16">
        <Container>
          <div className="space-y-4">
            <div className="relative">
              <input
                type="search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="제목, 내용, 저자로 검색"
                className="w-full pl-10 pr-3 py-2.5 text-sm border border-warm-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
              />
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text pointer-events-none"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>

            <div className="flex flex-wrap gap-2">
              <FilterChip
                label="전체"
                active={category === ''}
                onClick={() => setCategory('')}
              />
              {COLUMN_CATEGORIES.map((c) => (
                <FilterChip
                  key={c}
                  label={c}
                  active={category === c}
                  onClick={() => setCategory(c)}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 text-sm text-muted-text">
            총 <span className="font-semibold text-warm-text">{total}</span>건
          </div>

          {loading ? (
            <div className="mt-12 text-center text-muted-text">불러오는 중…</div>
          ) : items.length === 0 ? (
            <div className="mt-16 text-center text-muted-text">검색 결과가 없습니다.</div>
          ) : (
            <ul className="mt-4 border-t border-warm-border">
              {items.map((c) => (
                <li key={c.id}>
                  <ColumnListItem column={c} />
                </li>
              ))}
            </ul>
          )}

          <Pagination
            page={page}
            total={total}
            pageSize={PAGE_SIZE}
            onChange={(p) => {
              setPage(p)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="mt-10"
          />
        </Container>
      </section>
    </>
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
          : 'bg-white text-warm-text border-warm-border hover:border-brand-gold hover:text-brand-navy'
      }`}
    >
      {label}
    </button>
  )
}
