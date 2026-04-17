import { siteInfo } from '../../constants/siteInfo'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-white font-semibold text-lg">{siteInfo.name}</h3>
            <p className="mt-2 text-sm text-gray-400">{siteInfo.slogan}</p>
          </div>
          <div className="text-sm">
            <p>{siteInfo.address}</p>
            <p className="mt-1">전화: {siteInfo.phone}</p>
            <p className="mt-1">이메일: {siteInfo.email}</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-xs text-gray-500">
          {siteInfo.copyright}
        </div>
      </div>
    </footer>
  )
}
