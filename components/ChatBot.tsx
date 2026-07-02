"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const SUGGESTED_PROMPTS = [
  "Tell me about Way Education's UCAS program",
  "How do I handle a parent who says it's too expensive?",
  "What are the key selling points for studying in the UK?",
  "Tell me about Smayana's success story at LSE",
  "How does the Common App program work?",
  "What documents do students need for a UK visa?",
];

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  text: "Hi! I'm your Way Training assistant. I can help with anything about Way Education — our services, UCAS & Common App programs, destinations, sales techniques, and student case studies. What would you like to know?",
};

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend(text?: string) {
    const userMsg = (text || input).trim();
    if (!userMsg || loading) return;

    setInput("");
    setShowSuggestions(false);
    const userMessage: Message = { role: "user", text: userMsg };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const allMessages = [...messages, userMessage].map((m) => ({
        role: m.role === "assistant" ? "model" : m.role,
        parts: m.text,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: allMessages }),
      });

      if (!res.ok) throw new Error("Failed to get response");

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.response },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, something went wrong. Please try again or contact your training manager.",
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-green-800 text-white rounded-br-md"
                  : "bg-gray-100 text-gray-800 rounded-bl-md"
              }`}
            >
              {msg.text.split("\n").map((line, j) => {
                // Simple bold rendering
                const parts = line.split(/\*\*(.*?)\*\*/g);
                return (
                  <span key={j}>
                    {parts.map((part, k) =>
                      k % 2 === 1 ? (
                        <strong key={k}>{part}</strong>
                      ) : (
                        <span key={k}>{part}</span>
                      )
                    )}
                    {j < msg.text.split("\n").length - 1 && <br />}
                  </span>
                );
              })}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Suggested Prompts */}
      {showSuggestions && (
        <div className="px-4 pb-2">
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-800 hover:bg-green-50 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="border-t border-gray-200 bg-white p-4">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question..."
            disabled={loading}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-sm text-gray-900 placeholder-gray-400 disabled:bg-gray-50"
          />
          <button
            onClick={() => handleSend()}
            disabled={loading || !input.trim()}
            className="px-6 py-3 bg-green-800 hover:bg-green-900 disabled:bg-gray-300 text-white text-sm font-medium rounded-xl transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
