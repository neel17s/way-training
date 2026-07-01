import Link from "next/link";

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
}

export default function VideoCard({
  title,
  description,
  youtubeId,
  duration,
}: VideoCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative aspect-video bg-gray-100">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-gray-900 leading-snug">{title}</h3>
          <span className="text-xs text-gray-400 whitespace-nowrap mt-0.5">
            {duration}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
