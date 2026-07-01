export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <div className="mb-2">
              <span className="font-bold text-green-900">Way</span>
              <span className="font-light text-gray-600 ml-1">Education</span>
            </div>
            <p className="text-sm text-gray-500">
              Sales Agent Training Portal — Internal Use Only
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-2">
              Contact
            </div>
            <div className="text-sm text-gray-500 space-y-1">
              <div>+44 7958 753305</div>
              <div>admin@way-edu.com</div>
              <div>www.way-edu.com</div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-2">
              Quick Links
            </div>
            <div className="text-sm text-gray-500 space-y-1">
              <div>
                <a href="/" className="hover:text-green-800 transition-colors">
                  Dashboard
                </a>
              </div>
              <div>
                <a
                  href="/courses"
                  className="hover:text-green-800 transition-colors"
                >
                  Courses
                </a>
              </div>
              <div>
                <a
                  href="/chat"
                  className="hover:text-green-800 transition-colors"
                >
                  Training Assistant
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Way Education. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
