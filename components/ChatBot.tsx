"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { faqEntries, courseLabels } from "@/data/faq";

interface Message {
  role: "user" | "assistant";
  text: string;
}

interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
}

function scoreFaq(input: string, keywords: string[]): number {
  const lower = input.toLowerCase();
  let score = 0;

  for (const keyword of keywords) {
    if (lower.includes(keyword)) {
      score += keyword.length * 3;
    }
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
  ucas: ["Tell me more about UCAS", "What's the UCAS fee?", "How does the 6-milestone program work?"],
  common: ["Tell me more about Common App", "What's the Common App fee?", "How does Early Action work?"],
  uk: ["What are UK's key selling points?", "Tell me about the Graduate Route visa", "Which UK universities do you work with?"],
  pric: ["What does Way charge?", "Is there a free consultation?", "What's included in the fee?"],
  visa: ["What documents do I need?", "How does the visa process work?", "Do you do mock interviews?"],
};

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  text: "Hi! I'm your Way Training assistant. Ask me anything about Way Education's services, programs, destinations, sales techniques, or student case studies.",
};

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function getTitleFromMessages(messages: Message[]): string {
  const firstUser = messages.find((m) => m.role === "user");
  if (firstUser) {
    const text = firstUser.text;
    return text.length > 40 ? text.slice(0, 40) + "..." : text;
  }
  return "New chat";
}

function loadSessions(): ChatSession[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("way-chat-history");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveSessions(sessions: ChatSession[]) {
  try {
    localStorage.setItem("way-chat-history", JSON.stringify(sessions));
  } catch {
    // ignore
  }
}

export default function ChatBot() {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load sessions on mount
  useEffect(() => {
    const loaded = loadSessions();
    setSessions(loaded);
    if (loaded.length > 0) {
      setActiveId(loaded[0].id);
    }
  }, []);

  const activeSession = sessions.find((s) => s.id === activeId);
  const messages = activeSession?.messages || [INITIAL_MESSAGE];

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  function updateActiveMessages(updater: (prev: Message[]) => Message[]) {
    if (!activeId) return;
    setSessions((prev) => {
      const updated = prev.map((s) =>
        s.id === activeId ? { ...s, messages: updater(s.messages) } : s
      );
      saveSessions(updated);
      return updated;
    });
  }

  function handleNewChat() {
    const newId = generateId();
    const newSession: ChatSession = {
      id: newId,
      title: "New chat",
      messages: [INITIAL_MESSAGE],
      createdAt: Date.now(),
    };
    setSessions((prev) => {
      const updated = [newSession, ...prev];
      saveSessions(updated);
      return updated;
    });
    setActiveId(newId);
    setShowSuggestions(true);
    setShowHistory(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  function handleSelectChat(id: string) {
    setActiveId(id);
    setShowHistory(false);
    setShowSuggestions(false);
  }

  function handleDeleteChat(id: string) {
    setSessions((prev) => {
      const updated = prev.filter((s) => s.id !== id);
      saveSessions(updated);
      return updated;
    });
    if (activeId === id) {
      setActiveId(sessions.find((s) => s.id !== id)?.id || null);
    }
  }

  function handleSend(text?: string) {
    const userMsg = (text || input).trim();
    if (!userMsg) return;

    // Create session if none active
    if (!activeId) {
      handleNewChat();
      // Will continue on next render via activeId
      return;
    }

    setInput("");
    setShowSuggestions(false);

    const userMessage: Message = { role: "user", text: userMsg };
    updateActiveMessages((prev) => [...prev, userMessage]);

    // Update title from first user message
    setSessions((prev) => {
      const updated = prev.map((s) =>
        s.id === activeId && s.messages.filter((m) => m.role === "user").length <= 1
          ? { ...s, title: getTitleFromMessages([...s.messages, userMessage]) }
          : s
      );
      saveSessions(updated);
      return updated;
    });

    setTimeout(() => {
      const match = findBestResponse(userMsg);
      let responseText: string;

      if (match) {
        responseText = buildResponse(match.response, match.courseRec);
      } else {
        responseText =
          "I don't have a specific answer for that yet. I can help with:\n\n• Way's services and programs\n• UCAS (UK) and Common App (US) applications\n• Destination guides — UK, US, Canada, Australia\n• Sales techniques and objection handling\n• Student case studies\n• Pricing and visa information\n\nTry rephrasing your question, or contact your training manager for more details.";
      }

      updateActiveMessages((prev) => [...prev, { role: "assistant", text: responseText }]);
    }, 300);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function getQuickReplies(): string[] {
    if (messages.length < 2) return [];
    const lastBotMsg = messages[messages.length - 1]?.text?.toLowerCase() || "";
    for (const [key, replies] of Object.entries(QUICK_REPLIES)) {
      if (lastBotMsg.includes(key)) return replies;
    }
    return [];
  }

  const quickReplies = getQuickReplies();

  function formatDate(ts: number): string {
    const d = new Date(ts);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    if (diff < 86400000) return "Today";
    if (diff < 172800000) return "Yesterday";
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  }

  return (
    <div className="flex h-full">
      {/* History Sidebar */}
      <div
        className={`${
          showHistory ? "w-64" : "w-0"
        } transition-all duration-200 overflow-hidden bg-gray-50 border-r border-gray-200 flex flex-col`}
      >
        <div className="p-3">
          <button
            onClick={handleNewChat}
            className="w-full flex items-center gap-2 px-3 py-2.5 bg-green-800 hover:bg-green-900 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Chat
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-2 pb-2 space-y-1">
          {sessions.map((session) => (
            <div
              key={session.id}
              onClick={() => handleSelectChat(session.id)}
              className={`group flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                session.id === activeId
                  ? "bg-white border border-gray-200 shadow-sm"
                  : "hover:bg-white/60"
              }`}
            >
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-700 truncate">{session.title}</div>
                <div className="text-xs text-gray-400">{formatDate(session.createdAt)}</div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteChat(session.id);
                }}
                className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-600 text-gray-400 transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
          {sessions.length === 0 && (
            <p className="text-xs text-gray-400 text-center py-4">No chats yet</p>
          )}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200 bg-white">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
            title={showHistory ? "Close history" : "Chat history"}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {showHistory ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-700 truncate">
              {activeSession?.title || "New chat"}
            </div>
          </div>
          <button
            onClick={handleNewChat}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
            title="New chat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

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

        {/* Suggested Prompts */}
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
    </div>
  );
}
