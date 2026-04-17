export type StaffRole = '담임목사' | '부목사' | '전도사' | '장로' | '권사' | '집사'

export interface Staff {
  id: string
  name: string
  role: StaffRole
  department?: string
  photoUrl?: string
  introduction?: string
  email?: string
}
