import React from 'react';
import { Star, Quote, CheckCircle, HelpCircle, ChevronDown } from 'lucide-react';
import { Language } from '../types.ts';
import { REVIEWS, FAQS } from '../data/khanawalData.ts';

interface ReviewsSectionProps {
  lang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang }) => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <section className="py-20 bg-[#F8F4EB] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#997404] uppercase mb-2">
            <Quote className="w-4 h-4 text-[#C59B27]" />
            <span>{lang === 'mr' ? 'ग्राहकांचे प्रेम' : 'Patron Testimonials'}</span>
          </div>
          <h2 className="font-marathi text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5A1420]">
            {lang === 'mr' ? 'आमच्या ग्राहकांचे मनोगत' : 'What Our Diners Say'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            {lang === 'mr'
              ? 'गेल्या अनेक महिन्यांपासून नियमित डबा घेणाऱ्या विद्यार्थी, नोकरदार व कुटुंबीयांचा प्रामाणिक अनुभव.'
              : 'Genuine feedback from long-term tiffin subscribers and families.'}
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-7 border border-neutral-200 shadow-sm flex flex-col justify-between hover:border-[#C59B27]/40 transition-all"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#C59B27]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C59B27]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
                  "{lang === 'mr' ? rev.textMr : rev.textEn}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <div className="font-marathi font-bold text-sm text-[#221618]">
                    {lang === 'mr' ? rev.nameMr : rev.nameEn}
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    {lang === 'mr' ? rev.roleMr : rev.roleEn}
                  </div>
                </div>

                {rev.verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>{lang === 'mr' ? 'सत्यापित ग्राहक' : 'Verified'}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto pt-6 border-t border-neutral-300">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#997404] uppercase mb-2">
              <HelpCircle className="w-4 h-4 text-[#C59B27]" />
              <span>{lang === 'mr' ? 'नेहमी विचारले जाणारे प्रश्न' : 'Frequently Asked Questions'}</span>
            </div>
            <h3 className="font-marathi text-2xl sm:text-3xl font-bold text-[#5A1420]">
              {lang === 'mr' ? 'डबा व सेवेबद्दल शंका?' : 'Common Questions'}
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-marathi font-bold text-sm sm:text-base text-[#221618] hover:text-[#7A1526] transition-colors"
                  >
                    <span>{lang === 'mr' ? faq.qMr : faq.qEn}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C59B27] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                      {lang === 'mr' ? faq.aMr : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
