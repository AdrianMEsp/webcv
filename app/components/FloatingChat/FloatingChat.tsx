"use client";

import React, { useState } from "react";
import { Chat } from "../chat/Chat";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Botón flotante (logo o ícono) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-blue-500
         text-white flex items-center justify-center shadow-lg
         hover:cursor-pointer hover:bg-blue-600"
      >
        💬
      </button>

      {/* Ventana del chat */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white border rounded-lg shadow-xl flex flex-col">
          <div className="flex justify-between items-center p-2 border-b">
            <span className="font-semibold">Chat</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-500 hover:cursor-pointer"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            <Chat />
          </div>
        </div>
      )}
    </div>
  );
}
