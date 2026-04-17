export type ColumnCategory = '담임목사 칼럼' | '부목사 칼럼'

export interface Column {
  id: string
  title: string
  category: ColumnCategory
  content: string
  date: string // 'YYYY-MM-DD'
  author: string
  summary?: string
}
