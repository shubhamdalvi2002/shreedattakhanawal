import React from 'react';
import { X, MessageCircle, Check, Sparkles } from 'lucide-react';
import { MenuItem, Language } from '../types.ts';
import { CONTACT_INFO } from '../data/khanawalData.ts';

interface ItemModalProps {
  item: MenuItem | null;
  lang: Language;
  onClose: () => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, lang, onClose }) => {
  if (!item) return null;

  const handleInquire = () => {
    const itemName = lang === 'mr' ? item.nameMr : item.nameEn;
    const msg = lang === 'mr'
      ? `नमस्कार पुष्पाताई, मला श्री दत्त खानावळमधील "${itemName}" (दर ₹${item.price}) याबद्दल माहिती हवी आहे.`
      : `Hello Pushpatai, I would like more information about "${itemName}" (Rate ₹${item.price}) at Shree Datta Khanawal.`;
    window.open(CONTACT_INFO.whatsappUrl(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-neutral-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        {item.image && (
          <div className="relative h-56 w-full shrink-0 bg-neutral-100">
            <img
              src={item.image}
              alt={lang === 'mr' ? item.nameMr : item.nameEn}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#7A1526] text-[#E8D4A2] border border-[#D4AF37]/50 shadow-sm">
                {item.badgeMr ? (lang === 'mr' ? item.badgeMr : item.badgeEn) : 'घरगुती स्पेशल'}
              </span>
            </div>
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-marathi text-2xl font-bold text-[#5A1420]">
                {lang === 'mr' ? item.nameMr : item.nameEn}
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                {lang === 'mr' ? 'अस्सल महाराष्ट्रीयन घरगुती स्वयंपाक' : 'Traditional Maharashtrian recipe'}
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[10px] text-neutral-500 block">{lang === 'mr' ? 'दर' : 'Rate'}</span>
              <span className="text-2xl font-bold font-mono text-[#5A1420]">₹{item.price}/-</span>
            </div>
          </div>

          <p className="text-sm text-neutral-700 leading-relaxed">
            {lang === 'mr' ? item.descriptionMr : item.descriptionEn}
          </p>

          {item.itemsMr && (
            <div className="bg-[#F8F4EB] rounded-2xl p-4 border border-[#C59B27]/30">
              <div className="text-xs font-bold text-[#5A1420] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>{lang === 'mr' ? 'थाळीमधील घटक:' : 'Thali Contents:'}</span>
              </div>
              <ul className="space-y-1.5">
                {(lang === 'mr' ? item.itemsMr : item.itemsEn || item.itemsMr).map((ingredient, i) => (
                  <li key={i} className="text-xs text-neutral-700 flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-2 text-xs text-neutral-500">
            {lang === 'mr'
              ? 'वेळ: सकाळी ०९:०० ते दुपारी ०१:०० आणि संध्याकाळी ०८:०० ते १०:००.'
              : 'Timings: 09:00 AM – 01:00 PM & 08:00 PM – 10:00 PM.'}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[#FDFBF7] border-t border-neutral-100 flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-neutral-200 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            {lang === 'mr' ? 'बंद करा' : 'Close'}
          </button>
          <button
            type="button"
            onClick={handleInquire}
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#2B1608] bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-105 transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-[#2B1608] text-[#2B1608]" />
            <span>{lang === 'mr' ? 'याबद्दल चौकशी करा' : 'Inquire on WhatsApp'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
