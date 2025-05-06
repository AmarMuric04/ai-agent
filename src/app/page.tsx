import { Chat } from "@/components/chat";
import { Bot } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 flex flex-col p-4 sm:p-8 justify-between">
      <div className="flex justify-between">
        <Chat
          title="GoVault AI Agent"
          brand="GoVault"
          placeholder="Let's get to work!"
          configKey="default"
        >
          <div className="rounded-full h-8 w-8 bg-primary text-primary-foreground grid place-items-center">
            <Bot size={18} />
          </div>
        </Chat>
        <Chat
          title="GoVault AI Agent"
          brand="GoVault"
          placeholder="Let's get to work!"
          configKey="default"
        >
          <div className="rounded-full h-8 w-8 bg-primary text-primary-foreground grid place-items-center">
            <Bot size={18} />
          </div>
        </Chat>
      </div>
      <div className="flex justify-between">
        <Chat
          title="GoVault AI Agent"
          brand="GoVault"
          placeholder="Let's get to work!"
          configKey="default"
        >
          <div className="rounded-full h-8 w-8 bg-primary text-primary-foreground grid place-items-center">
            <Bot size={18} />
          </div>
        </Chat>
        <Chat
          title="GoVault AI Agent"
          brand="GoVault"
          placeholder="Let's get to work!"
          configKey="default"
        >
          <div className="rounded-full h-8 w-8 bg-primary text-primary-foreground grid place-items-center">
            <Bot size={18} />
          </div>
        </Chat>
      </div>
    </div>
  );
}
