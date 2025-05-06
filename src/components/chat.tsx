"use client";

import { useChat } from "ai/react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Send, Bot, Trash2 } from "lucide-react";
import { ChatMessage } from "./chat-message";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Chat({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [horizontal, setHorizontal] = useState<"left" | "right">("right");
  const [vertical, setVertical] = useState<"top" | "bottom">("top");

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      api: "/api/chat",
    });

  const [inputRows, setInputRows] = useState(1);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const rows = input.split("\n").length;
    setInputRows(Math.min(5, Math.max(1, rows)));
  }, [input]);

  useEffect(() => {
    const el = scrollAreaRef.current;
    if (!el) return;

    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!isOpen) {
      handleInputChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    }
  }, [isOpen, handleInputChange]);

  const handleTriggerClick = () => {
    const triggerEl = triggerRef.current;
    if (triggerEl) {
      const rect = triggerEl.getBoundingClientRect();

      const spaceRight = window.innerWidth - rect.right;
      const spaceLeft = rect.left;

      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;

      if (spaceRight < 420 && spaceLeft > spaceRight) {
        setHorizontal("left");
      } else {
        setHorizontal("right");
      }

      if (spaceBelow < 660 && spaceAbove > spaceBelow) {
        setVertical("top");
      } else {
        setVertical("bottom");
      }
    }

    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative w-fit">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <span ref={triggerRef} onClick={handleTriggerClick}>
              {children}
            </span>
          </TooltipTrigger>
          <TooltipContent>Ask AI</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div
        className={cn(
          "absolute transition-all h-[650px] w-[400px] flex flex-col mx-auto border border-purple-100 rounded-3xl overflow-hidden",
          horizontal === "right" ? "left-full ml-4" : "right-full mr-4",
          vertical === "top" ? "bottom-1/2" : "top-1/2",
          !isOpen && "scale-0 pointer-events-none"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-purple-100 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-teal-400 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <h2 className="font-semibold">Gemini 2.0 Flash</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              window.location.reload();
            }}
            title="Clear conversation"
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto" ref={scrollAreaRef}>
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-teal-400 flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Welcome to Gemini Chat
              </h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-md">
                Ask me anything! I can help with information, creative tasks,
                problem-solving, and more.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {isLoading && (
                <div className="flex items-start gap-3 animate-pulse">
                  <Avatar className="items-center justify-center bg-gradient-to-r from-purple-500 to-teal-400">
                    <Bot className="h-4 w-4 text-white" />
                  </Avatar>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-3 max-w-[80%]">
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-600 rounded-full mb-2"></div>
                    <div className="h-4 w-64 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-purple-100 dark:border-gray-700 w-full">
          <form onSubmit={handleSubmit} className="flex gap-2 w-full">
            <div className="relative flex-1 w-full">
              <Textarea
                value={input}
                onChange={handleInputChange}
                placeholder="Message Gemini..."
                className="resize-none pr-10 py-3 rounded-2xl border-purple-100 dark:border-gray-700 focus-visible:ring-purple-500 break-words w-full max-w-full"
                rows={inputRows}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-2 bottom-2 h-8 w-8 bg-gradient-to-r from-purple-500 to-teal-400 hover:from-purple-600 hover:to-teal-500 rounded-full"
                disabled={isLoading || !input.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {error && (
            <div className="mt-2 text-sm text-red-500">
              Error: {error.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
