"use client";

import { useState, useRef, useEffect } from "react";
import { faqEntries } from "@/data/faq";

interface Message {
  role: "user" | "bot";
  text: string;
}

function findResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const entry of faqEntries) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.response;
    }
  }
  return "I don't have an answer for that yet. Please contact your training manager for more details.";
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I'm your Way Training assistant. Ask me anything about Way Education's services, destinations, sales techniques, or the application process.",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);

    setTimeout(() => {
      const response = findResponse(userMsg);
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
    }, 400);
  }

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-green-800 text-white rounded-br-md"
                  : "bg-gray-100 text-gray-800 rounded-bl-md"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSend}
        className="border-t border-gray-200 bg-white p-4"
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-sm text-gray-900 placeholder-gray-400"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-green-800 hover:bg-green-900 text-white text-sm font-medium rounded-xl transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
