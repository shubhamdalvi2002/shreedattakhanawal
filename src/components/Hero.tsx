import React from 'react';
import { MessageCircle, UtensilsCrossed, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Language } from '../types.ts';
import { CONTACT_INFO, IMAGES } from '../data/khanawalData.ts';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const defaultWhatsAppMsg = lang === 'mr'
    ? 'नमस्कार पुष्पाताई, मला श्री दत्त खानावळीचे जेवण, दर आणि मासिक डबा याबद्दल माहिती हवी आहे.'
    : 'Hello Pushpatai, I would like to inquire about the meals, rates, and tiffin service at Shree Datta Khanawal.';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#3B0C15] via-[#5A1420] to-[#2A0910] text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative Traditional Paisley / Subtle Motif Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sacred Traditional Kicker & Timings */}
        <div className="text-center mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/40 text-[#E8D4A2] text-xs sm:text-sm font-semibold tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>॥ श्री दत्त प्रसन्न ॥</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
          <div className="text-xs text-[#E8D4A2]/90 font-medium">
            ⏰ {lang === 'mr' ? 'खानावळीची वेळ: सकाळी ०९:०० ते दुपारी ०१:०० आणि संध्याकाळी ०८:०० ते १०:००' : 'Shop Timings: 09:00 AM – 01:00 PM & 08:00 PM – 10:00 PM'}
          </div>
        </div>

        {/* 2-Column Split: Hero Headline & Description + Real Culinary Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Content (7 Cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            <h1 className="font-marathi text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FDFBF7] leading-[1.2] text-balance">
              {lang === 'mr' ? (
                <>
                  घरच्या हातची <span className="text-[#E8D4A2] italic">अस्सल चव</span>, <br className="hidden sm:inline" />
                  मायेची आणि आपुलकीची तृप्ती.
                </>
              ) : (
                <>
                  Authentic <span className="text-[#E8D4A2] italic">Homestyle Feast</span>, <br className="hidden sm:inline" />
                  Cooked with Pure Maternal Love.
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-[#F3E9D2]/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {lang === 'mr' ? (
                <>
                  <strong>पुष्पा विलास दळवी</strong> यांच्या घरगुती देखरेखीखाली बनवलेले ताजे, पौष्टिक व सात्त्विक महाराष्ट्रीयन जेवण. 
                  गरमागरम ज्वारी-बाजरीच्या भाकरी, साजूक तुपातील वरण-भात, झणझणीत ठेचा आणि रोजचा पौष्टिक डबा.
                </>
              ) : (
                <>
                  Prepared under the personal loving care of <strong>Pushpa Vilas Dalvi</strong>. 
                  Daily fresh, hygienic Maharashtrian vegetarian meals, crisp Jowar-Bajra bhakris, fragrant dal-rice with homemade ghee, and reliable tiffin services.
                </>
              )}
            </p>

            {/* Trust Badges - Text with separators, anti-slop */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-3 text-xs sm:text-sm text-[#E8D4A2]/95 pt-1">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                {lang === 'mr' ? '१००% घरगुती पद्धत' : '100% Homestyle'}
              </span>
              <span className="text-[#C59B27]" aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                {lang === 'mr' ? 'शून्य सोडा व कृत्रिम रंग' : 'Zero Soda & Chemical Colors'}
              </span>
              <span className="text-[#C59B27]" aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <HeartHandshake className="w-4 h-4 text-[#D4AF37]" />
                {lang === 'mr' ? 'मासिक डबा सोय' : 'Monthly Tiffin Service'}
              </span>
            </div>

            {/* CTAs: Rates & Info, no order button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold text-[#2B1608] bg-gradient-to-r from-[#D4AF37] via-[#F3E9D2] to-[#C59B27] rounded-full shadow-lg shadow-black/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#2B1608]" />
                <span>{lang === 'mr' ? 'थाळी व जेवणाचे दर पहा' : 'View Menu & Rates'}</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl(defaultWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#E8D4A2] bg-white/10 hover:bg-white/20 border border-[#C59B27]/40 rounded-full transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>{lang === 'mr' ? 'माहिती व चौकशी करा' : 'Inquire on WhatsApp'}</span>
              </a>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-2 text-xs text-[#E8D4A2]/80 flex items-center justify-center lg:justify-start gap-2">
              <span>{lang === 'mr' ? 'थेट संपर्क :' : 'Direct Phone :'}</span>
              <a href={`tel:+91${CONTACT_INFO.phone}`} className="font-mono text-[#FDFBF7] font-bold hover:underline">
                {CONTACT_INFO.phoneFormatted}
              </a>
              <span aria-hidden="true">·</span>
              <span>{lang === 'mr' ? 'पुष्पाताई दळवी' : 'Pushpatai Dalvi'}</span>
            </div>

          </div>

          {/* Right Visual (5 Cols): Real High-Res Maharashtrian Thali in Brass Platter */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Golden Ambient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D4AF37] to-[#7A1526] rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative bg-[#2A0910] rounded-2xl overflow-hidden border border-[#C59B27]/40 shadow-2xl">
                <img
                  src={IMAGES.heroThali}
                  alt={lang === 'mr' ? 'श्री दत्त खानावळ अस्सल महाराष्ट्रीयन ताट' : 'Shree Datta Khanawal Maharashtrian Brass Thali'}
                  className="w-full h-[380px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Tag on the 1st image without 'पु' logo */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent p-4 sm:p-5 text-white">
                  <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                    <span className="font-marathi font-bold text-base sm:text-lg text-[#E8D4A2]">
                      {lang === 'mr' ? 'पुष्पा विलास दळवी' : 'Pushpa Vilas Dalvi'}
                    </span>
                    <span className="text-[11px] font-semibold text-[#D4AF37] bg-white/10 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#D4AF37]/40">
                      {lang === 'mr' ? 'संचालिका व मुख्य अन्नपूर्णा' : 'Founder & Head Chef'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#FDFBF7] italic leading-relaxed">
                    {lang === 'mr' 
                      ? '“माझ्या घरी आलेल्या प्रत्येकाला तृप्त जेवण वाढणे हाच आमचा धर्म आहे.”' 
                      : '“Serving every guest with pure maternal love and contentment is our dharma.”'}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
