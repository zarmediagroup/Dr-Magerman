"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-2">
      {visible && (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-3 flex items-center gap-3 animate-fade-in max-w-[200px]">
          <p className="text-xs text-gray-600 font-body leading-tight">
            Chat with us on WhatsApp!
          </p>
          <button
            onClick={() => setVisible(false)}
            className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            aria-label="Close chat prompt"
          >
            <X size={14} />
          </button>
        </div>
      )}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setDismissed(true)}
          className="w-7 h-7 rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300 transition-colors text-xs flex items-center justify-center"
          aria-label="Dismiss WhatsApp button"
        >
          <X size={12} />
        </button>
        <a
          href="https://wa.me/27XXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20with%20Dr%20Magerman"
          target="_blank"
          rel="noopener noreferrer"
          className="pulse-animation w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          aria-label="Chat with Dr Magerman on WhatsApp"
        >
          <MessageCircle size={26} className="text-white fill-white" />
        </a>
      </div>
    </div>
  );
}
