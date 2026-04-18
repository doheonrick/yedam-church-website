import PageBanner from '../components/common/PageBanner'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import ContactInfo from '../components/contact/ContactInfo'
import ContactMap from '../components/contact/ContactMap'
import ContactForm from '../components/contact/ContactForm'

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="오시는 길"
        subtitle="달라스 예닮교회로 찾아오시는 길과 문의 방법입니다."
      />

      <section className="py-12 md:py-16">
        <Container>
          <SectionTitle title="교회 정보" />
          <div className="mt-8">
            <ContactInfo />
          </div>

          <div className="mt-12">
            <ContactMap />
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-warm-cream">
        <Container size="md">
          <SectionTitle title="문의하기" description="궁금하신 점이 있다면 언제든 연락 주세요." />
          <div className="mt-8 p-6 sm:p-8 bg-white rounded-lg border border-gray-200">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  )
}
