"use client";
import React, { useState } from 'react';
import { useChat } from 'ai/react';
import { useEffect, useRef } from 'react';
import Textarea from 'react-textarea-autosize';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api',
  });

  const messageEndRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const isMobile = window.innerWidth <= 768;

  return (
    <div className="min-h-screen bg-neutral-800 relative">
      {/* Mensagem de identificação do criador */}
      <p className="text-white text-center py-2">
        Este bot foi desenvolvido por Bruno Santos.
      </p>
      {messages.length !== 0 ? (
        <div className={`${isMobile ? 'w-[80%] ' : 'w-[75%]'} pb-32 pt-5 space-y-5 mx-auto`}>

          {messages.map((message) => (
            <div key={message.id} className="w-full">
              {message.role === 'user' ? (
                <div className="flex  gap-x-2">
                  <div className="bg-gray-500 h-12 w-12 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full text-white p-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <p className="rounded-lg p-3 w-full border-gray-500 border-2 text-sm">
                    {message.content}
                  </p>
                </div>
              ) : (
                <div className="flex gap-x-2">
                  <div className="bg-blue-500 h-12 w-12 rounded-lg">
                    <img src="/images/Bruno.png" alt="" />
                  </div>

                  <p className="rounded-lg p-3 w-full border-blue-500 border-2 text-sm">
                    {message.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className={`w-full flex justify-center ${isMobile ? 'pt-16 w-[95%] text-center ' : 'pt-32 '}`}>
          <h1 className="font-bold text-3xl">
            Por favor, digite a mensagem no campo abaixo ⬇️
          </h1>
        </div>
      )}

      <div ref={messageEndRef}></div>

      <form
        onSubmit={handleSubmit}
        className={`p-5 ${isMobile ? 'fixed bottom-0 pl-10 w-[95%] bg-neutral-800' : 'fixed bottom-0 left-0 w-[75%] mx-auto right-0 bg-neutral-800'}`}
      >
        <div className={`relative flex items-center ${isMobile ? 'mt-[-6rem]' : ''}`}>
          <Textarea
            tabIndex={0}
            required
            rows={1}
            value={input}
            onChange={handleInputChange}
            autoFocus
            placeholder="Send message..."
            spellCheck={false}
            className="w-full focus:outline-none shadow-blue-700 shadow-xl placeholder:text-gray-200 text-sm text-white p-5 pr-16 rounded-xl bg-neutral-600"
          />
          <button
            type="submit"
            className={`absolute bg-blue-500 p-2 rounded-lg right-0 mr-5 ${isMobile ? '' : ''}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-white"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
