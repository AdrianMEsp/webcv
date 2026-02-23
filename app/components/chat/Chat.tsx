"use client";

import React, { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();
    const reply = data.choices[0].message;

    setMessages([...newMessages, reply]);
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md max-w-lg mx-auto">
      <div className="h-50 overflow-y-auto mb-4 border p-2">
        {messages.map((m, i) => (
          <div key={i} className={`mb-2 ${m.role === "user" ? "text-blue-600" : "text-gray-700"}`}>
            <strong>{m.role}:</strong> {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex flex-col space-x-2">
        <input
          className="flex-1 border w-full rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
        />
        <button
          type="submit"
          className="px-4 py-1 bg-blue-500 mt-4 w-1/2 hover:cursor-pointer text-white rounded hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
