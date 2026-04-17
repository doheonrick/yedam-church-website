import PageBanner from '../components/common/PageBanner'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'

interface UpcomingFeature {
  emoji: string
  title: string
  description: string
}

const upcomingFeatures: UpcomingFeature[] = [
  {
    emoji: '📣',
    title: '교회 소식 나눔',
    description: '성도님들 사이에서 서로의 기쁨과 감사를 나누는 공간입니다.',
  },
  {
    emoji: '🙏',
    title: '기도 제목 공유',
    description: '가족과 공동체의 기도 제목을 올리고 함께 중보합니다.',
  },
  {
    emoji: '💬',
    title: '성도 게시판',
    description: '자유롭게 질문하고 나누는 예닮 가족의 광장입니다.',
  },
]

export default function ForumPage() {
  return (
    <>
      <PageBanner title="예닮 나눔터" subtitle="성도들의 나눔과 소통 공간" />

      {/* 로그인 안내 메인 */}
      <section className="min-h-[40vh] flex items-center justify-center py-16 md:py-20">
        <Container size="md">
          <div className="text-center max-w-lg mx-auto">
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-gold-pale text-brand-gold"
              aria-hidden="true"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </div>

            <h2 className="mt-6 text-2xl md:text-3xl font-bold text-warm-text tracking-[-0.02em]">
              로그인 후 이용 가능합니다
            </h2>
            <p className="mt-4 text-base text-muted-text leading-relaxed">
              예닮 나눔터는 등록 성도 전용 공간입니다.
              <br />
              로그인 기능은 곧 제공될 예정입니다.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/contact" variant="primary">
                교회 문의하기
              </Button>
              <Button to="/" variant="outline">
                홈으로 돌아가기
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 준비 중인 기능 프리뷰 */}
      <section className="bg-warm-cream py-16 md:py-20">
        <Container>
          <SectionTitle
            eyebrow="Coming Soon"
            title="준비 중인 기능"
            description="예닮 나눔터에서 앞으로 제공될 주요 기능들입니다."
            align="center"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingFeatures.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl border border-warm-border p-6 opacity-60"
              >
                <div className="text-4xl" aria-hidden="true">
                  {f.emoji}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-navy tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-muted-text leading-relaxed">
                  {f.description}
                </p>
                <span className="mt-4 inline-block text-xs font-medium text-muted-text bg-warm-stone px-2.5 py-1 rounded-full">
                  준비 중
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
