import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Training <span className="italic text-green-800">Courses</span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl">
          Master every aspect of Way Education's service — from initial
          counselling through UCAS and Common App applications to post-arrival
          support.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.slug} {...course} />
        ))}
      </div>

      {/* Program Fees */}
      <section className="mt-12 bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-100">
        <h2 className="text-lg font-bold text-gray-900 mb-3">
          Program <span className="italic text-green-800">Fees</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="font-semibold text-gray-900">UCAS Program (UK)</div>
            <div className="text-2xl font-bold text-green-800 mt-1">£2,999</div>
            <div className="text-gray-500">+ VAT · 6 milestones</div>
            <ul className="mt-3 space-y-1 text-gray-600 text-xs">
              <li>• Course & university guidance</li>
              <li>• Personal statement & application</li>
              <li>• Interview preparation</li>
              <li>• Results & Clearing support</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="font-semibold text-gray-900">
              Common App Program (US)
            </div>
            <div className="text-2xl font-bold text-green-800 mt-1">£2,999</div>
            <div className="text-gray-500">+ VAT · Full application cycle</div>
            <ul className="mt-3 space-y-1 text-gray-600 text-xs">
              <li>• Profile & extracurricular planning</li>
              <li>• Personal & supplemental essays</li>
              <li>• EA/ED strategy</li>
              <li>• Scholarship & financial aid support</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
