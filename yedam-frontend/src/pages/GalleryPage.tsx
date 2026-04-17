import { useEffect, useState } from 'react'
import PageBanner from '../components/common/PageBanner'
import Container from '../components/common/Container'
import Pagination from '../components/common/Pagination'
import GalleryFilters from '../components/gallery/GalleryFilters'
import GalleryGrid from '../components/gallery/GalleryGrid'
import Lightbox from '../components/gallery/Lightbox'
import { galleryService } from '../services/galleryService'
import type { GalleryItem, GalleryCategory } from '../types/gallery'

const PAGE_SIZE = 12

export default function GalleryPage() {
  const [category, setCategory] = useState<GalleryCategory | ''>('')
  const [page, setPage] = useState(1)
  const [items, setItems] = useState<GalleryItem[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  useEffect(() => {
    setPage(1)
  }, [category])

  useEffect(() => {
    setLoading(true)
    galleryService
      .search({ category, page, pageSize: PAGE_SIZE })
      .then((res) => {
        setItems(res.items)
        setTotal(res.total)
      })
      .finally(() => setLoading(false))
  }, [category, page])

  return (
    <>
      <PageBanner title="갤러리" subtitle="달라스 예닮교회의 사진들을 만나보세요." />

      <section className="py-12 md:py-16">
        <Container>
          <GalleryFilters category={category} onCategoryChange={setCategory} />

          <div className="mt-6 text-sm text-gray-500">
            총 <span className="font-semibold text-gray-900">{total}</span>장
          </div>

          {loading ? (
            <div className="mt-12 text-center text-gray-400">불러오는 중…</div>
          ) : items.length === 0 ? (
            <div className="mt-16 text-center text-gray-500">
              <svg
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="mx-auto text-gray-300"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <p className="mt-3">등록된 사진이 없습니다.</p>
            </div>
          ) : (
            <div className="mt-8">
              <GalleryGrid items={items} onItemClick={(i) => setLightboxIdx(i)} />
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

      {lightboxIdx !== null && (
        <Lightbox
          items={items}
          index={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onIndexChange={setLightboxIdx}
        />
      )}
    </>
  )
}
