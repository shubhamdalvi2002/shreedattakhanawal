export type Language = 'mr' | 'en';

export interface MenuItem {
  id: string;
  nameMr: string;
  nameEn: string;
  category: 'veg-thali' | 'nonveg-thali' | 'other' | 'extra';
  dietType?: 'veg' | 'nonveg';
  descriptionMr?: string;
  descriptionEn?: string;
  price: number;
  highlight?: string;
  image?: string;
  badgeMr?: string;
  badgeEn?: string;
  itemsMr?: string[];
  itemsEn?: string[];
}

export interface DaySpecial {
  dayIndex: number; // 0 for Sunday, 1 for Monday, etc.
  dayNameMr: string;
  dayNameEn: string;
  lunchMainMr: string;
  lunchMainEn: string;
  lunchDetailsMr: string;
  lunchDetailsEn: string;
  dinnerMainMr: string;
  dinnerMainEn: string;
  dinnerDetailsMr: string;
  dinnerDetailsEn: string;
  sweetMr?: string;
  sweetEn?: string;
}

export interface DabbaPlan {
  id: string;
  titleMr: string;
  titleEn: string;
  taglineMr: string;
  taglineEn: string;
  monthlyPrice: number;
  perMealPrice: number;
  featuresMr: string[];
  featuresEn: string[];
  popular?: boolean;
}

export interface Review {
  id: string;
  nameMr: string;
  nameEn: string;
  roleMr: string;
  roleEn: string;
  rating: number;
  textMr: string;
  textEn: string;
  verified: boolean;
}
