import { useEffect, useState } from 'react'
import PageBanner from '../components/common/PageBanner'
import Container from '../components/common/Container'
import Pagination from '../components/common/Pagination'
import NewsListItem from '../components/news/NewsListItem'
import NewsFilters from '../components/news/NewsFilters'
import { newsService } from '../services/newsService'
import type { News, NewsCategory } from '../types/news'

const PAGE_SIZE = 10

export default function NewsPage() {
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState<NewsCategory | ''>('')
  const [page, setPage] = useState(1)
  const [items, setItems] = useState<News[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setPage(1)
  }, [keyword, category])

  useEffect(() => {
    setLoading(true)
    newsService
      .search({ keyword, category, page, pageSize: PAGE_SIZE })
      .then((res) => {
        setItems(res.items)
        setTotal(res.total)
      })
      .finally(() => setLoading(false))
  }, [keyword, category, page])

  return (
    <>
      <PageBanner title="예닮 소식" subtitle="달라스 예닮교회의 공지사항과 행사 소식입니다." />
      <section className="py-12 md:py-16">
        <Container>
          <NewsFilters
            keyword={keyword}
            category={category}
            onKeywordChange={setKeyword}
            onCategoryChange={setCategory}
          />

          <div className="mt-6 text-sm text-gray-500">
            총 <span className="font-semibold text-gray-900">{total}</span>건
          </div>

          {loading ? (
            <div className="mt-12 text-center text-gray-400">불러오는 중…</div>
          ) : items.length === 0 ? (
            <div className="mt-16 text-center text-gray-500">검색 결과가 없습니다.</div>
          ) : (
            <ul className="mt-4 border-t border-gray-200">
              {items.map((n) => (
                <li key={n.id}>
                  <NewsListItem news={n} />
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
