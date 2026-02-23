/* import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini", // rápido y económico
    messages,
  });

  return NextResponse.json(response);
} */

/* import { NextResponse } from "next/server";
import { streamText } from "ai";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Usamos streaming para respuestas en tiempo real
  const result = await streamText({
    model: client.chat.completions, // integración con OpenAI
    messages,
  });

  return result.toAIStreamResponse();
} */

import { streamText, UIMessage, convertToModelMessages } from 'ai';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: "openai/gpt-5.2-codex",
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
