import React, { useState } from 'react';
import { Sun, Moon, CalendarDays, Utensils, MessageCircle, Sparkles } from 'lucide-react';
import { Language } from '../types.ts';
import { WEEKLY_SPECIALS, CONTACT_INFO } from '../data/khanawalData.ts';

interface TodaysSpecialProps {
  lang: Language;
}

export const TodaysSpecial: React.FC<TodaysSpecialProps> = ({ lang }) => {
  // Get current day (0=Sunday, 1=Monday... 6=Saturday)
  const currentDayIndex = new Date().getDay();
  const [selectedDay, setSelectedDay] = useState<number>(currentDayIndex);

  const activeSpecial = WEEKLY_SPECIALS.find((s) => s.dayIndex === selectedDay) || WEEKLY_SPECIALS[0];

  return (
    <section id="todays-special" className="py-16 sm:py-20 bg-[#F8F4EB] border-b border-[#C59B27]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#997404] uppercase mb-2">
            <CalendarDays className="w-4 h-4 text-[#C59B27]" />
            <span>{lang === 'mr' ? 'वारानुसार खास मेनू माहिती' : 'Weekly Menu Information'}</span>
          </div>
          <h2 className="font-marathi text-2xl sm:text-4xl font-bold text-[#5A1420]">
            {lang === 'mr' ? 'आजचा खास घरगुती बेत' : "Today's Homestyle Special"}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            {lang === 'mr'
              ? 'आठवड्याच्या प्रत्येक दिवशी सकाळी ९ ते दुपारी १ आणि संध्याकाळी ८ ते १० वाजेपर्यंत ताजा बेत तयार केला जातो.'
              : 'Every day fresh traditional Maharashtrian dishes are prepared morning 09:00 AM – 01:00 PM and evening 08:00 PM – 10:00 PM.'}
          </p>
        </div>

        {/* Day Selector Tabs (Mon - Sun) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 gap-2 no-scrollbar">
          {WEEKLY_SPECIALS.map((item) => {
            const isToday = item.dayIndex === currentDayIndex;
            const isSelected = item.dayIndex === selectedDay;
            return (
              <button
                key={item.dayIndex}
                onClick={() => setSelectedDay(item.dayIndex)}
                className={`relative px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap shrink-0 transition-all border ${
                  isSelected
                    ? isToday
                      ? 'bg-[#5A1420] text-[#FDFBF7] border-[#5A1420] shadow-md'
                      : 'bg-neutral-800 text-white border-neutral-800 shadow-md'
                    : isToday
                    ? 'bg-[#FDFBF7] text-[#5A1420] border-[#C59B27] font-bold ring-1 ring-[#C59B27]'
                    : 'bg-white text-neutral-500 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <span>{lang === 'mr' ? item.dayNameMr : item.dayNameEn}</span>
                {isToday ? (
                  <span className={`ml-1.5 text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isSelected ? 'bg-[#D4AF37] text-[#2B1608]' : 'bg-[#5A1420] text-white'
                  }`}>
                    {lang === 'mr' ? 'आजचा मेनू' : "Today's Menu"}
                  </span>
                ) : (
                  <span className="ml-1 text-[10px] opacity-60">
                    ({lang === 'mr' ? 'अनुपलब्ध' : 'Unavailable'})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Special Showcase Card */}
        <div className="mt-8 bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
          
          {/* Card Top Title Bar */}
          <div className="bg-[#3B0C15] text-[#E8D4A2] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-marathi text-lg sm:text-xl font-bold text-white">
                {selectedDay === currentDayIndex
                  ? (lang === 'mr' ? `आजचा विशेष बेत (${activeSpecial.dayNameMr})` : `Today's Active Menu (${activeSpecial.dayNameEn})`)
                  : (lang === 'mr' ? `${activeSpecial.dayNameMr} (मेनू अनुपलब्ध)` : `${activeSpecial.dayNameEn} (Menu Unavailable)`)}
              </span>
              {selectedDay === currentDayIndex ? (
                <span className="text-xs bg-[#C59B27] text-[#2B1608] font-bold px-2.5 py-0.5 rounded-full">
                  {lang === 'mr' ? '● आज चालू आहे' : '● Live Today'}
                </span>
              ) : (
                <span className="text-xs bg-red-950/80 text-rose-200 border border-rose-400/30 font-medium px-2.5 py-0.5 rounded-full">
                  {lang === 'mr' ? 'आज उपलब्ध नाही' : 'Unavailable Today'}
                </span>
              )}
            </div>
            {selectedDay === currentDayIndex && activeSpecial.sweetMr && (
              <div className="flex items-center gap-1.5 text-xs text-[#E8D4A2] bg-white/10 px-3 py-1 rounded-full border border-[#C59B27]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{lang === 'mr' ? `गोड पदार्थ: ${activeSpecial.sweetMr}` : `Sweet: ${activeSpecial.sweetEn}`}</span>
              </div>
            )}
          </div>

          {/* Meals Grid: Only show active menu for TODAY, keep unavailable/blank for other days */}
          {selectedDay === currentDayIndex ? (
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
              
              {/* Lunch Column */}
              <div className="space-y-4 pt-4 md:pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#997404]">
                    <Sun className="w-5 h-5 text-[#C59B27]" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {lang === 'mr' ? 'सकाळी / दुपारचे जेवण' : 'Morning / Lunch (09:00 AM – 01:00 PM)'}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500 font-mono font-medium">
                    {lang === 'mr' ? CONTACT_INFO.lunchTimingsMr : CONTACT_INFO.lunchTimingsEn}
                  </span>
                </div>

                <div>
                  <h4 className="font-marathi text-xl font-bold text-[#5A1420]">
                    {lang === 'mr' ? activeSpecial.lunchMainMr : activeSpecial.lunchMainEn}
                  </h4>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {lang === 'mr' ? activeSpecial.lunchDetailsMr : activeSpecial.lunchDetailsEn}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-neutral-600">
                  <span className="font-medium text-[#7A1526]">
                    ✓ {lang === 'mr' ? 'ताजी भाकरी / पोळी व गरमागरम वरणभात' : 'Fresh bhakri/chapati & dal-rice'}
                  </span>
                  <span className="font-semibold text-neutral-500">
                    {lang === 'mr' ? 'वेळ: ०९:०० ते ०१:००' : '09:00 AM – 01:00 PM'}
                  </span>
                </div>
              </div>

              {/* Dinner Column */}
              <div className="space-y-4 pt-6 md:pt-0 md:pl-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#5A1420]">
                    <Moon className="w-5 h-5 text-[#7A1526]" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {lang === 'mr' ? 'संध्याकाळ / रात्रीचे जेवण' : 'Evening / Dinner (08:00 PM – 10:00 PM)'}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500 font-mono font-medium">
                    {lang === 'mr' ? CONTACT_INFO.dinnerTimingsMr : CONTACT_INFO.dinnerTimingsEn}
                  </span>
                </div>

                <div>
                  <h4 className="font-marathi text-xl font-bold text-[#5A1420]">
                    {lang === 'mr' ? activeSpecial.dinnerMainMr : activeSpecial.dinnerMainEn}
                  </h4>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {lang === 'mr' ? activeSpecial.dinnerDetailsMr : activeSpecial.dinnerDetailsEn}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-neutral-600">
                  <span className="font-medium text-[#7A1526]">
                    ✓ {lang === 'mr' ? 'हलके, सात्त्विक आणि पचायला सोपे' : 'Light, digestive & wholesome'}
                  </span>
                  <span className="font-semibold text-neutral-500">
                    {lang === 'mr' ? 'वेळ: ०८:०० ते १०:००' : '08:00 PM – 10:00 PM'}
                  </span>
                </div>
              </div>

            </div>
          ) : (
            /* Unavailable Label for other days */
            <div className="p-10 sm:p-14 text-center bg-[#FAF8F5]">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-12 h-12 rounded-full bg-neutral-200/80 text-neutral-500 flex items-center justify-center mx-auto">
                  <CalendarDays className="w-6 h-6" />
                </div>
                
                <div>
                  <div className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-neutral-200 text-neutral-700 uppercase tracking-wider mb-2">
                    {lang === 'mr' ? 'आज अनुपलब्ध (Unavailable Today)' : 'Unavailable Today'}
                  </div>
                  <h4 className="font-marathi text-xl font-bold text-neutral-800">
                    {lang === 'mr'
                      ? `${activeSpecial.dayNameMr}चा मेनू आज उपलब्ध नाही`
                      : `Menu for ${activeSpecial.dayNameEn} is not served today`}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {lang === 'mr'
                      ? 'श्री दत्त खानावळीत दररोज केवळ त्याच दिवशीचा ताजा, गरमागरम बेत बनवला जातो. आजचा चालू असलेला गरम बेत पाहण्यासाठी खालील बटण दाबा.'
                      : 'We prepare strictly fresh homestyle meals daily for the current day. Only today’s active menu is available right now.'}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedDay(currentDayIndex)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#5A1420] hover:bg-[#3B0C15] rounded-xl shadow-sm transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <span>
                      {lang === 'mr' 
                        ? `आजचा चालू बेत पहा (${WEEKLY_SPECIALS.find(s => s.dayIndex === currentDayIndex)?.dayNameMr})` 
                        : "Switch to Today's Live Menu"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Bar */}
          <div className="bg-[#FDFBF7] px-6 py-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600">
            <span className="flex items-center gap-1.5 font-medium text-[#5A1420]">
              <Utensils className="w-3.5 h-3.5 text-[#C59B27]" />
              {lang === 'mr' ? '॥ श्री दत्त खानावळ - घरगुती जेवण व डबा सेवा ॥' : 'Shree Datta Khanawal - Authentic Homestyle Dining'}
            </span>
            <a
              href={`tel:+91${CONTACT_INFO.phone}`}
              className="text-[#7A1526] font-bold hover:underline font-mono"
            >
              📞 {CONTACT_INFO.phoneFormatted}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
