import { useParams } from 'react-router-dom'

export default function SermonDetailPage() {
  const { id } = useParams<{ id: string }>()
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">설교 상세</h1>
      <p className="mt-4 text-gray-600">ID: {id}</p>
    </div>
  )
}
