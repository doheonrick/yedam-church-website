import Card from '../common/Card'
import type { Staff } from '../../types/staff'

interface StaffCardProps {
  staff: Staff
}

export default function StaffCard({ staff }: StaffCardProps) {
  return (
    <Card>
      <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-300">
        {staff.photoUrl ? (
          <img src={staff.photoUrl} alt={staff.name} className="w-full h-full object-cover" />
        ) : (
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        )}
      </div>
      <Card.Body>
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
          {staff.role}
          {staff.department && ` · ${staff.department}`}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-gray-900">{staff.name}</h3>
        {staff.introduction && (
          <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">
            {staff.introduction}
          </p>
        )}
      </Card.Body>
    </Card>
  )
}
