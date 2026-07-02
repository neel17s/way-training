import ChatBot from "@/components/ChatBot";

export default function ChatPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Training{" "}
          <span className="italic text-green-800">Assistants</span>
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Chat with our live avatar or use the text assistant for quick answers
          about Way Education.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Avatar */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">Live Avatar</span>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden h-[calc(100vh-14rem)]">
            <iframe
              src="https://embed.liveavatar.com/v1/65aceda5-cdad-45be-bf19-ea091713e0d1?orientation=horizontal"
              allow="microphone"
              title="LiveAvatar Embed"
              className="w-full h-full border-0"
            />
          </div>
        </div>

        {/* Text Assistant */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Text Assistant</span>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden h-[calc(100vh-14rem)]">
            <ChatBot />
          </div>
        </div>
      </div>
    </div>
  );
}
