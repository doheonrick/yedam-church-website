interface SermonVideoEmbedProps {
  videoUrl?: string
}

function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
  ]
  for (const re of patterns) {
    const m = url.match(re)
    if (m) return m[1]
  }
  return null
}

export default function SermonVideoEmbed({ videoUrl }: SermonVideoEmbedProps) {
  if (!videoUrl) {
    return (
      <div className="aspect-video bg-gray-100 flex flex-col items-center justify-center text-gray-400">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M8 5v14l11-7z" />
        </svg>
        <p className="mt-3 text-sm">영상이 준비 중입니다.</p>
      </div>
    )
  }

  const youtubeId = extractYouTubeId(videoUrl)
  if (youtubeId) {
    return (
      <div className="aspect-video bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title="설교 영상"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="aspect-video">
      <video src={videoUrl} controls className="w-full h-full bg-black" />
    </div>
  )
}
