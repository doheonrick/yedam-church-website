import { useParams } from 'react-router-dom'

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>()
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">공지 상세</h1>
      <p className="mt-4 text-gray-600">ID: {id}</p>
    </div>
  )
}
