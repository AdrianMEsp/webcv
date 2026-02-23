"use client";

import { ChatKit, useChatKit } from "@openai/chatkit-react";

export function Chat() {
  const { control } = useChatKit({
    api: {
      async getClientSecret(existing) {
        if (existing) {
          // aquí podrías implementar refresh de sesión
        }
        const res = await fetch("/api/chatkit/session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        const { client_secret } = await res.json();
        return client_secret;
      },
    },
  });

  return <ChatKit control={control} className="h-100 w-[320px]" />;
}
