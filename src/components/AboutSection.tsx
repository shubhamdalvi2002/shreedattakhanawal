import React from 'react';
import { Heart, Sparkles, ShieldCheck, Flame, Users, ChefHat } from 'lucide-react';
import { Language } from '../types.ts';
import { CONTACT_INFO, IMAGES } from '../data/khanawalData.ts';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const pillars = [
    {
      icon: Flame,
      titleMr: 'घरगुती वाटण व मसाले',
      titleEn: 'Homemade Traditional Masalas',
      descMr: 'आमच्या खानावळीत घाटी मसाला व काळा/गोडा मसाला घरी भाजून, कुटून तयार केला जातो. विकतचे कृत्रिम पॅकेट मसाले कधीही वापरले जात नाहीत.',
      descEn: 'We roast and hand-pound authentic Goda and Ghati masalas domestically. No store-bought preservatives or chemical additives.',
    },
    {
      icon: ShieldCheck,
      titleMr: 'शुद्ध जिन्नस व साजूक तूप',
      titleEn: 'Cold-Pressed Oils & Desi Ghee',
      descMr: 'शुद्ध शेंगदाणा तेल आणि घरगुती साजूक गावरान तूप वापरले जाते. पोटाला जड होणार नाही आणि तब्येत उत्तम राहील याची १००% काळजी घेतली जाते.',
      descEn: 'Cooked in pure groundnut oil and pure cow ghee. Light on digestion, healthy for daily sustenance over years.',
    },
    {
      icon: Heart,
      titleMr: 'आईच्या हातची आपुलकी',
      titleEn: 'Motherly Warmth & Purity',
      descMr: 'घरापासून दूर असणारे विद्यार्थी व चाकरमानी यांना घरच्या अन्नाची उणीव भासू नये हाच पुष्पाताई दळवी यांचा मुख्य ध्यास आहे.',
      descEn: 'Pushpatai’s prime dedication is ensuring students and workers away from family never miss their mother’s warm, loving kitchen.',
    },
    {
      icon: Users,
      titleMr: 'कडक स्वच्छता व वक्तशीरपणा',
      titleEn: 'Uncompromising Cleanliness',
      descMr: 'स्वच्छ स्वयंपाकघर, फिल्टर केलेले पाणी आणि वेळेवर डबा पोहोचण्याची शिस्त हीच श्री दत्त खानावळीची वर्षानुवर्षांची ओळख आहे.',
      descEn: 'Spotless food-grade prep area, filtered water, and disciplined delivery punctuality form our rock-solid reputation.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Image Side (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C59B27] to-[#7A1526] rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition" />
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-white">
                <img
                  src={IMAGES.tiffinDabba}
                  alt={lang === 'mr' ? 'श्री दत्त खानावळ स्वच्छ स्वयंपाकघर व डबा' : 'Hygienic domestic kitchen tiffin preparation'}
                  className="w-full h-[380px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#221618] via-[#221618]/70 to-transparent p-6 text-white">
                  <div className="text-xs text-[#E8D4A2] font-semibold tracking-wider uppercase mb-1">
                    {lang === 'mr' ? 'संचालिका व मुख्य अन्नपूर्णा' : 'Founder & Head Chef'}
                  </div>
                  <div className="font-marathi text-2xl font-bold text-white">
                    {lang === 'mr' ? CONTACT_INFO.proprietorMr : CONTACT_INFO.proprietorEn}
                  </div>
                  <div className="text-xs text-white/80 mt-1">
                    {lang === 'mr' ? 'अस्सल महाराष्ट्रीयन पाककलेचा प्रदीर्घ अनुभव' : 'Years of authentic culinary mastery & homemaking'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#997404] uppercase">
              <ChefHat className="w-4 h-4 text-[#C59B27]" />
              <span>{lang === 'mr' ? 'आमची परंपरा' : 'Our Legacy & Philosophy'}</span>
            </div>

            <h2 className="font-marathi text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5A1420] leading-tight text-balance">
              {lang === 'mr' ? (
                <>
                  हॉटेलचे अन्न नव्हे, तर <br />
                  घरासारखी <span className="text-[#C59B27]">सात्त्विक अन्नपूर्णा</span> सेवा.
                </>
              ) : (
                <>
                  Not Commercial Restaurant Food, <br />
                  A True <span className="text-[#C59B27]">Homestyle Kitchen</span>.
                </>
              )}
            </h2>

            <div className="text-sm sm:text-base text-neutral-700 leading-relaxed space-y-4">
              <p>
                {lang === 'mr' ? (
                  <>
                    <strong>श्री दत्त खानावळ</strong> ही केवळ एक खानावळ नसून, खऱ्या अर्थाने घरच्या जेवणाची अनुभूती देणारे ठिकाण आहे. 
                    <strong> सौ. पुष्पा विलास दळवी</strong> यांनी स्वतःच्या कौशल्यातून आणि आपुलकीतून या खानावळीची स्थापना केली. 
                    इथे प्रत्येक पोळी हाताने लाटली जाते, प्रत्येक भाकरी चुलीवर भाजल्यासारखी तव्यावर खमंग केली जाते.
                  </>
                ) : (
                  <>
                    <strong>Shree Datta Khanawal</strong> was founded with a singular noble purpose: to bring the comfort, 
                    nutritional purity, and soul-satisfying taste of a mother’s home meal to everyone who is away from home. 
                    Managed end-to-end by <strong>Mrs. Pushpa Vilas Dalvi</strong>, each chapati is hand-rolled and puffed to perfection, 
                    and every bhakri is toasted to a golden crisp.
                  </>
                )}
              </p>
              <p>
                {lang === 'mr' ? (
                  <>
                    बाहेरच्या खाण्यामध्ये अती मसाला, पामतेल किंवा रंग मिसळले जातात ज्यामुळे आरोग्य बिघडते. 
                    आमचा नियम साधा आहे: <em>"जे आम्ही आमच्या स्वतःच्या कुटुंबाला खायला देतो, तेच आम्ही आमच्या प्रत्येक ग्राहकाला प्रेमाने वाढतो."</em>
                  </>
                ) : (
                  <>
                    Unlike commercial eateries relying on palm oil, artificial food colors, and heavy acidity-causing gravies, 
                    our kitchen strictly abides by one principle: <em>"What we feed our own children and family is exactly what we serve each guest with love."</em>
                  </>
                )}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-6 border-t border-neutral-200">
              <div>
                <div className="font-marathi text-2xl font-bold text-[#5A1420]">
                  {lang === 'mr' ? 'अस्सल घरगुती' : '100% Homestyle'}
                </div>
                <div className="text-xs text-neutral-500">
                  {lang === 'mr' ? 'शाकाहारी व मांसाहारी मेजवानी' : 'Pure Homestyle Flavors'}
                </div>
              </div>
              <div className="w-px h-10 bg-neutral-200" aria-hidden="true" />
              <div>
                <div className="font-mono text-2xl font-bold text-[#5A1420]">२ वेळा ताजा</div>
                <div className="text-xs text-neutral-500">{lang === 'mr' ? 'सकाळी व संध्याकाळी ताजा स्वयंपाक' : 'Cooked Twice Daily Fresh'}</div>
              </div>
              <div className="w-px h-10 bg-neutral-200" aria-hidden="true" />
              <div>
                <div className="font-mono text-2xl font-bold text-[#5A1420]">३६५ दिवस</div>
                <div className="text-xs text-neutral-500">{lang === 'mr' ? 'नियमित व खात्रीशीर सेवा' : 'Dedicated Reliable Service'}</div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-md hover:border-[#C59B27]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F8F4EB] text-[#7A1526] flex items-center justify-center mb-4 border border-[#C59B27]/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-marathi text-base font-bold text-[#221618]">
                    {lang === 'mr' ? pil.titleMr : pil.titleEn}
                  </h4>
                  <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                    {lang === 'mr' ? pil.descMr : pil.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
