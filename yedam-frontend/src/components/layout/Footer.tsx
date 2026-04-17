import { siteInfo } from '../../constants/siteInfo'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-white font-semibold text-lg">{siteInfo.name}</h3>
            <p className="mt-1 text-xs text-gray-500">
              {siteInfo.nameEn} · {siteInfo.nickname}
            </p>
            <p className="mt-3 text-sm text-gray-400">{siteInfo.slogan}</p>
          </div>
          <div className="text-sm space-y-1">
            <p className="text-white font-semibold mb-2">Contact</p>
            <p>{siteInfo.address}</p>
            <p>전화: {siteInfo.phone}</p>
            <p>문의: {siteInfo.phoneSecondary}</p>
          </div>
          <div className="text-sm space-y-1">
            <p className="text-white font-semibold mb-2">Connect</p>
            <p>
              Instagram:{' '}
              <a
                href={`https://www.instagram.com/${siteInfo.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                @{siteInfo.instagram}
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-xs text-gray-500">
          {siteInfo.copyright}
        </div>
      </div>
    </footer>
  )
}
