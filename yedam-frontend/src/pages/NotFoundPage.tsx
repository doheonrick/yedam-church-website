import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 text-gray-600">페이지를 찾을 수 없습니다.</p>
      <Link to="/" className="mt-6 inline-block text-blue-600 hover:underline">
        홈으로 돌아가기
      </Link>
    </div>
  )
}
