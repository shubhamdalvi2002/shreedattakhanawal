import React from 'react';
import { Phone, Heart } from 'lucide-react';
import { Language } from '../types.ts';
import { CONTACT_INFO, IMAGES } from '../data/khanawalData.ts';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-[#2A0910] text-[#E8D4A2] border-t border-[#C59B27]/30 pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-md border-2 border-[#D4AF37] shrink-0 bg-[#3B0C15]">
                <img
                  src={IMAGES.tiffinLogo}
                  alt={lang === 'mr' ? 'श्री दत्त खानावळ डबा' : 'Shree Datta Khanawal Tiffin'}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="font-marathi text-2xl font-bold text-white">
                {lang === 'mr' ? 'श्री दत्त खानावळ' : 'Shree Datta Khanawal'}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#F3E9D2]/80 max-w-sm leading-relaxed">
              {lang === 'mr'
                ? 'घरगुती, चविष्ट आणि स्वच्छ महाराष्ट्रीयन जेवणाची पारंपरिक खानावळ. प्रत्येक थाळीत आईच्या हातची माया आणि सात्त्विक स्वाद.'
                : 'Authentic Maharashtrian homestyle vegetarian dining and reliable daily tiffin dabba service cooked with maternal care.'}
            </p>
            <div className="text-xs text-[#D4AF37] font-medium pt-1">
              ॥ अतिथी देवो भव ॥
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'mr' ? 'महत्त्वाचे दुवे' : 'Quick Links'}
            </div>
            <ul className="space-y-2 text-xs text-[#F3E9D2]/80">
              <li>
                <a href="#todays-special" className="hover:text-white transition-colors">
                  {lang === 'mr' ? 'आजचा खास बेत' : "Today's Special"}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  {lang === 'mr' ? 'थाळी व मेनू' : 'Full Menu & Thalis'}
                </a>
              </li>
              <li>
                <a href="#dabba-service" className="hover:text-white transition-colors">
                  {lang === 'mr' ? 'मासिक डबा सेवा' : 'Monthly Tiffin Plans'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {lang === 'mr' ? 'आमच्याबद्दल' : 'About Pushpatai'}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'mr' ? 'संपर्क' : 'Contact Us'}
            </div>
            <div className="text-xs text-[#F3E9D2]/90 space-y-1.5">
              <div>
                <span className="text-[#C59B27]">{lang === 'mr' ? 'संचालिका: ' : 'Proprietor: '}</span>
                <span className="font-bold text-white">
                  {lang === 'mr' ? CONTACT_INFO.proprietorMr : CONTACT_INFO.proprietorEn}
                </span>
              </div>
              <div>
                <span className="text-[#C59B27]">{lang === 'mr' ? 'फोन: ' : 'Phone: '}</span>
                <a href={`tel:+91${CONTACT_INFO.phone}`} className="font-mono text-white hover:underline">
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-[#E8D4A2]/80">
                {lang === 'mr' ? 'सकाळी ०९:०० ते दुपारी ०१:०० | संध्याकाळी ०८:०० ते रात्री १०:००' : 'Morning 09:00 AM – 01:00 PM | Evening 08:00 PM – 10:00 PM'}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8D4A2]/70">
          <div>
            © {new Date().getFullYear()} श्री दत्त खानावळ (Shree Datta Khanawal). All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>{lang === 'mr' ? 'प्रेमाने व आपुलकीने बनवलेले' : 'Crafted with care and devotion for'}</span>
            <span className="font-bold text-white">{lang === 'mr' ? 'पुष्पा विलास दळवी' : 'Pushpa Vilas Dalvi'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
