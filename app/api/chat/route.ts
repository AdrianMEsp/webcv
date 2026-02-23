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

/* import { streamText, UIMessage, convertToModelMessages } from 'ai';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: "openai/gpt-5.2-codex",
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
} */

/* SUPABASE */
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

export async function POST(req: Request) {
  const { messages } = await req.json();
  const userMessage = messages[messages.length - 1].content;

  // 1. Embedding de la pregunta
  const embedding = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: userMessage,
  });

  // 2. Buscar contexto en Supabase
  const { data: results } = await supabase.rpc("match_documents", {
    query_embedding: embedding.data[0].embedding,
    match_count: 3,
  });

  const context = results?.map((r: any) => r.content).join("\n") || "";

  // 3. Pasar contexto al modelo
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Eres un asistente que responde sobre el CV de Adrian Espindola." },
      { role: "system", content: `Contexto:\n${context}` },
      ...messages,
    ],
  });

  return NextResponse.json(response);
}
