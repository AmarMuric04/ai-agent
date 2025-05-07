import { Chat } from "@/components/ai-chat";
import { Avatar } from "@/components/ui/avatar";
import { Bell, Bot, Mail, Moon, User } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 flex flex-col p-4 sm:p-8 justify-between">
      <div className="flex justify-between">
        <Chat
          title="Web App AI Agent"
          description="Ask me anything related to the application! I can help with information, giving advice, navigating and more!"
          placeholder="Ask a question..."
          configKey="default"
        >
          <div className="rounded-full h-8 w-8 bg-primary text-primary-foreground grid place-items-center">
            <Bot size={18} />
          </div>
        </Chat>
        <div className="flex flex-col items-center gap-6 px-3 py-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md w-fit">
          {/* Theme Toggle */}
          <button className="flex flex-col items-center group">
            <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-purple-100 dark:group-hover:bg-purple-900 transition">
              <Moon size={18} className="text-gray-600 dark:text-gray-300" />
            </div>
            <span className="mt-1 text-[10px] text-gray-500 dark:text-gray-400">
              Theme
            </span>
          </button>

          <div className="w-8 h-px bg-gray-300 dark:bg-gray-700" />

          <div className="flex flex-col items-center gap-4">
            <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 transition">
              <Mail size={18} className="text-gray-600 dark:text-gray-300" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 transition">
              <Bell size={18} className="text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <div className="w-8 h-px bg-gray-300 dark:bg-gray-700" />

          <Chat
            title="Customer Support AI Agent"
            description="Ask me anything related to support! I can help with any issues you're having, giving advice and more!"
            placeholder="What are you having trouble with?"
            configKey="support"
          >
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-purple-100 dark:group-hover:bg-purple-900 transition">
                <Bot size={18} className="text-gray-600 dark:text-gray-300" />
              </div>
              <span className="mt-1 text-[10px] text-gray-500 dark:text-gray-400">
                Support
              </span>
            </div>
          </Chat>

          <div className="w-8 h-px bg-gray-300 dark:bg-gray-700" />

          <Avatar className="h-10 w-10 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </Avatar>
        </div>
      </div>
      <div className="flex justify-between">
        <Chat
          title="Linguistics AI Agent"
          description="Ask me anything related to languages! I can help with grammar, giving advice, writing text and more!"
          placeholder="Help me learn a language..."
          configKey="linguistics"
        >
          <div className="rounded-md bg-gradient-to-r px-2 py-1 from-purple-500 to-teal-400 bg-primary text-primary-foreground grid place-items-center">
            Ask the AI
          </div>
        </Chat>
        <div className="flex items-center gap-4 px-4 py-2 bg-white dark:bg-gray-900 rounded-full shadow-sm">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <Moon size={20} />
          </button>

          <div className="h-5 w-px bg-gray-300 dark:bg-gray-600" />

          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <Mail size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <Bell size={20} />
          </button>

          <div className="h-5 w-px bg-gray-300 dark:bg-gray-600" />

          <Chat
            title="Customer Support AI Agent"
            description="Ask me anything related to support! I can help with any issues you're having, giving advice and more!"
            placeholder="What are you having trouble with?"
            configKey="support"
          >
            <div className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <Bot size={20} />
            </div>
          </Chat>

          <div className="h-5 w-px bg-gray-300 dark:bg-gray-600" />

          <Avatar className="h-10 w-10 shrink-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
            <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </Avatar>
        </div>
      </div>
    </div>
  );
}
