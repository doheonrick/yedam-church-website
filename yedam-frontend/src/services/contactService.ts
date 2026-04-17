import type { ContactForm } from '../types/common'

export interface ContactSubmitResult {
  ok: boolean
  message: string
}

export const contactService = {
  async submit(form: ContactForm): Promise<ContactSubmitResult> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    if (!form.name || !form.phone || !form.message) {
      return { ok: false, message: '필수 항목을 입력해주세요.' }
    }
    return { ok: true, message: '문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.' }
  },
}
