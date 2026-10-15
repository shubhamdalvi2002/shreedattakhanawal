import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2, User, Sparkles } from 'lucide-react';
import { Language } from '../types.ts';
import { CONTACT_INFO } from '../data/khanawalData.ts';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    purpose: 'dabba', // 'dabba' | 'single' | 'catering'
    mealShift: 'lunch',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const purposeText = formData.purpose === 'dabba'
      ? (lang === 'mr' ? 'मासिक डबा दर व चौकशी' : 'Monthly Tiffin Inquiry')
      : formData.purpose === 'catering'
      ? (lang === 'mr' ? 'समारंभ / पार्टी नियोजन' : 'Catering / Function Inquiry')
      : (lang === 'mr' ? 'थाळी व मेनू माहिती' : 'Thali & Menu Details');

    const shiftText = formData.mealShift === 'lunch'
      ? (lang === 'mr' ? 'सकाळ / दुपारचे जेवण (०९:०० ते ०१:००)' : 'Morning / Lunch (09:00 AM – 01:00 PM)')
      : formData.mealShift === 'dinner'
      ? (lang === 'mr' ? 'संध्याकाळ / रात्रीचे जेवण (०८:०० ते १०:००)' : 'Evening / Dinner (08:00 PM – 10:00 PM)')
      : (lang === 'mr' ? 'दोन्ही वेळ' : 'Both Shifts');

    const msg = lang === 'mr'
      ? `नमस्कार पुष्पाताई, मी श्री दत्त खानावळ वेबसाइटवरून चौकशी करत आहे:\n\n` +
        `• नाव: ${formData.name}\n` +
        `• मोबाईल: ${formData.phone}\n` +
        `• परिसर / पत्ता: ${formData.area || 'नोंदवलेला नाही'}\n` +
        `• चौकशीचा उद्देश: ${purposeText}\n` +
        `• जेवणाची वेळ: ${shiftText}\n` +
        (formData.notes ? `• टीप / प्रश्न: ${formData.notes}\n\n` : `\n`) +
        `कृपया दर व माहिती कळवावी.`
      : `Hello Pushpatai, I am sending an inquiry from Shree Datta Khanawal:\n\n` +
        `• Name: ${formData.name}\n` +
        `• Phone: ${formData.phone}\n` +
        `• Area: ${formData.area || 'Not provided'}\n` +
        `• Purpose: ${purposeText}\n` +
        `• Shift: ${shiftText}\n` +
        (formData.notes ? `• Question/Notes: ${formData.notes}\n\n` : `\n`) +
        `Please share rates and details.`;

    window.open(CONTACT_INFO.whatsappUrl(msg), '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#997404] uppercase mb-2">
            <Sparkles className="w-4 h-4 text-[#C59B27]" />
            <span>{lang === 'mr' ? 'थेट संपर्क व चौकशी' : 'Get In Touch'}</span>
          </div>
          <h2 className="font-marathi text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5A1420]">
            {lang === 'mr' ? 'आमच्याशी संपर्क साधा' : 'Contact Shree Datta Khanawal'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            {lang === 'mr'
              ? 'डब्याचे दर जाणून घेण्यासाठी, मेनू माहितीसाठी किंवा चौकशीसाठी थेट फोन किंवा WhatsApp करा.'
              : 'Call or message directly on WhatsApp to learn about tiffin rates and daily menus.'}
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl overflow-hidden max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Details Card (5 Cols) */}
          <div className="md:col-span-5 bg-gradient-to-br from-[#3B0C15] via-[#5A1420] to-[#2A0910] text-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-[#C59B27] text-[#2B1608] mb-4">
                ॥ श्री दत्त खानावळ ॥
              </div>
              <h3 className="font-marathi text-2xl font-bold text-white mb-2">
                {lang === 'mr' ? 'पुष्पा विलास दळवी' : 'Pushpa Vilas Dalvi'}
              </h3>
              <p className="text-xs text-[#E8D4A2] mb-8">
                {lang === 'mr' ? 'संचालिका व मुख्य व्यवस्थापक' : 'Proprietor & Head of Kitchen'}
              </p>

              {/* Rows */}
              <div className="space-y-6 text-sm">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#D4AF37] shrink-0 border border-white/10">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#E8D4A2]">{lang === 'mr' ? 'थेट फोन करा' : 'Call Directly'}</div>
                    <a
                      href={`tel:+91${CONTACT_INFO.phone}`}
                      className="font-mono text-base font-bold text-white hover:text-[#D4AF37] transition-colors"
                    >
                      {CONTACT_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#25D366] shrink-0 border border-white/10">
                    <MessageCircle className="w-4 h-4 fill-[#25D366] text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#E8D4A2]">{lang === 'mr' ? 'WhatsApp चॅट' : 'WhatsApp Chat'}</div>
                    <a
                      href={CONTACT_INFO.whatsappUrl(lang === 'mr' ? 'नमस्कार पुष्पाताई, मला जेवणाचे दर व माहिती हवी आहे.' : 'Hello Pushpatai, I would like information regarding meal rates.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-base font-bold text-white hover:text-[#D4AF37] transition-colors"
                    >
                      +91 {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Updated Shop Timings: 09:00 AM - 01:00 PM and 08:00 PM - 10:00 PM */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#D4AF37] shrink-0 border border-white/10">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#E8D4A2]">{lang === 'mr' ? 'खानावळीची वेळ' : 'Shop Timings'}</div>
                    <div className="text-xs text-white/95 font-medium">
                      {lang === 'mr' ? 'सकाळी ०९:०० ते दुपारी ०१:००' : 'Morning: 09:00 AM – 01:00 PM'}
                    </div>
                    <div className="text-xs text-white/95 font-medium">
                      {lang === 'mr' ? 'संध्याकाळी ०८:०० ते रात्री १०:००' : 'Evening: 08:00 PM – 10:00 PM'}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#D4AF37] shrink-0 border border-white/10">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#E8D4A2]">{lang === 'mr' ? 'सेवा क्षेत्र' : 'Service & Delivery'}</div>
                    <div className="text-xs text-white/90 leading-snug">
                      {lang === 'mr'
                        ? 'परिसरातील हॉस्टेल, ऑफिस, सोसायट्यांमध्ये घरपोच डबा डिलिव्हरी.'
                        : 'Doorstep tiffin delivery across nearby hostels, tech parks, and residential societies.'}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Action in Left Column */}
            <div className="pt-8 border-t border-white/10 mt-8">
              <a
                href={`tel:+91${CONTACT_INFO.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-[#D4AF37] text-[#2B1608] hover:bg-[#E8D4A2] transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>{lang === 'mr' ? 'आत्ताच कॉल करा' : 'Call Now'}</span>
              </a>
            </div>

          </div>

          {/* Right Inquiry Form (7 Cols) */}
          <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
            
            <div className="mb-6">
              <h4 className="font-marathi text-xl sm:text-2xl font-bold text-[#5A1420]">
                {lang === 'mr' ? 'चौकशी फॉर्म' : 'Inquiry Form'}
              </h4>
              <p className="text-xs text-neutral-500 mt-1">
                {lang === 'mr'
                  ? 'खालील फॉर्म भरून दरांबाबत व सेवेबाबत चौकशी करा.'
                  : 'Fill in your details below to inquire about rates and tiffin plans.'}
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#F8F4EB] border border-[#C59B27]/40 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h5 className="font-marathi text-lg font-bold text-[#5A1420]">
                  {lang === 'mr' ? 'धन्यवाद! तुमची चौकशी पाठवली आहे.' : 'Thank you! Your inquiry was sent.'}
                </h5>
                <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                  {lang === 'mr'
                    ? 'पुष्पाताई दळवी लवकरच तुमच्याशी संपर्क साधतील.'
                    : 'Pushpatai will respond promptly to your inquiry.'}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-[#7A1526] hover:underline pt-2 block mx-auto"
                >
                  {lang === 'mr' ? 'दुसरा फॉर्म भरा' : 'Send another inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Phone: No watermarks/placeholders */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      {lang === 'mr' ? 'तुमचे नाव *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-neutral-300 focus:outline-none focus:border-[#7A1526] focus:ring-1 focus:ring-[#7A1526] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      {lang === 'mr' ? 'मोबाईल नंबर *' : 'Mobile Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-neutral-300 focus:outline-none focus:border-[#7A1526] focus:ring-1 focus:ring-[#7A1526] bg-white"
                    />
                  </div>
                </div>

                {/* Delivery Area: No watermark/placeholder */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    {lang === 'mr' ? 'परिसर / पत्ता' : 'Area / Address'}
                  </label>
                  <input
                    type="text"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-neutral-300 focus:outline-none focus:border-[#7A1526] focus:ring-1 focus:ring-[#7A1526] bg-white"
                  />
                </div>

                {/* Purpose & Shift */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      {lang === 'mr' ? 'चौकशीचा प्रकार' : 'Inquiry Type'}
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-neutral-300 bg-white focus:outline-none focus:border-[#7A1526]"
                    >
                      <option value="dabba">{lang === 'mr' ? 'मासिक डबा दर व चौकशी' : 'Monthly Tiffin Inquiry'}</option>
                      <option value="single">{lang === 'mr' ? 'थाळी व मेनू माहिती' : 'Thali & Menu Details'}</option>
                      <option value="catering">{lang === 'mr' ? 'समारंभ / पार्टी नियोजन' : 'Catering / Bulk Inquiry'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      {lang === 'mr' ? 'जेवणाची वेळ' : 'Meal Shift'}
                    </label>
                    <select
                      value={formData.mealShift}
                      onChange={(e) => setFormData({ ...formData, mealShift: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-neutral-300 bg-white focus:outline-none focus:border-[#7A1526]"
                    >
                      <option value="lunch">{lang === 'mr' ? 'सकाळ / दुपार (०९:०० ते ०१:००)' : 'Morning / Lunch (09:00 AM – 01:00 PM)'}</option>
                      <option value="dinner">{lang === 'mr' ? 'संध्याकाळ / रात्र (०८:०० ते १०:००)' : 'Evening / Dinner (08:00 PM – 10:00 PM)'}</option>
                      <option value="both">{lang === 'mr' ? 'दोन्ही वेळ' : 'Both Shifts'}</option>
                    </select>
                  </div>
                </div>

                {/* Notes / Questions: No watermark/placeholder */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    {lang === 'mr' ? 'विशेष माहिती / प्रश्न' : 'Notes / Inquiry details'}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-neutral-300 focus:outline-none focus:border-[#7A1526] bg-white"
                  />
                </div>

                {/* Submit to WhatsApp */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-bold text-[#2B1608] bg-gradient-to-r from-[#D4AF37] via-[#F3E9D2] to-[#C59B27] rounded-xl hover:brightness-105 active:scale-[0.98] transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-[#2B1608] text-[#2B1608]" />
                  <span>{lang === 'mr' ? 'चौकशी माहिती WhatsApp वर पाठवा' : 'Send Inquiry via WhatsApp'}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
