import React, { useState } from 'react';
import { Utensils, MessageCircle, Check, Sparkles } from 'lucide-react';
import { Language, MenuItem } from '../types.ts';
import { MENU_ITEMS, CONTACT_INFO } from '../data/khanawalData.ts';

interface MenuSectionProps {
  lang: Language;
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ lang, onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelMr: 'सर्व मेनू व दर', labelEn: 'All Rates' },
    { id: 'veg-thali', labelMr: 'शाकाहारी थाळी (भाजी-पोळी)', labelEn: 'Veg Thalis' },
    { id: 'nonveg-thali', labelMr: 'मांसाहारी थाळी (चिकन व अंडा)', labelEn: 'Non-Veg Thalis' },
    { id: 'other', labelMr: 'इतर पदार्थ', labelEn: 'Other Dishes' },
    { id: 'extra', labelMr: 'अतिरिक्त पदार्थ', labelEn: 'Extra Add-ons' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#997404] uppercase mb-2">
            <Sparkles className="w-4 h-4 text-[#C59B27]" />
            <span>{lang === 'mr' ? 'अस्सल घरगुती स्वाद' : 'Homestyle Culinary Offerings'}</span>
          </div>
          <h2 className="font-marathi text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5A1420]">
            {lang === 'mr' ? 'आमची थाळी व खाद्यपदार्थ' : 'Traditional Maharashtrian Menu'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
            {lang === 'mr'
              ? 'ताजी भाजणी, घरगुती मसाले, गावरान तूप आणि अस्सल चव. प्रत्येक थाळी पोटभर आणि तृप्त करणारी.'
              : 'Handcrafted with home-ground spices, pure ghee, and fresh local produce for a wholesome dining experience.'}
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#7A1526] text-white shadow-sm shadow-[#7A1526]/20'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-[#C59B27] hover:text-[#7A1526]'
              }`}
            >
              {lang === 'mr' ? cat.labelMr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-neutral-200 hover:border-[#C59B27]/50 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group"
            >
              {/* Image Container with Fallback */}
              {item.image ? (
                <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={item.image}
                    alt={lang === 'mr' ? item.nameMr : item.nameEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.badgeMr && (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#7A1526] text-[#E8D4A2] border border-[#D4AF37]/40 shadow-sm">
                        {lang === 'mr' ? item.badgeMr : item.badgeEn}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-neutral-200">
                    <span className="font-mono text-sm font-bold text-[#5A1420]">₹{item.price}</span>
                  </div>
                </div>
              ) : (
                <div className="h-28 bg-gradient-to-r from-[#F8F4EB] to-[#FDFBF7] p-4 flex items-center justify-between border-b border-neutral-100">
                  <div className="w-10 h-10 rounded-full bg-[#7A1526]/10 flex items-center justify-center text-[#7A1526]">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-base font-bold text-[#5A1420] bg-white px-3 py-1 rounded-full border border-neutral-200">
                    ₹{item.price}
                  </span>
                </div>
              )}

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-marathi text-lg sm:text-xl font-bold text-[#221618] group-hover:text-[#7A1526] transition-colors">
                    {lang === 'mr' ? item.nameMr : item.nameEn}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {lang === 'mr' ? item.descriptionMr : item.descriptionEn}
                  </p>

                  {/* Included Items Checklist */}
                  {item.itemsMr && (
                    <div className="mt-4 pt-3 border-t border-neutral-100">
                      <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                        {item.category.includes('thali')
                          ? (lang === 'mr' ? 'थाळीत काय मिळेल:' : "What's Included:")
                          : (lang === 'mr' ? 'तपशील / घटक:' : 'Details:')}
                      </div>
                      <ul className="space-y-1.5">
                        {(lang === 'mr' ? item.itemsMr : item.itemsEn || item.itemsMr).map((sub, i) => (
                          <li key={i} className="text-xs text-neutral-700 flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Action: View Details and Rate */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-500 font-medium">
                      {item.category.includes('thali') ? (lang === 'mr' ? 'थाळी दर' : 'Thali Rate') : (lang === 'mr' ? 'पदार्थ दर' : 'Rate')}
                    </span>
                    <span className="font-mono text-lg font-extrabold text-[#5A1420]">₹{item.price}/-</span>
                  </div>
                  <button
                    onClick={() => onSelectItem(item)}
                    className="px-4 py-2 text-xs font-bold text-[#5A1420] hover:text-white bg-[#F8F4EB] hover:bg-[#5A1420] rounded-xl border border-[#C59B27]/40 transition-colors"
                  >
                    {lang === 'mr' ? 'माहिती व तपशील' : 'Details & Info'}
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Small Notice / Custom Request */}
        <div className="mt-12 text-center p-6 bg-[#F8F4EB] rounded-2xl border border-[#C59B27]/30 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-neutral-700">
            {lang === 'mr' ? (
              <>
                📢 <strong>विशेष माहिती:</strong> घरगुती सण, सत्यनारायण पूजा, वाढदिवस किंवा ऑफिस पार्टीसाठी खास पुरणपोळी व महाराष्ट्रीयन जेवणाचे दर व नियोजन माहिती उपलब्ध आहे.
              </>
            ) : (
              <>
                📢 <strong>Catering Information:</strong> Special Maharashtrian feast rates and arrangements available for family functions and gatherings.
              </>
            )}
          </p>
          <a
            href={CONTACT_INFO.whatsappUrl(lang === 'mr' ? 'नमस्कार, मला समारंभाच्या जेवणाचे दर व माहिती हवी आहे.' : 'Hello, I would like information regarding catering rates.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-xs font-bold text-[#7A1526] hover:underline font-marathi"
          >
            {lang === 'mr' ? 'समारंभाच्या दरांबद्दल चौकशी करा →' : 'Inquire for Catering Rates & Info →'}
          </a>
        </div>

      </div>
    </section>
  );
};
