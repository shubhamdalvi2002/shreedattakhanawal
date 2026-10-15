import React, { useState } from 'react';
import { Calculator, Check, MessageCircle, Package, Truck, ShieldAlert, Sparkles } from 'lucide-react';
import { Language } from '../types.ts';
import { DABBA_PLANS, CONTACT_INFO, IMAGES } from '../data/khanawalData.ts';

interface DabbaCalculatorProps {
  lang: Language;
}

export const DabbaCalculator: React.FC<DabbaCalculatorProps> = ({ lang }) => {
  // Calculator state
  const [mealShift, setMealShift] = useState<'lunch' | 'dinner' | 'both'>('lunch');
  const [breadChoice, setBreadChoice] = useState<'chapati' | 'jowar' | 'bajra'>('chapati');
  const [planSize, setPlanSize] = useState<'full' | 'mini'>('full');
  const [daysCount, setDaysCount] = useState<number>(30); // 15 or 30 days
  const [needDelivery, setNeedDelivery] = useState<boolean>(true);

  // Price calculation
  // Full Dabba per meal: ₹90 (Chapati), ₹100 (Bhakri)
  // Mini Dabba per meal: ₹70 (Chapati), ₹80 (Bhakri)
  const baseRate = planSize === 'full' ? 90 : 70;
  const breadExtra = breadChoice === 'chapati' ? 0 : 10;
  const deliveryExtra = needDelivery ? 10 : 0;
  const singleMealRate = baseRate + breadExtra + deliveryExtra;
  const mealsPerDay = mealShift === 'both' ? 2 : 1;
  const calculatedTotal = singleMealRate * mealsPerDay * daysCount;

  const handleBookViaWhatsApp = (presetPlanTitle?: string) => {
    let msg = '';
    if (presetPlanTitle) {
      msg = lang === 'mr'
        ? `नमस्कार पुष्पाताई, मला श्री दत्त खानावळच्या "${presetPlanTitle}" डबा योजनेचे दर व माहिती जाणून घ्यायची आहे.`
        : `Hello Pushpatai, I would like to know the rates and details for "${presetPlanTitle}".`;
    } else {
      const shiftStr = mealShift === 'both' ? 'दुपार + रात्र' : mealShift === 'lunch' ? 'दुपार' : 'रात्र';
      const breadStr = breadChoice === 'chapati' ? 'गव्हाची चपाती' : breadChoice === 'jowar' ? 'ज्वारी भाकरी' : 'बाजरी भाकरी';
      const sizeStr = planSize === 'full' ? 'संपूर्ण डबा (Full)' : 'मिनी डबा (Mini)';
      
      msg = lang === 'mr'
        ? `नमस्कार पुष्पाताई, मला डब्याचे दर व माहिती हवी आहे:\n` +
          `• जेवणाची वेळ: ${shiftStr}\n` +
          `• डबा प्रकार: ${sizeStr}\n` +
          `• पोळी/भाकरी: ${breadStr}\n` +
          `• कालावधी: ${daysCount} दिवस\n` +
          `• डिलिव्हरी: ${needDelivery ? 'घरपोच / ऑफिस' : 'स्वतः खानावळीतून नेणार'}\n` +
          `• अंदाजे शुल्क: ₹${calculatedTotal}/-\n\n` +
          `कृपया याबद्दल अधिक माहिती द्यावी.`
        : `Hello Pushpatai, I would like information regarding tiffin rates:\n` +
          `• Meal Shift: ${mealShift === 'both' ? 'Lunch + Dinner' : mealShift}\n` +
          `• Type: ${planSize === 'full' ? 'Full Dabba' : 'Mini Dabba'}\n` +
          `• Bread: ${breadChoice}\n` +
          `• Duration: ${daysCount} days\n` +
          `• Delivery: ${needDelivery ? 'Home/Office Delivery' : 'Self Pickup'}\n` +
          `• Estimated Amount: ₹${calculatedTotal}\n\n` +
          `Please provide more details.`;
    }

    window.open(CONTACT_INFO.whatsappUrl(msg), '_blank');
  };

  return (
    <section id="dabba-service" className="py-20 bg-gradient-to-b from-[#F8F4EB] to-[#FDFBF7] border-t border-b border-[#C59B27]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#997404] uppercase mb-2">
            <Package className="w-4 h-4 text-[#C59B27]" />
            <span>{lang === 'mr' ? 'मासिक टिफिन सोय' : 'Monthly Tiffin Service'}</span>
          </div>
          <h2 className="font-marathi text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5A1420]">
            {lang === 'mr' ? 'घरपोच मासिक डबा योजना' : 'Homestyle Daily Dabba Plans'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
            {lang === 'mr'
              ? 'ऑफिस कर्मचारी, विद्यार्थी व कुटुंबांसाठी दररोज गरम, स्वच्छ आणि शुद्ध शाकाहारी जेवण थेट वेळेत.'
              : 'Reliable, hygienic, and authentic Maharashtrian tiffin delivered right on time to your doorstep.'}
          </p>
        </div>

        {/* 3 Featured Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {DABBA_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl bg-white p-7 flex flex-col justify-between border transition-all ${
                plan.popular
                  ? 'border-[#C59B27] shadow-lg ring-1 ring-[#C59B27]'
                  : 'border-neutral-200 shadow-sm hover:border-[#C59B27]/40'
              }`}
            >
              <div>
                {plan.popular && (
                  <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-[#C59B27] text-[#2B1608] mb-3">
                    {lang === 'mr' ? '★ सर्वाधिक पसंतीची योजना' : '★ Most Popular Choice'}
                  </span>
                )}
                <h3 className="font-marathi text-xl font-bold text-[#5A1420]">
                  {lang === 'mr' ? plan.titleMr : plan.titleEn}
                </h3>
                <p className="text-xs text-neutral-500 mt-1 min-h-[32px]">
                  {lang === 'mr' ? plan.taglineMr : plan.taglineEn}
                </p>

                {/* Price Display */}
                <div className="mt-5 pb-5 border-b border-neutral-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold font-mono text-[#221618] tabular-nums">
                      ₹{plan.monthlyPrice}
                    </span>
                    <span className="text-xs text-neutral-500">
                      {lang === 'mr' ? '/ महिना (३० दिवस)' : '/ month (30 days)'}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#997404] font-medium mt-1">
                    {lang === 'mr' ? `₹${plan.perMealPrice}/- प्रति जेवण सरासरी` : `~₹${plan.perMealPrice} per meal average`}
                  </div>
                </div>

                {/* Features List */}
                <ul className="mt-6 space-y-2.5">
                  {(lang === 'mr' ? plan.featuresMr : plan.featuresEn).map((feat, idx) => (
                    <li key={idx} className="text-xs text-neutral-700 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100">
                <button
                  onClick={() => handleBookViaWhatsApp(lang === 'mr' ? plan.titleMr : plan.titleEn)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    plan.popular
                      ? 'bg-[#5A1420] text-white hover:bg-[#3B0C15] shadow-sm'
                      : 'bg-[#F8F4EB] text-[#5A1420] hover:bg-[#5A1420] hover:text-white border border-[#C59B27]/40'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{lang === 'mr' ? 'दरांबद्दल माहिती हवी' : 'Inquire About Rates'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Custom Dabba Calculator Box */}
        <div className="bg-white rounded-3xl border border-[#C59B27]/30 shadow-md p-6 sm:p-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Configuration Controls (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2 text-[#5A1420]">
                <Calculator className="w-5 h-5 text-[#C59B27]" />
                <h3 className="font-marathi text-xl sm:text-2xl font-bold">
                  {lang === 'mr' ? 'तुमच्या गरजेनुसार डबा खर्चाचे गणित करा' : 'Custom Tiffin Cost Calculator'}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600">
                {lang === 'mr'
                  ? 'तुमची वेळ, पोळी किंवा भाकरीची पसंती आणि कालावधी निवडून अचूक अंदाजित रक्कम त्वरित पहा:'
                  : 'Select your preferred shift, bread preference, and duration to compute the exact price instant estimate:'}
              </p>

              {/* Step 1: Shift */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                  १. {lang === 'mr' ? 'जेवणाची वेळ निवडा' : 'Meal Shift'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'lunch', labelMr: 'दुपारचा डबा', labelEn: 'Lunch Only' },
                    { id: 'dinner', labelMr: 'रात्रीचा डबा', labelEn: 'Dinner Only' },
                    { id: 'both', labelMr: 'दोन्ही वेळ (दुपार+रात्र)', labelEn: 'Both Meals' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setMealShift(s.id as any)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        mealShift === s.id
                          ? 'bg-[#5A1420] text-white border-[#5A1420]'
                          : 'bg-[#FDFBF7] text-neutral-700 border-neutral-200 hover:border-[#C59B27]'
                      }`}
                    >
                      {lang === 'mr' ? s.labelMr : s.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Dabba Size & Bread Choice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    २. {lang === 'mr' ? 'डब्याचा प्रकार' : 'Dabba Size'}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'full', labelMr: 'संपूर्ण (Full)', labelEn: 'Full Dabba' },
                      { id: 'mini', labelMr: 'मिनी (Mini)', labelEn: 'Mini Dabba' },
                    ].map((sz) => (
                      <button
                        key={sz.id}
                        type="button"
                        onClick={() => setPlanSize(sz.id as any)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                          planSize === sz.id
                            ? 'bg-[#5A1420] text-white border-[#5A1420]'
                            : 'bg-[#FDFBF7] text-neutral-700 border-neutral-200 hover:border-[#C59B27]'
                        }`}
                      >
                        {lang === 'mr' ? sz.labelMr : sz.labelEn}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    ३. {lang === 'mr' ? 'पोळी / भाकरी पसंती' : 'Bread Choice'}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'chapati', labelMr: 'चपाती', labelEn: 'Chapati' },
                      { id: 'jowar', labelMr: 'ज्वारी भाकरी', labelEn: 'Jowar' },
                      { id: 'bajra', labelMr: 'बाजरी भाकरी', labelEn: 'Bajra' },
                    ].map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setBreadChoice(b.id as any)}
                        className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all text-center ${
                          breadChoice === b.id
                            ? 'bg-[#5A1420] text-white border-[#5A1420]'
                            : 'bg-[#FDFBF7] text-neutral-700 border-neutral-200 hover:border-[#C59B27]'
                        }`}
                      >
                        {lang === 'mr' ? b.labelMr : b.labelEn}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Step 3: Duration & Delivery Toggle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    ४. {lang === 'mr' ? 'कालावधी' : 'Duration'}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { days: 15, labelMr: '१५ दिवस (Trial)', labelEn: '15 Days Trial' },
                      { days: 30, labelMr: '३० दिवस (महिना)', labelEn: '30 Days Month' },
                    ].map((d) => (
                      <button
                        key={d.days}
                        type="button"
                        onClick={() => setDaysCount(d.days)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                          daysCount === d.days
                            ? 'bg-[#5A1420] text-white border-[#5A1420]'
                            : 'bg-[#FDFBF7] text-neutral-700 border-neutral-200 hover:border-[#C59B27]'
                        }`}
                      >
                        {lang === 'mr' ? d.labelMr : d.labelEn}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    ५. {lang === 'mr' ? 'डिलिव्हरी पद्धत' : 'Delivery Preference'}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setNeedDelivery(true)}
                      className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all text-center flex items-center justify-center gap-1 ${
                        needDelivery
                          ? 'bg-[#5A1420] text-white border-[#5A1420]'
                          : 'bg-[#FDFBF7] text-neutral-700 border-neutral-200 hover:border-[#C59B27]'
                      }`}
                    >
                      <Truck className="w-3.5 h-3.5" />
                      <span>{lang === 'mr' ? 'घरपोच / ऑफिस' : 'Doorstep'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setNeedDelivery(false)}
                      className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all text-center ${
                        !needDelivery
                          ? 'bg-[#5A1420] text-white border-[#5A1420]'
                          : 'bg-[#FDFBF7] text-neutral-700 border-neutral-200 hover:border-[#C59B27]'
                      }`}
                    >
                      <span>{lang === 'mr' ? 'स्वतः नेणार' : 'Pickup'}</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* Right: Calculated Summary Display Card (5 Cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#3B0C15] to-[#5A1420] text-white p-7 sm:p-8 rounded-2xl border border-[#C59B27]/40 shadow-xl flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-[#E8D4A2]">
                  <span className="font-semibold uppercase tracking-wider">
                    {lang === 'mr' ? 'अंदाजित सारांश' : 'Estimated Quotation'}
                  </span>
                  <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-[11px]">
                    {daysCount} {lang === 'mr' ? 'दिवस' : 'Days'}
                  </span>
                </div>

                <div className="py-5 space-y-2 text-xs text-white/90">
                  <div className="flex justify-between">
                    <span className="text-[#E8D4A2]">{lang === 'mr' ? 'जेवणाची वेळ:' : 'Shift:'}</span>
                    <span className="font-medium">{mealShift === 'both' ? (lang === 'mr' ? 'दुपार + रात्र (२ वेळा)' : 'Lunch + Dinner (2x)') : mealShift === 'lunch' ? (lang === 'mr' ? 'दुपार' : 'Lunch') : (lang === 'mr' ? 'रात्र' : 'Dinner')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#E8D4A2]">{lang === 'mr' ? 'डबा प्रकार:' : 'Type:'}</span>
                    <span className="font-medium">{planSize === 'full' ? (lang === 'mr' ? 'संपूर्ण डबा' : 'Full Dabba') : (lang === 'mr' ? 'मिनी डबा' : 'Mini Dabba')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#E8D4A2]">{lang === 'mr' ? 'पोळी / भाकरी:' : 'Bread:'}</span>
                    <span className="font-medium">{breadChoice === 'chapati' ? (lang === 'mr' ? 'गव्हाची पोळी' : 'Wheat Chapati') : breadChoice === 'jowar' ? (lang === 'mr' ? 'ज्वारीची भाकरी' : 'Jowar Bhakri') : (lang === 'mr' ? 'बाजरीची भाकरी' : 'Bajra Bhakri')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#E8D4A2]">{lang === 'mr' ? 'प्रति जेवण दर:' : 'Per Meal Rate:'}</span>
                    <span className="font-mono font-bold text-white">₹{singleMealRate}/-</span>
                  </div>
                </div>

                {/* Grand Total */}
                <div className="pt-4 border-t border-[#C59B27]/40 flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-[#E8D4A2]">
                    {lang === 'mr' ? 'एकूण अंदाजित रक्कम:' : 'Grand Total:'}
                  </span>
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#D4AF37] tabular-nums">
                    ₹{calculatedTotal}
                  </span>
                </div>
                <div className="text-[10px] text-white/60 text-right mt-1">
                  {lang === 'mr' ? '*सुट्टीचे दिवस वजा करण्याची सोय' : '*Pause/skip days rollover allowed'}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                <button
                  type="button"
                  onClick={() => handleBookViaWhatsApp()}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs sm:text-sm font-bold text-[#2B1608] bg-gradient-to-r from-[#D4AF37] via-[#F3E9D2] to-[#C59B27] rounded-xl hover:brightness-105 active:scale-[0.98] transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-[#2B1608] text-[#2B1608]" />
                  <span>{lang === 'mr' ? 'या दरांबाबत WhatsApp वर माहिती मिळवा' : 'Inquire About These Rates on WhatsApp'}</span>
                </button>
                <div className="text-[11px] text-center text-[#E8D4A2]/80">
                  {lang === 'mr' ? 'पुष्पाताई दळवी थेट मार्गदर्शन करतील: ' : 'Pushpatai will personally guide you: '}
                  <a href={`tel:+91${CONTACT_INFO.phone}`} className="font-mono font-bold underline text-white">
                    {CONTACT_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
