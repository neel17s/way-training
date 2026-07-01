import { notFound } from "next/navigation";
import { getCourseBySlug, courses } from "@/data/courses";
import { getVideosByCategory } from "@/data/videos";
import VideoCard from "@/components/VideoCard";
import Link from "next/link";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const courseVideos = getVideosByCategory(slug);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Back link */}
      <Link
        href="/courses"
        className="inline-flex items-center text-sm text-green-800 hover:text-green-900 mb-8"
      >
        ← All Courses
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="text-4xl mb-3">{course.icon}</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          {course.title}
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl">
          {course.description}
        </p>
        <div className="mt-4 text-sm text-gray-400">
          {courseVideos.length} video{courseVideos.length !== 1 ? "s" : ""} in
          this course
        </div>
      </div>

      {/* Videos */}
      {courseVideos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-xl">
          <p className="text-gray-500">
            Videos coming soon. Check back later.
          </p>
        </div>
      )}
    </div>
  );
}
