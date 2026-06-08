import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Command, Sparkles, CornerDownLeft } from "lucide-react";

interface ChatMessage {
  role: "user" | "bot";
  text: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Hello! I am Alex Chen's AI Career Representative. I can answer complex questions about Alex's academic achievements, IT general controls experience, database tuning project metrics, or certification details. What would you like to explore today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [simulatedWarning, setSimulatedWarning] = useState(false);
  
  const bottomRef = useRef<HTMLDivElement>(null);
  
  const quickSuggestions = [
    "What is Alex's GPA?",
    "Show IT Audit accomplishments",
    "List SQL database metrics",
    "How to schedule an interview?"
  ];

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;
    
    const userMsg: ChatMessage = { role: "user", text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      // Map prior structures to a clean history format
      const history = messages.slice(1).map((m) => ({
        role: m.role === "user" ? "user" : "model",
        text: m.text
      }));

      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend, history })
      });

      if (!res.ok) {
        throw new Error("Failed to contact API backend");
      }

      const data = await res.json();
      if (data.simulated) {
        setSimulatedWarning(true);
      }
      
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.reply }
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "I experienced a connection lag. However, I can confirm Alex Chen has a 3.92 GPA Summa Cum Laude, and is highly experienced in IT general controls (ITGC), sysops automation with Linux/Windows Server, and database replication. You can contact Alex directly via the form below or email ayoengud@gmail.com!"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            id="chatbot-trigger-btn"
            key="chat-trigger"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsOpen(true)}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-500 text-white shadow-2xl hover:bg-navy-600 focus:outline-none focus:ring-2 focus:ring-navy-300 transition-colors"
          >
            <MessageSquare className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500 text-[9px] text-white items-center justify-center font-bold">1</span>
            </span>
          </motion.button>
        )}

        {isOpen && (
          <motion.div
            id="chatbot-panel"
            key="chat-panel"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex h-[520px] w-92 flex-col rounded-2xl border border-slate-200 bg-white/95 shadow-2xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95"
          >
            {/* Header */}
            <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-navy-800 to-navy-600 px-4 py-3.5 text-white">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Sparkles className="h-5 w-5 text-sky-300" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wide">Alex's AI Representative</h4>
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[10px] text-sky-200">Online & Ready</span>
                  </div>
                </div>
              </div>
              <button
                id="chatbot-close-btn"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Simulated Banner Indicator */}
            {simulatedWarning && (
              <div className="bg-sky-50 dark:bg-sky-950/40 px-3 py-1.5 border-b border-sky-100 dark:border-sky-900/30 text-[10px] text-sky-700 dark:text-sky-300 flex items-center gap-1.5">
                <Command className="h-3 w-3 flex-shrink-0" />
                <span>Running in demo response mode with structural expertise schema.</span>
              </div>
            )}

            {/* Chat Zones */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-navy-500 text-white rounded-tr-none"
                        : "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded-tl-none border border-slate-200/50 dark:border-slate-700/50"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 rounded-2xl rounded-tl-none px-4 py-2.5 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggested Shortcuts */}
            <div className="px-4 py-2 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800">
              <p className="text-[10px] text-slate-400 mb-1.5 uppercase tracking-wider font-semibold">Suggested Questions</p>
              <div className="flex flex-flow gap-1.5 flex-wrap">
                {quickSuggestions.map((chip, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(chip)}
                    className="text-[10px] tracking-wide rounded-full border border-slate-200 bg-white px-2 py-1 text-slate-600 hover:border-navy-400 hover:bg-navy-50 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-navy-500 dark:hover:bg-navy-950/50 transition-all font-medium text-left"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Action Zone */}
            <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-b-2xl">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Alex's AI anything..."
                  className="flex-1 rounded-xl bg-slate-50 border border-slate-200 dark:border-slate-800 dark:bg-slate-800/55 px-3 py-2 text-xs focus:ring-1 focus:ring-navy-400 focus:outline-none dark:text-white"
                />
                <button
                  id="chatbot-send-btn"
                  type="submit"
                  disabled={!input.trim()}
                  className="flex h-8 w-8 items-center justify-center rounded-xl bg-navy-500 text-white disabled:bg-slate-200 dark:disabled:bg-slate-800 dark:disabled:text-slate-500 hover:bg-navy-600 transition-colors cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
