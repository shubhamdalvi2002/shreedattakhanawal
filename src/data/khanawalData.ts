import { MenuItem, DaySpecial, DabbaPlan, Review } from '../types.ts';

import heroThaliImg from '../assets/images/khanawal_hero_thali_1792057212415.jpg';
import tiffinDabbaImg from '../assets/images/khanawal_tiffin_dabba_1792057212644.jpg';
import pithlaBhakriImg from '../assets/images/khanawal_pithla_bhakri_1792057214411.jpg';
import puranPoliImg from '../assets/images/khanawal_puran_poli_1792057214775.jpg';
import tiffinLogoImg from '../assets/images/tiffin_emblem_logo_1792059898831.jpg';
import chickenThaliImg from '../assets/images/chicken_thali_maharashtrian_1792061431936.jpg';
import eggCurryImg from '../assets/images/egg_curry_thali_1792061432490.jpg';

export const IMAGES = {
  heroThali: heroThaliImg,
  tiffinDabba: tiffinDabbaImg,
  pithlaBhakri: pithlaBhakriImg,
  puranPoli: puranPoliImg,
  tiffinLogo: tiffinLogoImg,
  chickenThali: chickenThaliImg,
  eggCurry: eggCurryImg,
};

export const CONTACT_INFO = {
  name: 'श्री दत्त खानावळ',
  nameEn: 'Shree Datta Khanawal',
  proprietorMr: 'पुष्पा विलास दळवी',
  proprietorEn: 'Pushpa Vilas Dalvi',
  phone: '7507098005',
  phoneFormatted: '+91 75070 98005',
  whatsappUrl: (msg: string) => `https://wa.me/917507098005?text=${encodeURIComponent(msg)}`,
  addressMr: 'अगस्ती विद्यालयासमोर, अकोले-कोल्हार-घोटी रोड, अकोले, जि. अहिल्यानगर ४२२६०१',
  addressEn: 'Infront of Agasti Vidyalaya, Akole Kolhar Ghoti Road, Akole Dist. Ahilyanagar 422601',
  landmarkMr: 'अगस्ती विद्यालयासमोर, अकोले',
  landmarkEn: 'Infront of Agasti Vidyalaya, Akole',
  googleMapsUrl: 'https://maps.google.com/?q=Infront+of+Agasti+Vidyalaya,+Akole+Kolhar+Ghoti+Road,+Akole+Dist.+Ahilyanagar+422601',
  googleMapsEmbed: 'https://maps.google.com/maps?q=Infront+of+Agasti+Vidyalaya+Akole+Kolhar+Ghoti+Road+Akole+Dist+Ahilyanagar+422601&t=&z=16&ie=UTF8&iwloc=&output=embed',
  lunchTimingsMr: 'सकाळी ०९:०० ते दुपारी ०१:००',
  lunchTimingsEn: '09:00 AM to 01:00 PM',
  dinnerTimingsMr: 'संध्याकाळी ०८:०० ते रात्री १०:००',
  dinnerTimingsEn: '08:00 PM to 10:00 PM',
};

export const WEEKLY_SPECIALS: DaySpecial[] = [
  {
    dayIndex: 1, // Monday
    dayNameMr: 'सोमवार',
    dayNameEn: 'Monday',
    lunchMainMr: 'भाजी-पोळी व रेग्युलर थाळी बेत',
    lunchMainEn: 'Daily Bhaaji-Poli & Regular Thali Special',
    lunchDetailsMr: 'ताजी भाजी, ३ ते ४ गरम चपात्या, खमंग डाळ-भात व लोणचे',
    lunchDetailsEn: 'Daily fresh sabzi, 3 to 4 hot chapatis, dal-rice & pickle',
    dinnerMainMr: 'वांगी मसाला व मऊ घडीच्या पोळ्या',
    dinnerMainEn: 'Vangi Masala & Soft Wheat Phulkas',
    dinnerDetailsMr: 'काळ्या मसाल्यातलं भरलं वांगं, चपात्या, पिवळं वरण, भात व कैरीचं लोणचं',
    dinnerDetailsEn: 'Traditional stuffed brinjal in goda masala, chapatis, yellow dal, rice & pickle',
    sweetMr: 'शेवयांची बदाम खीर',
    sweetEn: 'Almond Vermicelli Kheer'
  },
  {
    dayIndex: 2, // Tuesday
    dayNameMr: 'मंगळवार',
    dayNameEn: 'Tuesday',
    lunchMainMr: 'मिनी थाळी व पिठलं-भाकरी',
    lunchMainEn: 'Mini Thali & Pithla-Bhakri',
    lunchDetailsMr: '१ ताजी भाजी, ३ चपात्या, डाळ-भात किंवा खमंग पिठलं-भाकरी',
    lunchDetailsEn: 'Fresh sabzi, 3 chapatis, dal-rice or hot pithla-bhakri',
    dinnerMainMr: 'मेथीची भाजी व मुग डाळ खिचडी',
    dinnerMainEn: 'Fresh Methi Bhaaji & Moong Dal Khichdi',
    dinnerDetailsMr: 'शेंगदाणा कूट घालून ताजी मेथी, चपात्या, मऊ साजूक तूप खिचडी आणि खमंग कढी',
    dinnerDetailsEn: 'Fenugreek greens, chapatis, moong khichdi & spiced kadhi',
  },
  {
    dayIndex: 3, // Wednesday
    dayNameMr: 'बुधवार',
    dayNameEn: 'Wednesday',
    lunchMainMr: 'चिकन करी थाळी व अंडा करी थाळी विशेष',
    lunchMainEn: 'Wednesday Chicken & Egg Curry Feast',
    lunchDetailsMr: 'झणझणीत चिकन करी किंवा अंडा करी, गरम भाकरी / चपात्या आणि भात',
    lunchDetailsEn: 'Spicy chicken curry or egg curry with bhakri/chapatis & rice',
    dinnerMainMr: 'चिकन मसाला किंवा रेग्युलर थाळी',
    dinnerMainEn: 'Chicken Masala or Regular Thali',
    dinnerDetailsMr: 'घरगुती वाटणातला चिकन मसाला किंवा २ भाज्यांची रेग्युलर थाळी',
    dinnerDetailsEn: 'Homestyle chicken masala or regular 2-sabzi veg thali',
  },
  {
    dayIndex: 4, // Thursday
    dayNameMr: 'गुरुवार',
    dayNameEn: 'Thursday',
    lunchMainMr: 'सात्त्विक रेग्युलर थाळी व डाळ-भात',
    lunchMainEn: 'Thursday Pure Veg Regular Thali & Dal-Bhat',
    lunchDetailsMr: '२ ताज्या भाज्या, ४ चपात्या, तुरीचे घट्ट वरण व सुगंधी भात',
    lunchDetailsEn: '2 Fresh sabzis, 4 soft chapatis, rich yellow dal & rice',
    dinnerMainMr: 'मसालेभात व खमंग कढी',
    dinnerMainEn: 'Authentic Masale Bhat & Spiced Kadhi',
    dinnerDetailsMr: 'सुगंधी तोंडली-मटार मसालेभात, साजूक तूप, उडीद पापड आणि ताकाची कढी',
    dinnerDetailsEn: 'Fragrant spiced rice with ivy gourd, peas, ghee, papad & kadhi',
    sweetMr: 'रवा-केसर शिरा',
    sweetEn: 'Saffron Semolina Sheera'
  },
  {
    dayIndex: 5, // Friday
    dayNameMr: 'शुक्रवार',
    dayNameEn: 'Friday',
    lunchMainMr: 'स्पेशल चिकन थाळी व अंडा करी',
    lunchMainEn: 'Special Chicken & Egg Feast',
    lunchDetailsMr: 'चिकन करी + चिकन फ्राय, भाकरी / चपाती आणि गरम भात',
    lunchDetailsEn: 'Chicken curry + chicken fry, bhakri/chapatis and steamed rice',
    dinnerMainMr: 'चिकन बिर्याणी किंवा भाजी-पोळी',
    dinnerMainEn: 'Dum Chicken Biryani or Bhaji-Poli',
    dinnerDetailsMr: 'सुगंधी दम चिकन बिर्याणी किंवा रोजची साधी भाजी-पोळी',
    dinnerDetailsEn: 'Fragrant chicken biryani or everyday comfort bhaji-poli',
  },
  {
    dayIndex: 6, // Saturday
    dayNameMr: 'शनिवार',
    dayNameEn: 'Saturday',
    lunchMainMr: 'रेग्युलर थाळी व भाजी-पोळी',
    lunchMainEn: 'Regular Thali & Bhaji-Poli Weekend Special',
    lunchDetailsMr: '२ प्रकारच्या भाज्या, ४ मऊ चपात्या, डाळ-भात व लोणचे',
    lunchDetailsEn: '2 Veg preparations, 4 wheat chapatis, dal-rice & pickle',
    dinnerMainMr: 'दाल खिचडी तडका किंवा मिनी थाळी',
    dinnerMainEn: 'Dal Khichdi Tadka or Mini Thali',
    dinnerDetailsMr: 'लसणी तडका खिचडी, साजूक तूप, कांदा व पापड',
    dinnerDetailsEn: 'Double-dal tempered khichdi with ghee, onion & papad',
  },
  {
    dayIndex: 0, // Sunday
    dayNameMr: 'रविवार (रविवार मेजवानी)',
    dayNameEn: 'Sunday Grand Feast',
    lunchMainMr: 'स्पेशल चिकन थाळी / चिकन बिर्याणी / रेग्युलर थाळी',
    lunchMainEn: 'Grand Sunday Feast (Special Chicken Thali & Biryani)',
    lunchDetailsMr: 'चिकन करी + चिकन फ्राय + भाकरी/चपाती + भात, किंवा शाकाहारी रेग्युलर थाळी',
    lunchDetailsEn: 'Chicken curry, chicken fry, bhakri/chapatis & rice or regular veg feast',
    dinnerMainMr: 'चिकन करी थाळी किंवा मिनी थाळी',
    dinnerMainEn: 'Sunday Dinner Special',
    dinnerDetailsMr: 'झणझणीत चिकन करी किंवा हलकी मिनी थाळी',
    dinnerDetailsEn: 'Fiery chicken curry or light comforting mini thali',
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // 1. शाकाहारी थाळी (Veg Thalis)
  {
    id: 'bhaji-poli',
    nameMr: 'भाजी-पोळी',
    nameEn: 'Bhaji-Poli Meal',
    category: 'veg-thali',
    dietType: 'veg',
    descriptionMr: '१ ताजी रोजची भाजी आणि ३ मऊ गरमागरम चपात्या.',
    descriptionEn: '1 fresh seasonal vegetable sabzi with 3 soft wheat chapatis.',
    price: 50,
    badgeMr: 'रोजचा बेत',
    badgeEn: 'Daily Favorite',
    image: IMAGES.tiffinDabba,
    itemsMr: ['१ ताजी भाजी', '३ चपात्या'],
    itemsEn: ['1 Fresh Sabzi', '3 Soft Chapatis']
  },
  {
    id: 'mini-thali',
    nameMr: 'मिनी थाळी',
    nameEn: 'Mini Thali',
    category: 'veg-thali',
    dietType: 'veg',
    descriptionMr: '१ ताजी भाजी, ३ गरमागरम चपात्या आणि साधे वरण-भात.',
    descriptionEn: '1 fresh sabzi, 3 hot chapatis, and traditional dal-rice.',
    price: 70,
    badgeMr: 'किफायतशीर',
    badgeEn: 'Value Meal',
    image: IMAGES.pithlaBhakri,
    itemsMr: ['१ ताजी भाजी', '३ चपात्या', 'डाळ-भात'],
    itemsEn: ['1 Fresh Sabzi', '3 Chapatis', 'Dal-Rice']
  },
  {
    id: 'regular-thali',
    nameMr: 'रेग्युलर थाळी',
    nameEn: 'Regular Thali',
    category: 'veg-thali',
    dietType: 'veg',
    descriptionMr: '२ ताज्या भाज्या, ४ मऊ चपात्या आणि गरमागरम डाळ-भात.',
    descriptionEn: '2 fresh vegetables (1 dry + 1 gravy/usal), 4 soft chapatis, and dal-rice.',
    price: 90,
    badgeMr: 'सर्वाधिक पसंती',
    badgeEn: 'Best Seller',
    image: IMAGES.heroThali,
    itemsMr: ['२ भाज्या', '४ चपात्या', 'डाळ-भात'],
    itemsEn: ['2 Vegetables', '4 Chapatis', 'Dal-Rice']
  },

  // 2. मांसाहारी थाळी (Non-Veg Thalis)
  {
    id: 'egg-curry-thali',
    nameMr: 'अंडा करी थाळी',
    nameEn: 'Egg Curry Thali',
    category: 'nonveg-thali',
    dietType: 'nonveg',
    descriptionMr: 'अस्सल घाटी वाटणातील झणझणीत अंडा करी, १ भाकरी किंवा २ चपात्या आणि वाफाळलेला भात.',
    descriptionEn: 'Spicy stone-ground Maharashtrian egg curry, 1 bhakri or 2 chapatis, and steamed rice.',
    price: 100,
    badgeMr: 'अस्सल गावरान',
    badgeEn: 'Rustic Special',
    image: IMAGES.eggCurry,
    itemsMr: ['अंडा करी', '१ भाकरी किंवा २ चपात्या', 'भात'],
    itemsEn: ['Egg Curry', '1 Bhakri or 2 Chapatis', 'Rice']
  },
  {
    id: 'chicken-curry-thali',
    nameMr: 'चिकन करी थाळी',
    nameEn: 'Chicken Curry Thali',
    category: 'nonveg-thali',
    dietType: 'nonveg',
    descriptionMr: 'घरगुती काळ्या मसाल्यातील चविष्ट चिकन करी रस्सा, १ भाकरी किंवा २ चपात्या आणि भात.',
    descriptionEn: 'Traditional tender chicken cooked in authentic Maharashtrian rassa curry, 1 bhakri or 2 chapatis, and rice.',
    price: 150,
    badgeMr: 'गावरान रस्सा',
    badgeEn: 'Special Curry',
    image: IMAGES.chickenThali,
    itemsMr: ['चिकन करी', '१ भाकरी किंवा २ चपात्या', 'भात'],
    itemsEn: ['Chicken Curry', '1 Bhakri or 2 Chapatis', 'Rice']
  },
  {
    id: 'special-chicken-thali',
    nameMr: 'स्पेशल चिकन थाळी',
    nameEn: 'Special Chicken Thali',
    category: 'nonveg-thali',
    dietType: 'nonveg',
    descriptionMr: 'चिकन करी + खमंग सुक्का चिकन फ्राय, १ भाकरी किंवा २ चपात्या आणि वाफाळलेला भात.',
    descriptionEn: 'Grand feast featuring chicken curry rassa + dry spiced chicken fry, 1 bhakri or 2 chapatis, and rice.',
    price: 180,
    badgeMr: 'शाही मेजवानी',
    badgeEn: 'Chef Special',
    image: IMAGES.chickenThali,
    itemsMr: ['चिकन करी', 'चिकन फ्राय', '१ भाकरी किंवा २ चपात्या', 'भात'],
    itemsEn: ['Chicken Curry', 'Chicken Fry', '1 Bhakri or 2 Chapatis', 'Rice']
  },

  // 3. इतर पदार्थ (Other Dishes)
  {
    id: 'dal-bhat',
    nameMr: 'डाळ-भात',
    nameEn: 'Dal-Bhat',
    category: 'other',
    dietType: 'veg',
    descriptionMr: 'सात्त्विक तुरीचे पिवळे वरण आणि गरमागरम वाफाळलेला भात.',
    descriptionEn: 'Comforting homestyle yellow dal and steaming rice.',
    price: 50,
    itemsMr: ['घट्ट सात्त्विक डाळ', 'सुगंधी भात'],
    itemsEn: ['Homestyle Dal', 'Steamed Rice']
  },
  {
    id: 'chicken-masala',
    nameMr: 'चिकन मसाला',
    nameEn: 'Chicken Masala',
    category: 'other',
    dietType: 'nonveg',
    descriptionMr: 'भाजलेला कांदा-खोबरे वाटणातील खमंग घट्ट चिकन मसाला.',
    descriptionEn: 'Rich, aromatic chicken cooked in thick roasted spice masala gravy.',
    price: 120,
    itemsMr: ['चिकन मसाला बाऊल'],
    itemsEn: ['Chicken Masala Bowl']
  },
  {
    id: 'chicken-biryani',
    nameMr: 'चिकन बिर्याणी',
    nameEn: 'Chicken Biryani',
    category: 'other',
    dietType: 'nonveg',
    descriptionMr: 'सुगंधी बासमती तांदूळ आणि मऊ रसाळ चिकनने तयार केलेली खमंग दम बिर्याणी.',
    descriptionEn: 'Fragrant basmati rice dum cooked with marinated chicken and aromatic herbs.',
    price: 160,
    badgeMr: 'दम बिर्याणी',
    badgeEn: 'Dum Biryani',
    itemsMr: ['चिकन बिर्याणी बाऊल'],
    itemsEn: ['Chicken Biryani Bowl']
  },

  // 4. अतिरिक्त पदार्थ (Extras)
  {
    id: 'extra-chapati',
    nameMr: 'एक्स्ट्रा चपाती',
    nameEn: 'Extra Chapati',
    category: 'extra',
    dietType: 'veg',
    descriptionMr: 'गरमागरम मऊ गव्हाची चपाती.',
    descriptionEn: 'Fresh hot whole-wheat flatbread.',
    price: 10,
    itemsMr: ['१ चपाती'],
    itemsEn: ['1 Chapati']
  },
  {
    id: 'extra-bhakri',
    nameMr: 'एक्स्ट्रा भाकरी',
    nameEn: 'Extra Bhakri',
    category: 'extra',
    dietType: 'veg',
    descriptionMr: 'तव्यावर खमंग भाजलेली ताजी ज्वारी किंवा बाजरी भाकरी.',
    descriptionEn: 'Crisp hot pan-roasted Jowar or Bajra bhakri.',
    price: 15,
    itemsMr: ['१ भाकरी'],
    itemsEn: ['1 Bhakri']
  },
  {
    id: 'water-bottle',
    nameMr: 'पाण्याची बाटली',
    nameEn: 'Water Bottle',
    category: 'extra',
    descriptionMr: 'शुद्ध सीलबंद पिण्याचे पाणी (१ लिटर बाटली).',
    descriptionEn: 'Packaged drinking water bottle (1 Litre).',
    price: 15,
    itemsMr: ['१ लिटर बाटली'],
    itemsEn: ['1 Litre Bottle']
  }
];

export const DABBA_PLANS: DabbaPlan[] = [
  {
    id: 'plan-regular',
    titleMr: 'नियमित संपूर्ण डबा (Full Dabba)',
    titleEn: 'Regular Full Dabba Plan',
    taglineMr: 'ऑफिस कर्मचारी व विद्यार्थ्यांसाठी परिपूर्ण व पौष्टिक डबा',
    taglineEn: 'The most wholesome everyday balanced meal for professionals & students',
    monthlyPrice: 2600,
    perMealPrice: 90,
    popular: true,
    featuresMr: [
      '४ मऊ गव्हाच्या पोळ्या किंवा २ ज्वारी/बाजरी भाकरी',
      '१ ताजी हंगामी भाजी (रोज वेगळी चव)',
      '१ रस्सा आमटी किंवा उसळ',
      'मऊ वरण आणि वाफाळलेला भात',
      'लोणचे, कांदा व दर शनिवारी पापड',
      'रविवार सुट्टी किंवा विशेष रविवार मेनू पर्याय',
      'वेळेवर थेट घरापर्यंत / ऑफिसपर्यंत डिलिव्हरी'
    ],
    featuresEn: [
      '4 Soft whole wheat chapatis or 2 fresh bhakris',
      '1 Seasonal dry vegetable (daily rotating variety)',
      '1 Authentic dal or legume usal',
      'Comforting varan and steamed rice',
      'Pickle, onion & Saturday special papad',
      'Flexible pausing option when you travel',
      'Punctual delivery directly to home/office'
    ]
  },
  {
    id: 'plan-mini',
    titleMr: 'मिनी डबा (Mini Dabba)',
    titleEn: 'Mini Quick Dabba Plan',
    taglineMr: 'कमी भूक असलेल्यांसाठी किंवा हलके जेवण आवडणाऱ्यांसाठी',
    taglineEn: 'Light, quick, and economical option for lighter eaters',
    monthlyPrice: 1950,
    perMealPrice: 70,
    featuresMr: [
      '३ मऊ गव्हाच्या पोळ्या',
      '१ सुक्की भाजी किंवा उसळ',
      'वरण-भात व लोणचे',
      'स्वच्छ स्टेनलेस स्टील कॅरियरमध्ये पॅकिंग',
      'कमी तिखट/मध्यम तिखट आवडीनुसार'
    ],
    featuresEn: [
      '3 Soft wheat chapatis',
      '1 Homestyle vegetable or sprout usal',
      'Steamed rice, dal & pickle',
      'Neatly packed in food-grade steel carrier',
      'Mild / medium spice tailored to preference'
    ]
  },
  {
    id: 'plan-both-meals',
    titleMr: 'दोन वेळचा डबा (Lunch + Dinner Combo)',
    titleEn: 'Twin Meal Plan (Lunch + Dinner)',
    taglineMr: 'दुपार आणि रात्र दोन्ही वेळेचे निश्चिंत घरगुती जेवण',
    taglineEn: 'Complete daily nutrition: fresh lunch and freshly cooked dinner',
    monthlyPrice: 5000,
    perMealPrice: 85,
    featuresMr: [
      'दुपारी व रात्री दोन्ही वेळा गरमागरम ताजे जेवण',
      'दुपारी पोळी-भाजी-वरणभात, रात्री विशेष बेत (खिचडी, भाकरी, उसळ)',
      'महिनाभर रोज नवीन मेनू, कधीही कंटाळा येत नाही',
      'आजारी असल्यास विशेष पथ्याचे सात्त्विक जेवण पुरवले जाईल',
      'सुट्टी असल्यास डबा पुढे ढकलण्याची सोय (Flexible Roll-over)'
    ],
    featuresEn: [
      'Freshly prepared separate deliveries for both lunch & dinner',
      'Lunch: Chapati-sabzi-dal-rice; Dinner: Evening specials (bhakri/khichdi)',
      'Zero repetitive boredom with a 30-day rotating menu roster',
      'Convalescent / light diet cooked separately when unwell',
      'Easy pause/skip days roll-over to the next month'
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    nameMr: 'रोहित जोशी',
    nameEn: 'Rohit Joshi',
    roleMr: 'सॉफ्टवेअर इंजिनिअर (पुणे)',
    roleEn: 'Software Engineer (Pune)',
    rating: 5,
    textMr: 'गेल्या ६ महिन्यांपासून पुष्पाताईंचा डबा घेतो आहे. बाहेरच्या हॉटेलच्या जेवणाने पोट खराब व्हायचं, पण श्री दत्त खानावळीमुळे अगदी आईच्या हातच्या जेवणाची आठवण येते. ज्वारीची भाकरी आणि पिठलं अप्रतिम असतं!',
    textEn: 'Have been subscribing to Pushpatai’s tiffin for 6 months. Eating hotel food daily had ruined my stomach, but Shree Datta Khanawal tastes exactly like mother’s cooking. The jowar bhakri and pithla are unbeatable!',
    verified: true
  },
  {
    id: 'rev-2',
    nameMr: 'अनिता कुलकर्णी',
    nameEn: 'Anita Kulkarni',
    roleMr: 'शिक्षिका व गृहिणी',
    roleEn: 'Teacher & Homemaker',
    rating: 5,
    textMr: 'घरात पाहुणे आल्यावर आम्ही श्री दत्त खानावळ मधून पुरणपोळी थाळी मागवली होती. पोळी इतकी मऊ आणि पुरण इतकं चविष्ट होतं की सर्वांनी मनसोक्त दाद दिली. स्वच्छता आणि वेळेवर सेवा वाखाणण्याजोगी आहे.',
    textEn: 'We ordered the Puran Poli feast when relatives visited us. The puran polis were so soft and delicately spiced that everyone was raving about it. Exceptional cleanliness and punctuality.',
    verified: true
  },
  {
    id: 'rev-3',
    nameMr: 'अजिंक्य पाटील',
    nameEn: 'Ajinkya Patil',
    roleMr: 'स्पर्धा परीक्षा विद्यार्थी',
    roleEn: 'Competitive Exam Aspirant',
    rating: 5,
    textMr: 'अभ्यासाच्या दगदगीत वेळेवर पौष्टिक जेवण मिळणं ही मोठी गोष्ट आहे. इथल्या जेवणात कसलाही सोडा नसतो किंवा अवाजवी तेल नसतं. दरही अत्यंत वाजवी आहेत. पुष्पाताईंची आपुलकी कौतुकास्पद आहे.',
    textEn: 'Getting nutritious, on-time food during hectic exam preparation is a blessing. No excessive oil, no soda. Very reasonable pricing and Pushpatai treats every student like her own child.',
    verified: true
  }
];

export const FAQS = [
  {
    qMr: 'डबा सुरू करण्यासाठी पूर्वसूचना किती दिवस आधी द्यावी लागते?',
    qEn: 'How much advance notice is required to start the monthly tiffin?',
    aMr: 'तुम्ही फक्त १ दिवस आधी आम्हाला फोन किंवा WhatsApp वर सांगू शकता. दुसऱ्या दिवसापासून तुमचा डबा नियमित वेळेत सुरू होतो.',
    aEn: 'Just inform us 1 day in advance via phone or WhatsApp. Your daily meal service begins from the very next day.'
  },
  {
    qMr: 'आम्ही बाहेरगावी गेल्यावर किंवा सुट्टी असल्यास डबा बंद ठेवता येतो का?',
    qEn: 'Can I pause the tiffin service if I am travelling or on holiday?',
    aMr: 'होय, नक्कीच! आदल्या दिवशी रात्री ९ वाजेपर्यंत मेसेज करून तुम्ही डबा थांबवू शकता. तेवढे दिवस तुमच्या मासिक शुल्कातून पुढे ढकलले जातात.',
    aEn: 'Yes! Simply drop a WhatsApp message before 9 PM the previous night. Paused days are carried forward in your subscription.'
  },
  {
    qMr: 'जेवणात काय जिन्नस वापरले जातात?',
    qEn: 'What quality of ingredients and oil do you use?',
    aMr: 'आम्ही घरी तयार केलेले पारंपरिक मसाले (घाटी व गोडा मसाला), शुद्ध वनस्पती / शेंगदाणा तेल, साजूक तूप आणि रोजच्या ताज्या भाज्या वापरतो. कसलेही कृत्रिम रंग किंवा चव वाढवणारे पदार्थ वापरले जात नाहीत.',
    aEn: 'We use homemade hand-ground spices (Goda & Ghati masala), pure groundnut oil, real cow ghee, and fresh vegetables sourced daily. Zero artificial colors, soda, or MSG.'
  },
  {
    qMr: 'लहान घरगुती समारंभांसाठी किंवा ऑफिस पार्टीसाठी ऑर्डर स्वीकारता का?',
    qEn: 'Do you accept small family function or office party catering orders?',
    aMr: 'होय, १० ते ५० व्यक्तींच्या घरगुती समारंभ, वाढदिवस, सत्यनारायण पूजा किंवा ऑफिस मेजवानीसाठी खास महाराष्ट्रीयन जेवणाची ऑर्डर २ दिवस आधी स्वीकारली जाते.',
    aEn: 'Yes, we take party and gathering orders for 10 to 50 guests (Satyanarayan puja, family gatherings, office get-togethers) with 2 days prior notice.'
  }
];
