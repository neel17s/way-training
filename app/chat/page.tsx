import ChatBot from "@/components/ChatBot";

export default function ChatPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Training{" "}
          <span className="italic text-green-800">Assistant</span>
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Ask about Way Education's services, UCAS &amp; Common App programs,
          destinations, sales techniques, and student case studies.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden h-[calc(100vh-16rem)]">
        <ChatBot />
      </div>
    </div>
  );
}
