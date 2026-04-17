import { useEffect, useState } from 'react'
import Container from '../common/Container'
import StaffCard from './StaffCard'
import { staffService } from '../../services/staffService'
import type { Staff, StaffRole } from '../../types/staff'

const groupOrder: StaffRole[] = ['담임목사', '부목사', '전도사', '장로', '권사', '집사']

function groupByRole(items: Staff[]): Map<StaffRole, Staff[]> {
  const map = new Map<StaffRole, Staff[]>()
  for (const role of groupOrder) {
    map.set(role, [])
  }
  for (const item of items) {
    const arr = map.get(item.role)
    if (arr) arr.push(item)
  }
  return map
}

export default function StaffGrid() {
  const [staff, setStaff] = useState<Staff[]>([])

  useEffect(() => {
    staffService.getAll().then(setStaff)
  }, [])

  const grouped = groupByRole(staff)

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="space-y-16">
          {groupOrder.map((role) => {
            const members = grouped.get(role) ?? []
            if (members.length === 0) return null
            return (
              <div key={role}>
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-700 pb-3">
                  {role}
                </h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {members.map((member) => (
                    <StaffCard key={member.id} staff={member} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
