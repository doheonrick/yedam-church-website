import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/formatDate'
import type { Column } from '../../types/column'

interface ColumnListItemProps {
  column: Column
}

const CATEGORY_STYLES: Record<Column['category'], string> = {
  '담임목사 칼럼': 'bg-brand-gold-pale text-brand-navy border-warm-border',
  '부목사 칼럼': 'bg-warm-stone text-warm-text border-warm-border',
}

export default function ColumnListItem({ column }: ColumnListItemProps) {
  return (
    <Link
      to={`/columns/${column.id}`}
      className="block group border-b border-warm-border py-5 px-2 hover:bg-warm-cream transition-colors"
    >
      <div className="flex items-start gap-3">
        <span
          className={`shrink-0 inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border ${
            CATEGORY_STYLES[column.category]
          }`}
        >
          {column.category}
        </span>

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-warm-text group-hover:text-brand-navy line-clamp-1">
            {column.title}
          </h3>
          {column.summary && (
            <p className="mt-1 text-sm text-muted-text line-clamp-2">{column.summary}</p>
          )}
        </div>

        <div className="shrink-0 text-right text-xs text-muted-text">
          <div>{formatDate(column.date)}</div>
          <div className="mt-0.5">{column.author}</div>
        </div>
      </div>
    </Link>
  )
}
