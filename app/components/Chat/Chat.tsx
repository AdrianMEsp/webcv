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

'use client';

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
}