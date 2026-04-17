import { useState } from 'react'
import Button from '../common/Button'
import { siteInfo } from '../../constants/siteInfo'

interface FormState {
  name: string
  email: string
  message: string
}

const INITIAL: FormState = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = '이름을 입력해 주세요.'
    if (!form.email.trim()) next.email = '이메일을 입력해 주세요.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = '올바른 이메일 형식이 아닙니다.'
    }
    if (!form.message.trim()) next.message = '문의 내용을 입력해 주세요.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    // 백엔드 연동 전까지는 mailto: 로 사용자 메일 클라이언트 열기
    const subject = `[홈페이지 문의] ${form.name}`
    const body = `이름: ${form.name}\n이메일: ${form.email}\n\n${form.message}`
    const href = `mailto:${siteInfo.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    window.location.href = href
  }

  const inputBase =
    'w-full px-3 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold'
  const labelBase = 'block text-sm font-medium text-gray-700 mb-1.5'

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelBase}>
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={`${inputBase} ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
            placeholder="홍길동"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className={labelBase}>
            이메일 <span className="text-red-500">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={`${inputBase} ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelBase}>
          문의 내용 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={6}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${inputBase} ${errors.message ? 'border-red-400' : 'border-gray-300'} resize-none`}
          placeholder="문의하실 내용을 자유롭게 작성해 주세요."
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-gray-500">
          전송 시 메일 앱이 열리며, 보내기 버튼을 누르면 교회 사무국으로 전달됩니다.
        </p>
        <Button type="submit" variant="primary">
          보내기
        </Button>
      </div>
    </form>
  )
}
