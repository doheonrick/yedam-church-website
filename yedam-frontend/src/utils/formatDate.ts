export function formatDate(isoDate: string): string {
  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) return isoDate
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}.${m}.${d}`
}

export function formatDateKorean(isoDate: string): string {
  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) return isoDate
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
}
