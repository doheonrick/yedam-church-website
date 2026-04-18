import { siteInfo } from '../../constants/siteInfo'

export default function ContactMap() {
  const query = encodeURIComponent(siteInfo.address)
  // API key 없이 동작하는 Google Maps embed (place 검색)
  const src = `https://www.google.com/maps?q=${query}&output=embed`

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 bg-warm-cream">
      <div className="aspect-[16/9] sm:aspect-[16/7]">
        <iframe
          src={src}
          title="달라스 예닮교회 위치"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
      <div className="px-5 py-3 flex items-center justify-between text-sm">
        <span className="text-gray-600 truncate">{siteInfo.address}</span>
        <a
          href={`https://maps.google.com/?q=${query}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 shrink-0 text-brand-navy hover:underline"
        >
          큰 지도로 보기 →
        </a>
      </div>
    </div>
  )
}
