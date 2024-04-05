"use client";

import { useChat } from "ai/react";
import Textarea from "react-textarea-autosize";
export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api",
  });
  return (
    <div className="min-h-screen bg-neutral-800">
      {messages.length !== 0 ? (
        <div className="pb-32 pt-5 space-y-5 w-[75%] mx-auto relative">
          {messages.map((message) => (
            <div key={message.id} className="w-full">
               {message.role === "user" ? (
                <div>{(message.content)}</div>
              ) : (
                <div> {message.content}</div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center pt-32 ">
          <h1 className="font-bold text-3xl">
            Por favor, use a barra de texto para interação⬇️
          </h1>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="p-5 fixed bottom-0 left-0 w-[75%] mx-auto right-0 bg-neutral-800"
      >
        <div className="relative flex items-center">
          <Textarea
            tabIndex={0}
            required
            rows={1}
            value={input}
            onChange={handleInputChange}
            autoFocus
            placeholder="Envie mensagem..."
            spellCheck={false}
            className="w-full focus:outline-none shadow-blue-700 shadow-xl placeholder:text-gray-200 text-sm text-white p-5 pr-16 rounded-xl bg-neutral-600"
          />
          <button
            type="submit"
            className="absolute bg-blue-500 p-2 rounded-lg right-0 mr-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-white"
            >
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
