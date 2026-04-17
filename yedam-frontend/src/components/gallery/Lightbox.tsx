import { useEffect } from 'react'
import { formatDateKorean } from '../../utils/formatDate'
import type { GalleryItem } from '../../types/gallery'

interface LightboxProps {
  items: GalleryItem[]
  index: number
  onClose: () => void
  onIndexChange: (i: number) => void
}

export default function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const item = items[index]
  const hasPrev = index > 0
  const hasNext = index < items.length - 1

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft' && hasPrev) onIndexChange(index - 1)
      else if (e.key === 'ArrowRight' && hasNext) onIndexChange(index + 1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, hasPrev, hasNext, onClose, onIndexChange])

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex flex-col"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* 헤더 */}
      <div
        className="flex items-center justify-between px-4 sm:px-6 py-3 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-sm text-gray-300">
          {index + 1} / {items.length}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
          aria-label="닫기"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* 이미지 영역 */}
      <div
        className="flex-1 flex items-center justify-center px-4 sm:px-12 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {hasPrev && (
          <button
            type="button"
            onClick={() => onIndexChange(index - 1)}
            className="absolute left-2 sm:left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="이전"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        <img
          src={item.imageUrl}
          alt={item.title}
          className="max-w-full max-h-[75vh] object-contain"
        />

        {hasNext && (
          <button
            type="button"
            onClick={() => onIndexChange(index + 1)}
            className="absolute right-2 sm:right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="다음"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}
      </div>

      {/* 캡션 */}
      <div
        className="px-4 sm:px-6 py-4 text-white text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xs text-blue-300">{item.category}</p>
        <h3 className="mt-1 text-base sm:text-lg font-semibold">{item.title}</h3>
        <p className="mt-1 text-xs text-gray-400">{formatDateKorean(item.date)}</p>
        {item.description && (
          <p className="mt-2 text-sm text-gray-300 max-w-2xl mx-auto">{item.description}</p>
        )}
      </div>
    </div>
  )
}
