/* "use client";

import { useChat } from "@ai-sdk/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat", // nuestro endpoint
  });

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md max-w-lg mx-auto">
      <div className="h-64 overflow-y-auto mb-4 border p-2">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`mb-2 ${m.role === "user" ? "text-blue-600" : "text-gray-700"}`}
          >
            <strong>{m.role}:</strong> {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col space-x-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={handleInputChange}
          placeholder="Escribe tu mensaje..."
        />
        <button
          type="submit"
          className="px-4 py-1 mt-4 w-1/2 bg-blue-500 text-white rounded
           hover:cursor-pointer hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
 */

/* Sin supabase, funcionaba pero no hacia las consultas */

/* 'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

export default function Chat() {
  const [input, setInput] = useState('');
  const { messages, sendMessage } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(message => (
        <div key={message.id} className="whitespace-pre-wrap ml-3">
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.parts.map((part, i) => {
            switch (part.type) {
              case 'text':
                return <div key={`${message.id}-${i}`}>{part.text}</div>;
            }
          })}
        </div>
      ))}

      <form
        onSubmit={e => {
          e.preventDefault();
          sendMessage({ text: input });
          setInput('');
        }}
      >
        <input
          className="fixed bottom-0 max-w-md p-2 mb-8 border border-zinc-800
            rounded shadow-xl"
          value={input}
          placeholder="Pregunta algo..."
          onChange={e => setInput(e.currentTarget.value)}
        />
      </form>
    </div>
  );
} */

"use client";

import { useChat } from "@ai-sdk/react";
import React from "react";

export default function Chat() {
    const { messages, setMessages, status, stop, reload} = useChat({
        api: "/api/chat",
    });

    const [input, setInput] = React.useState("");

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages((prev) => [
            ...prev, 
            { id: crypto.randomUUID(),
                role: "user", content: input 
            },
            ]);
        // Hacemos la llamada manual al endpoint 
        const res = await fetch("/api/chat",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, { role: "user", content: input },],
                }),
            });
        const data = await res.json(); const reply = data.choices[0].message;
        setMessages((prev) => [...prev, reply]);
        setInput("");
    };

    return (
        <div className="p-4 border rounded-lg bg-white shadow-md max-w-lg mx-auto">
            <div className="h-64 overflow-y-auto mb-4 border p-2">
                {messages.map((m) => (
                    <div key={m.id} className={m.role === "user" ? "text-blue-600" : "text-gray-700"}>
                        <strong>{m.role}:</strong> {m.content}
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage} className="flex space-x-2">
                <input
                    className="flex-1 border rounded px-2 py-1"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Escribe tu mensaje..."
                />
                <button
                    type="submit"
                    className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}
