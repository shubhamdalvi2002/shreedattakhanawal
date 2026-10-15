import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { Language } from '../types.ts';
import { CONTACT_INFO } from '../data/khanawalData.ts';

interface FloatingActionsProps {
  lang: Language;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ lang }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMsg = lang === 'mr'
    ? 'नमस्कार पुष्पाताई, मला श्री दत्त खानावळबद्दल माहिती हवी आहे.'
    : 'Hello Pushpatai, I would like information about Shree Datta Khanawal.';

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-2.5 rounded-full bg-white/90 hover:bg-white text-neutral-700 shadow-md border border-neutral-200 transition-all hover:scale-105 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Direct Call (Mobile Only) */}
      <a
        href={`tel:+91${CONTACT_INFO.phone}`}
        className="sm:hidden pointer-events-auto flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#3B0C15] text-[#E8D4A2] shadow-lg border border-[#C59B27]/40 text-xs font-semibold hover:bg-[#5A1420] transition-all"
        aria-label="Direct Phone Call"
      >
        <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span>{lang === 'mr' ? 'कॉल करा' : 'Call'}</span>
      </a>

      {/* WhatsApp Floating Button - Proper Round Shape */}
      <a
        href={CONTACT_INFO.whatsappUrl(whatsappMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba59] transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
        aria-label="Chat on WhatsApp with Pushpa Vilas Dalvi"
        title={lang === 'mr' ? 'पुष्पाताई दळवी यांच्याशी WhatsApp वर संपर्क साधा' : 'Chat with Pushpa Dalvi on WhatsApp'}
      >
        {/* Glow Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:opacity-60 pointer-events-none" />
        
        {/* Centered WhatsApp SVG Icon */}
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white shrink-0 relative z-10">
          <path d="M16.04 3C9.4 3 4 8.4 4 15.03c0 2.37.69 4.58 1.88 6.45L4 29l7.7-1.84a12 12 0 0 0 4.34.8C22.68 27.96 28 22.6 28 15.97 28 9.4 22.68 3 16.04 3zm0 22.1c-1.4 0-2.77-.37-3.97-1.07l-.28-.17-4.57 1.09 1.14-4.45-.19-.3a9.9 9.9 0 0 1-1.54-5.3c0-5.5 4.5-9.97 10.04-9.97 5.5 0 9.9 4.47 9.9 9.97 0 5.55-4.4 10.2-9.53 10.2zm5.5-7.44c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15s-.77.98-.95 1.18c-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.38-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.5.7.3 1.26.48 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35z" />
        </svg>
      </a>

    </div>
  );
};
