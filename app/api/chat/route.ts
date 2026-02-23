import { NextResponse } from "next/server";
import { ChatKit } from "@openai/chatkit";

const chatkit = new ChatKit({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await chatkit.chat.completions.create({
    model: "gpt-4o-mini", //gpt-4o-mini o gpt-4.1
    messages,
  });

  return NextResponse.json(response);
}
