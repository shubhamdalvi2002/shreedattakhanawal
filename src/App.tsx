/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, MenuItem } from './types.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TodaysSpecial } from './components/TodaysSpecial.tsx';
import { MenuSection } from './components/MenuSection.tsx';
import { DabbaCalculator } from './components/DabbaCalculator.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ItemModal } from './components/ItemModal.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';

export default function App() {
  const [lang, setLang] = useState<Language>('mr');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'mr' ? 'en' : 'mr'));
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#221618] flex flex-col font-sans selection:bg-[#C59B27]/25 selection:text-[#5A1420]">
      {/* Top Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
        />

        {/* Today's Special & Weekly Timetable */}
        <TodaysSpecial lang={lang} />

        {/* Full Menu & Royal Thalis */}
        <MenuSection
          lang={lang}
          onSelectItem={(item) => setSelectedItem(item)}
        />

        {/* Dabba Service & Rate Calculator */}
        <DabbaCalculator lang={lang} />

        {/* About Pushpa Vilas Dalvi & Kitchen Tradition */}
        <AboutSection lang={lang} />

        {/* Patron Reviews & FAQs */}
        <ReviewsSection lang={lang} />

        {/* Direct Contact & Inquiry Form */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Item Details Modal */}
      <ItemModal
        item={selectedItem}
        lang={lang}
        onClose={() => setSelectedItem(null)}
      />

      {/* Floating Actions */}
      <FloatingActions lang={lang} />
    </div>
  );
}
