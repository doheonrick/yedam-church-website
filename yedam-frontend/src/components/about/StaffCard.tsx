import Card from '../common/Card'
import type { Staff, StaffRole } from '../../types/staff'

interface StaffCardProps {
  staff: Staff
}

const honorific: Record<StaffRole, string> = {
  담임목사: '목사',
  부목사: '목사',
  '영어회중 목사': '목사',
  전도사: '전도사',
  장로: '장로',
  권사: '권사',
  집사: '집사',
}

export default function StaffCard({ staff }: StaffCardProps) {
  return (
    <Card>
      <div className="aspect-square bg-warm-stone flex items-center justify-center text-gray-300">
        {staff.photoUrl ? (
          <img src={staff.photoUrl} alt={staff.name} className="w-full h-full object-cover" />
        ) : (
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        )}
      </div>
      <Card.Body>
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy">
          {staff.role}
          {staff.department && ` · ${staff.department}`}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-gray-900">
          {staff.name} {honorific[staff.role]}
        </h3>
        {staff.spouse && <p className="mt-1 text-sm text-gray-600">{staff.spouse}</p>}
        {staff.introduction && (
          <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">
            {staff.introduction}
          </p>
        )}
        {(staff.email || staff.phone) && (
          <div className="mt-3 space-y-0.5 text-xs text-gray-500">
            {staff.phone && <p>☎ {staff.phone}</p>}
            {staff.email && <p>✉ {staff.email}</p>}
          </div>
        )}
      </Card.Body>
    </Card>
  )
}
