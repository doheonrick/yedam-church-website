import { useState } from 'react'
import PageBanner from '../components/common/PageBanner'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import { siteInfo } from '../constants/siteInfo'

const ZELLE_EMAIL = 'rockchurch.zelle@gmail.com'

export default function OfferingPage() {
  return (
    <>
      <PageBanner
        title="온라인 헌금"
        subtitle="언제 어디서든 마음을 담아 드리는 헌금에 동참하실 수 있습니다."
      />

      <section className="py-12 md:py-16">
        <Container size="md">
          <p className="text-center text-gray-600 leading-relaxed">
            예닮교회는 Zelle를 통한 온라인 헌금과 직접 헌금을 받고 있습니다.
            <br />
            헌금은 하나님께 드리는 예배의 한 부분이며, 교회의 사역과 선교에 귀하게 사용됩니다.
          </p>

          {/* Zelle */}
          <div className="mt-12">
            <SectionTitle eyebrow="Online" title="Zelle 송금" />
            <div className="mt-6 p-6 sm:p-8 rounded-lg border border-warm-border bg-brand-gold-pale">
              <p className="text-sm text-gray-700">
                미국 주요 은행 앱(Bank of America, Chase, Wells Fargo, Citi 등)의{' '}
                <span className="font-semibold">Zelle</span> 기능으로 아래 이메일에 송금해 주세요.
              </p>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Zelle 이메일
                </p>
                <CopyField value={ZELLE_EMAIL} />
              </div>
              <p className="mt-4 text-xs text-gray-600">
                ※ 송금 시 <span className="font-semibold">메모(Memo)</span>란에 헌금자 이름과
                헌금 종류를 함께 적어주세요. 예) <code className="px-1.5 py-0.5 bg-white rounded text-brand-navy">홍길동 / 십일조</code>
              </p>
            </div>
          </div>

          {/* 수표 / 직접 */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="p-6 rounded-lg border border-gray-200 bg-white">
              <h3 className="text-base font-semibold text-gray-900">수표 (Check)</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                수표를 작성하셔서 주일예배 중 헌금함에 넣으시거나 교회 사무실로 우편 발송해
                주세요.
              </p>
              <div className="mt-4 text-xs text-gray-500">
                <p>
                  <span className="font-semibold text-gray-700">받는 사람(Pay to):</span> 교회
                  사무국에 문의
                </p>
                <p className="mt-1">
                  <span className="font-semibold text-gray-700">우편 주소:</span>{' '}
                  {siteInfo.address}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 bg-white">
              <h3 className="text-base font-semibold text-gray-900">직접 헌금</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                주일예배 시간에 본당 입구에 비치된 헌금함을 통해 직접 드리실 수 있습니다.
              </p>
              <p className="mt-4 text-xs text-gray-500">
                예배 시간은{' '}
                <a href="/worship" className="text-brand-navy hover:underline">
                  예배 안내
                </a>
                에서 확인하실 수 있습니다.
              </p>
            </div>
          </div>

          {/* 문의 */}
          <div className="mt-12 p-5 rounded-md bg-warm-cream border border-gray-200 text-center">
            <p className="text-sm text-gray-700">
              헌금 관련 문의는 교회 사무국으로 연락 주세요.
            </p>
            <p className="mt-1 text-sm text-gray-600">
              <a href={`tel:${siteInfo.phone.replace(/-/g, '')}`} className="text-brand-navy hover:underline">
                {siteInfo.phone}
              </a>{' '}
              ·{' '}
              <a href={`mailto:${siteInfo.email}`} className="text-brand-navy hover:underline">
                {siteInfo.email}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}

interface CopyFieldProps {
  value: string
}

function CopyField({ value }: CopyFieldProps) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="mt-2 flex items-stretch gap-2">
      <div className="flex-1 px-4 py-2.5 bg-white border border-gray-300 rounded-md font-mono text-sm text-gray-900 select-all">
        {value}
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="px-4 py-2.5 text-sm font-medium rounded-md bg-brand-navy text-white hover:bg-brand-navy-dark transition-colors min-w-[80px]"
      >
        {copied ? '복사됨' : '복사'}
      </button>
    </div>
  )
}
