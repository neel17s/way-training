export default function AdminPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center py-24">
        <div className="text-5xl mb-6">🔒</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Admin Dashboard
        </h1>
        <p className="text-lg text-gray-500 max-w-md mx-auto">
          Content management and agent progress tracking coming soon.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { label: "Manage Courses", status: "Coming soon" },
            { label: "Agent Progress", status: "Coming soon" },
            { label: "FAQ Editor", status: "Coming soon" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-gray-50 rounded-xl p-4 border border-gray-200"
            >
              <div className="font-medium text-gray-900 text-sm">
                {item.label}
              </div>
              <div className="mt-1 text-xs text-gray-400">{item.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
