import { videos } from "@/data/videos";
import { courses } from "@/data/courses";
import VideoCard from "@/components/VideoCard";

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Welcome, <span className="italic text-green-800">Way Agents</span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl">
          Your training hub for mastering Way Education's services, UCAS &amp;
          Common App programs, and the study abroad landscape across UK, US,
          Canada, and Australia.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/courses"
            className="inline-flex items-center px-5 py-2.5 bg-green-800 hover:bg-green-900 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Browse Courses
          </a>
          <a
            href="/chat"
            className="inline-flex items-center px-5 py-2.5 bg-white border border-gray-300 hover:border-green-300 text-gray-700 text-sm font-medium rounded-lg transition-colors"
          >
            Ask Training Assistant
          </a>
        </div>
      </section>

      {/* Welcome Video */}
      <section className="mb-16">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Welcome <span className="italic text-green-800">Video</span>
            </h2>
            <p className="text-sm text-gray-500">
              A quick introduction to Way Education's mission and how you can help students on their study abroad journey.
            </p>
          </div>
          <div className="relative aspect-video max-w-3xl mx-auto mb-6 px-6 sm:px-8">
            <iframe
              src="https://app.heygen.com/embeds/cc732886c7c24bf69abc1e3e5c6ff0c1"
              title="Way Education Welcome Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {[
          { label: "Training Videos", value: videos.length },
          { label: "Course Modules", value: courses.length },
          { label: "Destinations", value: 4 },
          { label: "Case Studies", value: 3 },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-gray-200 p-5 text-center"
          >
            <div className="text-2xl font-bold text-green-800">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Key Info Banner */}
      <section className="mb-16 bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-100">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Quick <span className="italic text-green-800">Reference</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-semibold text-gray-900 mb-1">UCAS Program</div>
            <div className="text-gray-600">
              6 milestones · 5 university choices · £2,999 + VAT
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-900 mb-1">
              Common App Program
            </div>
            <div className="text-gray-600">
              Full US application support · Essays & strategy · £2,999 + VAT
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-900 mb-1">
              Destinations Covered
            </div>
            <div className="text-gray-600">
              UK · US · Canada · Australia
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section>
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Start <span className="italic text-green-800">Here</span>
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Essential training modules for new agents
            </p>
          </div>
          <a
            href="/courses"
            className="text-sm font-medium text-green-800 hover:text-green-900"
          >
            View all courses →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(0, 6).map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </section>

      {/* Course Categories */}
      <section className="mt-16">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Training <span className="italic text-green-800">Modules</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <a
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="flex items-start gap-4 bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md hover:border-green-200 transition-all"
            >
              <span className="text-2xl mt-0.5">{course.icon}</span>
              <div>
                <div className="font-medium text-gray-900">{course.title}</div>
                <div className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {course.description}
                </div>
                <div className="text-xs text-green-800 font-medium mt-2">
                  {course.videoCount} videos
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Founder Quote */}
      <section className="mt-16 bg-gray-50 rounded-2xl p-6 sm:p-8">
        <blockquote className="text-gray-700 italic leading-relaxed">
          "At Way Education, we don't just help you apply. We walk with you
          every step of the journey."
        </blockquote>
        <div className="mt-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold text-sm">
            JR
          </div>
          <div>
            <div className="font-semibold text-gray-900 text-sm">
              Jay Ruparelia
            </div>
            <div className="text-xs text-gray-500">
              Founder, Way Education · 20+ years in education
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
