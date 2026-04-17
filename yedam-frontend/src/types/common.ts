export interface Paginated<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
}

export interface ContactForm {
  name: string
  phone: string
  email?: string
  message: string
}
