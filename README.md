# 🧠 Next.js AI Chat Component

A plug-and-play AI chat component built for Next.js that makes embedding an AI agent into your application a breeze.

## 🚀 Features

- 🔧 **Easy Setup** — Just define your config in `ai.config.ts` and you're good to go.
- 💬 **Reusable Component** — Wrap it around any clickable element to open the chat.
- ⚡ **Lightweight & Customizable** — Built for simple one-session chats with minimal overhead.
- 🛡️ **TypeScript Safe** — Strong typings across the entire app.
- 📦 **Dependency Optionality** — Only uses third-party packages for code snippet formatting, easily removable if not needed.

---

## 🧰 Installation

```bash
npm install uuid react-markdown remark-gfm react-syntax-highlighter
```

> **Note:** You also need `shadcn/ui`'s `Button`, `Avatar`, and `Textarea` components. Make sure you’ve set up [shadcn/ui](https://ui.shadcn.com/docs/installation).

---

## 🔧 Setup

1. **Create an API key** from [Google AI Studio](https://aistudio.google.com/app/apikey).
2. **Add your key** to a `.env.local` file:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your-api-key-here
```

3. **Create an `ai.config.ts` file** in your project root:

```ts
// ai.config.ts
export const aiConfig = {
  default: {
    model: "gemini-pro",
    system: "You are a helpful assistant.",
  },
  // Add more configs if needed
};
```

> Or just copy the existing one from the codebase and tweak it.

---

## 💡 Usage

Wrap the component around any clickable **non-button** element:

```tsx
import { Chat } from "@/components/ai-chat";

<Chat title="Ask Me Anything" configKey="default">
  <div className="cursor-pointer">💬 Chat With AI</div>
</Chat>;
```

> **Important:** Do **not** use a `<button>` as the trigger element — the component already wraps itself in a button internally.

---

## 🧩 Props

```ts
type ChatProps = {
  children: React.ReactNode; // Trigger element
  title?: string; // Optional chat header title
  description?: string; // Optional preview description
  configKey?: string; // Key from ai.config.ts
  system?: string; // Custom override system prompt
  placeholder?: string; // Input field placeholder
  initialMessages?: Message[]; // Preloaded chat messages
  api?: string; // Custom API endpoint (defaults to /api/chat)
};
```

---

## 🧼 Optional Slimming

The following packages are only required for code snippet formatting. If you don’t need them, feel free to remove:

- `react-markdown`
- `remark-gfm`
- `react-syntax-highlighter`

---

## 📌 Notes

- The chat is designed for **short-lived, contextless sessions**.
- No session or local storage is used.
- The interface is minimal and easy to embed in dashboards or apps.

---

## 📁 Project Structure (Simplified)

```
components/
└── ai-chat.tsx
ai.config.ts
pages/
└── api/
└── chat.ts
.env.local
```

---

## 🛠️ Contributing

Pull requests are welcome! Feel free to open an issue if you want to suggest improvements or report bugs.

---

## 📝 License

MIT
