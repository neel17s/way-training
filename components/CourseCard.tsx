import Link from "next/link";

interface CourseCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
  videoCount: number;
}

export default function CourseCard({
  slug,
  title,
  description,
  icon,
  videoCount,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${slug}`}
      className="group block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-green-200 transition-all"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold text-gray-900 group-hover:text-green-900 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-500 line-clamp-2">{description}</p>
      <div className="mt-4 flex items-center gap-2 text-sm text-green-800 font-medium">
        <span>{videoCount} videos</span>
        <span className="text-gray-300">→</span>
      </div>
    </Link>
  );
}
