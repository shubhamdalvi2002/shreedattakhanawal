import React, { useState } from 'react';
import { Phone, MessageCircle, Menu as MenuIcon, X, Globe } from 'lucide-react';
import { Language } from '../types.ts';
import { CONTACT_INFO, IMAGES } from '../data/khanawalData.ts';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#todays-special', labelMr: 'आजचा बेत', labelEn: "Today's Special" },
    { href: '#menu', labelMr: 'थाळी व दर', labelEn: 'Menu & Rates' },
    { href: '#dabba-service', labelMr: 'डबा दर', labelEn: 'Tiffin Rates' },
    { href: '#about', labelMr: 'आमच्याबद्दल', labelEn: 'About Us' },
    { href: '#contact', labelMr: 'संपर्क', labelEn: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#3B0C15]/95 backdrop-blur-md border-b border-[#C59B27]/30 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Single Brand Wordmark with Real Tiffin Photo Emblem */}
          <a href="#" className="flex items-center gap-3 shrink-0 group text-decoration-none">
            <div 
              className="w-11 h-11 rounded-full overflow-hidden shadow-md border-2 border-[#D4AF37] shrink-0 group-hover:scale-105 transition-transform bg-[#3B0C15]"
              title={lang === 'mr' ? 'श्री दत्त खानावळ - घरगुती डबा' : 'Shree Datta Khanawal - Homestyle Tiffin'}
            >
              <img
                src={IMAGES.tiffinLogo}
                alt={lang === 'mr' ? 'श्री दत्त खानावळ डबा' : 'Shree Datta Khanawal Tiffin'}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-marathi text-lg sm:text-2xl font-bold tracking-normal text-[#E8D4A2] group-hover:text-[#F3E9D2] transition-colors whitespace-nowrap">
                {lang === 'mr' ? 'श्री दत्त खानावळ' : 'Shree Datta Khanawal'}
              </span>
              <span className="text-[11px] text-[#C59B27] font-medium tracking-wider -mt-1 hidden sm:block">
                {lang === 'mr' ? '॥ घरगुती महाराष्ट्रीयन जेवण ॥' : 'Authentic Maharashtrian Dining'}
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#F3E9D2]/90">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {lang === 'mr' ? link.labelMr : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Switcher & Direct Call (No Book Dabba Button) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-full bg-white/10 hover:bg-white/20 text-[#E8D4A2] border border-[#C59B27]/40 transition-colors shrink-0"
              title={lang === 'mr' ? 'Switch to English' : 'मराठीत पहा'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#C59B27]" />
              <span className="tabular-nums font-medium">{lang === 'mr' ? 'English' : 'मराठी'}</span>
            </button>

            {/* Direct Call Button (Responsive for all devices) */}
            <a
              href={`tel:+91${CONTACT_INFO.phone}`}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs font-semibold rounded-full bg-[#D4AF37] text-[#2B1608] hover:bg-[#E8D4A2] transition-colors shadow-sm shrink-0"
              title={lang === 'mr' ? 'थेट कॉल करा' : 'Call Directly'}
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span className="font-mono font-bold hidden sm:inline">{CONTACT_INFO.phoneFormatted}</span>
              <span className="font-bold inline sm:hidden">{lang === 'mr' ? 'कॉल' : 'Call'}</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#E8D4A2] hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#C59B27]/20 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#F3E9D2] hover:text-[#D4AF37] hover:bg-white/5 rounded-md transition-colors"
              >
                {lang === 'mr' ? link.labelMr : link.labelEn}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2 border-t border-white/10">
              <a
                href={`tel:+91${CONTACT_INFO.phone}`}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/10 text-white font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>{lang === 'mr' ? 'थेट कॉल करा: ' : 'Call Now: '} {CONTACT_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
