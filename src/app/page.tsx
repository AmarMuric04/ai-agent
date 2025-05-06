import { Chat } from "@/components/ai-chat";
import { Bot } from "lucide-react";

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
        <Chat
          title="Developer AI Agent"
          description="Ask me anything related to coding! I can help with syntax, giving advice, making scripts and more!"
          placeholder="Get advice on coding..."
          configKey="coding"
        >
          <div className="rounded-full h-8 w-8 bg-primary text-primary-foreground grid place-items-center">
            AI
          </div>
        </Chat>
      </div>
      <div className="flex justify-between">
        <Chat
          title="Linguistics AI Agent"
          description="Ask me anything related to languages! I can help with grammar, giving advice, writing text and more!"
          placeholder="Help me learn a language..."
          configKey="linguistics"
        >
          <div className="rounded-full h-8 w-8 bg-primary text-primary-foreground grid place-items-center">
            <Bot size={18} />
          </div>
        </Chat>
        <Chat
          title="Customer Support AI Agent"
          description="Ask me anything related to support! I can help with any issues you're having, giving advice and more!"
          placeholder="What are you having trouble with?"
          configKey="support"
        >
          <div className="rounded-full h-8 w-8 bg-primary text-primary-foreground grid place-items-center">
            <Bot size={18} />
          </div>
        </Chat>
      </div>
    </div>
  );
}
