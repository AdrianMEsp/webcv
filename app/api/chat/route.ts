import { NextResponse } from "next/server";

export async function POST() {
  const res = await fetch("https://api.openai.com/v1/chatkit/sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "OpenAI-Beta": "chatkit_beta=v1",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      workflow: { id: "wf_xxx_tu_workflow_id" }, // ID creado en Agent Builder
      user: "user-123", // identificador único del usuario
    }),
  });

  const { client_secret } = await res.json();
  return NextResponse.json({ client_secret });
}
