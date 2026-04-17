import { useEffect, useState } from 'react'
import PageBanner from '../components/common/PageBanner'
import Container from '../components/common/Container'
import Pagination from '../components/common/Pagination'
import SermonCard from '../components/sermons/SermonCard'
import SermonFilters from '../components/sermons/SermonFilters'
import { sermonService, type SermonSeries } from '../services/sermonService'
import type { Sermon } from '../types/sermon'

const PAGE_SIZE = 9

export default function SermonsPage() {
  const [keyword, setKeyword] = useState('')
  const [series, setSeries] = useState<SermonSeries | ''>('')
  const [page, setPage] = useState(1)
  const [items, setItems] = useState<Sermon[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setPage(1)
  }, [keyword, series])

  useEffect(() => {
    setLoading(true)
    sermonService
      .search({ keyword, series, page, pageSize: PAGE_SIZE })
      .then((res) => {
        setItems(res.items)
        setTotal(res.total)
      })
      .finally(() => setLoading(false))
  }, [keyword, series, page])

  return (
    <>
      <PageBanner title="설교" subtitle="달라스 예닮교회의 설교 영상과 말씀입니다." />
      <section className="py-12 md:py-16">
        <Container>
          <SermonFilters
            keyword={keyword}
            series={series}
            onKeywordChange={setKeyword}
            onSeriesChange={setSeries}
          />

          <div className="mt-6 text-sm text-gray-500">
            총 <span className="font-semibold text-gray-900">{total}</span>개 설교
          </div>

          {loading ? (
            <div className="mt-12 text-center text-gray-400">불러오는 중…</div>
          ) : items.length === 0 ? (
            <div className="mt-16 text-center text-gray-500">
              검색 결과가 없습니다.
            </div>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((s) => (
                <SermonCard key={s.id} sermon={s} />
              ))}
            </div>
          )}

          <Pagination
            page={page}
            total={total}
            pageSize={PAGE_SIZE}
            onChange={(p) => {
              setPage(p)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="mt-12"
          />
        </Container>
      </section>
    </>
  )
}
