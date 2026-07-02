"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { faqEntries, courseLabels } from "@/data/faq";

interface Message {
  role: "user" | "assistant";
  text: string;
}

function scoreFaq(input: string, keywords: string[]): number {
  const lower = input.toLowerCase();
  let score = 0;

  for (const keyword of keywords) {
    if (lower.includes(keyword)) {
      // Longer keyword matches = more specific = higher score
      score += keyword.length * 3;
    }
    // Partial word matching
    const words = lower.split(/\s+/);
    for (const word of words) {
      if (keyword.includes(word) && word.length >= 3) {
        score += 2;
      }
      if (word.includes(keyword.split(" ")[0]) && keyword.split(" ")[0].length >= 3) {
        score += 1;
      }
    }
  }

  return score;
}

function findBestResponse(input: string): { response: string; courseRec?: string } | null {
  let bestMatch: { response: string; courseRec?: string; score: number } | null = null;

  for (const entry of faqEntries) {
    const score = scoreFaq(input, entry.keywords);
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = {
        response: entry.response,
        courseRec: entry.courseRec,
        score,
      };
    }
  }

  if (bestMatch && bestMatch.score >= 4) {
    return { response: bestMatch.response, courseRec: bestMatch.courseRec };
  }
  return null;
}

function buildResponse(baseResponse: string, courseRec?: string): string {
  let response = baseResponse;

  if (courseRec && courseLabels[courseRec]) {
    response += `\n\n📚 **Recommended course:** ${courseLabels[courseRec]}\nVisit the Courses page to watch training videos on this topic.`;
  }

  return response;
}

const SUGGESTED_PROMPTS = [
  "Tell me about the UCAS program",
  "How do I handle price objections?",
  "What are the UK's key selling points?",
  "Tell me about Smayana's LSE story",
  "How does the Common App work?",
  "What's included in Way's services?",
];

const QUICK_REPLIES: Record<string, string[]> = {
  "uc": ["Tell me more about UCAS", "What's the UCAS fee?", "How does the 6-milestone program work?"],
  "us": ["Tell me more about Common App", "What's the Common App fee?", "How does Early Action work?"],
  "uk": ["What are UK's key selling points?", "Tell me about the Graduate Route visa", "Which UK universities do you work with?"],
  "pric": ["What does Way charge?", "Is there a free consultation?", "What's included in the fee?"],
  "visa": ["What documents do I need?", "How does the visa process work?", "Do you do mock interviews?"],
};

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  text: "Hi! I'm your Way Training assistant. Ask me anything about Way Education's services, programs, destinations, sales techniques, or student case studies.",
};

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  function handleSend(text?: string) {
    const userMsg = (text || input).trim();
    if (!userMsg) return;

    setInput("");
    setShowSuggestions(false);
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);

    setTimeout(() => {
      const match = findBestResponse(userMsg);
      let responseText: string;

      if (match) {
        responseText = buildResponse(match.response, match.courseRec);
      } else {
        responseText =
          "I don't have a specific answer for that yet. I can help with:\n\n• Way's services and programs\n• UCAS (UK) and Common App (US) applications\n• Destination guides — UK, US, Canada, Australia\n• Sales techniques and objection handling\n• Student case studies\n• Pricing and visa information\n\nTry rephrasing your question, or contact your training manager for more details.";
      }

      setMessages((prev) => [...prev, { role: "assistant", text: responseText }]);
    }, 300);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  // Get contextual quick replies based on last message
  function getQuickReplies(): string[] {
    if (messages.length < 2) return [];
    const lastBotMsg = messages[messages.length - 1]?.text?.toLowerCase() || "";
    for (const [key, replies] of Object.entries(QUICK_REPLIES)) {
      if (lastBotMsg.includes(key)) return replies;
    }
    return [];
  }

  const quickReplies = getQuickReplies();

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
        <div ref={bottomRef} />
      </div>

      {/* Quick Replies */}
      {quickReplies.length > 0 && (
        <div className="px-4 pb-2">
          <div className="flex flex-wrap gap-2">
            {quickReplies.map((reply, i) => (
              <button
                key={i}
                onClick={() => handleSend(reply)}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-800 hover:bg-green-50 transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Suggested Prompts (initial) */}
      {showSuggestions && (
        <div className="px-4 pb-2">
          <p className="text-xs text-gray-400 mb-2">Try asking:</p>
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
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-sm text-gray-900 placeholder-gray-400"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim()}
            className="px-6 py-3 bg-green-800 hover:bg-green-900 disabled:bg-gray-300 text-white text-sm font-medium rounded-xl transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
