import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hello! Welcome to Fivonix Technology. How can we help you build your digital product today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    const newMessages: Message[] = [...messages, { sender: 'user', text: userText }];
    setMessages(newMessages);
    setInput('');

    // Simulate intelligent agency bot response
    setTimeout(() => {
      let botReply = 'Thank you for your inquiry! Our team specializes in custom software, web, and mobile apps. Would you like to schedule a free consultation call with our tech lead?';
      
      const lower = userText.toLowerCase();
      if (lower.includes('price') || lower.includes('cost') || lower.includes('budget')) {
        botReply = 'Our project costs vary based on requirements. You can use our interactive Cost Calculator on the website to get an instant estimate!';
      } else if (lower.includes('app') || lower.includes('mobile')) {
        botReply = 'We build high-performance iOS and Android apps using Flutter and React Native starting around $1,500.';
      } else if (lower.includes('web') || lower.includes('website')) {
        botReply = 'We craft lightning-fast responsive web applications using React and Next.js starting around $800.';
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('email')) {
        botReply = 'You can reach us at contact@fivonix.com.bd or call +880 1700-000000. Our office is in Gulshan-2, Dhaka.';
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-5 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full  hover:shadow-blue-500/50 hover:scale-105 transition-all font-semibold text-xs"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Chat with Fivonix Support</span>
        </button>
      )}

      {isOpen && (
        <div className="w-80 sm:w-96 bg-slate-900 border border-blue-900/60 rounded-3xl  flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="p-4 bg-slate-950 border-b border-blue-900/40 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Fivonix Live Support</h4>
                <p className="text-[10px] text-blue-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online | Replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 h-80 overflow-y-auto space-y-3 bg-slate-950/60 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-3 rounded-2xl leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="p-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-colors "
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
