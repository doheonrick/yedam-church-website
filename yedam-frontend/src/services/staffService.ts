import { mockStaff } from '../data/mockStaff'
import type { Staff, StaffRole } from '../types/staff'

const roleOrder: StaffRole[] = ['담임목사', '부목사', '전도사', '장로', '권사', '집사']

export const staffService = {
  async getAll(): Promise<Staff[]> {
    return [...mockStaff].sort(
      (a, b) => roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role)
    )
  },

  async getByRole(role: StaffRole): Promise<Staff[]> {
    return mockStaff.filter((s) => s.role === role)
  },
}
