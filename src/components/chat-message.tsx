import type { Message } from "ai";
import { Avatar } from "@/components/ui/avatar";
import { User, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex w-full items-start gap-3",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8 shrink-0 items-center justify-center bg-gradient-to-r from-purple-500 to-teal-400">
          <Bot className="h-4 w-4 text-white" />
        </Avatar>
      )}

      <div
        className={cn(
          "max-w-[80%] break-words rounded-2xl px-4 py-2",
          isUser
            ? "bg-gradient-to-r from-purple-500 to-teal-400 text-white"
            : "bg-gray-100 dark:bg-gray-700 dark:text-gray-100"
        )}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap break-words">{message.content}</p>
        ) : (
          <div className="prose prose-sm max-w-full dark:prose-invert break-words">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ ...props }) => (
                  <a
                    {...props}
                    className="text-blue-600 underline dark:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>

      {isUser && (
        <Avatar className="h-8 w-8 shrink-0 items-center justify-center bg-gray-200 dark:bg-gray-600">
          <User className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </Avatar>
      )}
    </div>
  );
}
