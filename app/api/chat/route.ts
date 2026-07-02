import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { wayKnowledgeBase } from "@/lib/knowledge";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `You are a friendly, knowledgeable training assistant for Way Education sales agents. Your role is to help agents learn about Way Education's services, destinations, sales techniques, and student case studies.

You have access to the following knowledge base about Way Education. Use it to provide accurate, helpful answers. If you don't know something, say so honestly and suggest the agent contact their training manager.

When a question relates to a specific course module, recommend it. When you give advice, be practical and specific.

Keep responses concise but thorough. Use a warm, professional tone. You can use formatting like bullet points and bold text for clarity.

=== WAY EDUCATION KNOWLEDGE BASE ===
${wayKnowledgeBase}
=== END KNOWLEDGE BASE ===

AVAILABLE COURSE MODULES:
1. Product Knowledge (product-knowledge) — Way's services, 6-point framework, family approach
2. Consultative Selling & Objection Handling (sales-techniques) — Sales approach, handling objections, conversion strategies
3. UK Applications — UCAS Program (uk-applications) — 6-milestone UCAS process, £2,999+VAT
4. US Applications — Common App Program (us-applications) — Common App process, essays, strategy, £2,999+VAT
5. Destination Guides (destinations) — UK, US, Canada, Australia deep dives
6. Student Success Case Studies (case-studies) — Smayana (LSE), Anirudh (Edinburgh), Aashna (King's)

When recommending a course, respond in this format:
📚 **Recommended Course:** [Course Title]
Link: /courses/[slug]

IMPORTANT RULES:
- Only recommend courses from the list above
- Be honest if you don't know something
- Never make up information about Way Education
- Keep responses under 300 words unless detail is requested
- If asked about something unrelated to Way Education or study abroad, politely redirect to training topics`;

interface ChatMessage {
  role: "user" | "model";
  parts: string;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    const chat = model.startChat({
      history: messages.slice(0, -1).map((m: ChatMessage) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.parts }],
      })),
    });

    const lastMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(lastMessage.parts);
    const response = result.response.text();

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to get response" },
      { status: 500 }
    );
  }
}
