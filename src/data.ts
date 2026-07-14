import {
  FileText,
  Plane,
  PlaneLanding,
  GraduationCap,
  Video,
  MonitorPlay,
  Layers,
  Award,
  Users,
  TrendingUp,
  Building2,
  type LucideIcon,
} from 'lucide-react'
import logoUrl from './assets/logo.png'
import officePhoto from './assets/office.webp'
import mandalayPhoto from './assets/mandalay.webp'
import mandalayHillPhoto from './assets/mandalay2.webp'
import japanMapImg from './assets/japan-map.jpg'
import n4TextbooksImg from './assets/n4-textbooks.webp'
import activity1 from './assets/activity1.webp'
import activity2 from './assets/activity2.webp'
import activity3 from './assets/activity3.webp'
import activity4 from './assets/activity4.webp'
import activity5 from './assets/activity5.webp'
import activity6 from './assets/activity6.webp'
import activity7 from './assets/activity7.webp'
import activity8 from './assets/activity8.webp'
import activity9 from './assets/activity9.webp'
import activity10 from './assets/activity10.webp'
import airportPhoto from './assets/airport.webp'
import heroArrivals from './assets/hero-arrivals.webp'

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const site = {
  name: 'Zin Apex Education',
  academy: 'Japanese Language Academy',
  since: 2023,
  tagline: 'Your trusted pathway to study in Japan',
  applicationFormUrl:
    'https://drive.google.com/drive/folders/1YH9ASp1qnexRfQu1rpSywLvuWS3GSNWw?usp=sharing',
  formPdfUrl:
    'https://drive.google.com/file/d/1FepKHj1IV47rYsHXwyIP0Ep935Ot3b-W/view?usp=sharing',
  formSampleUrl:
    'https://drive.google.com/file/d/1IJabKHY_KPiOrv-Jt5SLry_Oefvz8saU/view?usp=sharing',
  orientationFormUrl: 'https://forms.gle/Rk8dxPJeJgLSfRpx5',
  promoVideoId: 'k_TSE2nYfec',
  reviewVideoIds: ['iNrPONtDoE0', 'smdPEuCUfxA'],
  office: {
    label: 'Mandalay Office',
    address:
      '85/5, 3rd Floor, Between 78th & 79th St, 38 B St, Mahaaungmyay Tsp, Mandalay',
    phones: ['+95 9 982626367', '+95 9 756367766'],
    email: 'zinapexeducation@gmail.com',
    hours: '8:30 AM – 5:30 PM',
    holiday: 'Monday & Sunday (weekly)',
  },
  social: {
    facebook: 'https://www.facebook.com/share/17XxPFQ3bF/?mibextid=wwXIfr',
    tiktok: 'https://www.tiktok.com/@zinapexeducation?_r=1&_t=ZS-91luezS2RV9',
    telegram: 'https://t.me/zinapexeducation',
    youtube: 'https://youtube.com/@zinapexeducation?si=i3a4hqQYHUi2hiu6',
  },
}

export const founder = {
  name: 'Zin Thu Aung',
  initials: 'ZA',
  role: 'Founder & Educator',
  bio: "I'm Zin Thu Aung, a Burmese educator and content creator based in Japan, and the founder of Zin Apex Education. My mission is to guide Burmese students with clear pathways, accurate information, and full support — from language training to arrival assistance — helping them succeed both academically and culturally in Japan.",
  youtube:
    'I also run Zin Japan Life on YouTube, sharing high-quality vlogs, knowledge sharing and tips, visa information, Japanese learning content, and real-life guidance for Burmese people living in or planning to come to Japan.',
  qualifications: [
    'Graduated — Hamamatsu Japanese Language College',
    'Shizuoka Eiwa University, Japan (Business Management)',
    'Yadanabon University, Mandalay',
  ],
}

export const journey = [
  {
    step: '01',
    title: 'Free Consultation',
    description:
      'Talk with our team about your goals, budget, and the best intake for you.',
  },
  {
    step: '02',
    title: 'Choose Your School',
    description:
      'We match you with a reputable language school in one of our five partner cities.',
  },
  {
    step: '03',
    title: 'Documents & COE',
    description:
      'We prepare your documents precisely and submit your COE application.',
  },
  {
    step: '04',
    title: 'Visa & Travel',
    description:
      'Full visa guidance, air-ticket booking, and pre-departure orientation.',
  },
  {
    step: '05',
    title: 'Arrival in Japan',
    description:
      'We welcome you at the airport and escort you safely to your accommodation.',
  },
]

export type Service = {
  icon: LucideIcon
  title: string
  items: string[]
}

export const services: Service[] = [
  {
    icon: FileText,
    title: 'Student Placement & Documentation',
    items: [
      'Connecting students with reputable language schools in Japan',
      'Assisting with preparation and organization of all required documents',
      'Supporting COE (Certificate of Eligibility) applications and compiling supporting paperwork',
    ],
  },
  {
    icon: Plane,
    title: 'Visa & Travel Arrangements',
    items: [
      'Providing full guidance through the visa application process',
      'Booking airline tickets and offering travel advice',
      'Preparing all immigration-related documents to ensure smooth entry',
    ],
  },
  {
    icon: PlaneLanding,
    title: 'Arrival Support in Japan',
    items: [
      'Welcoming students at the airport upon arrival',
      'Safely escorting students to their accommodation',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Japanese Language & Skills Training',
    items: [
      'Offering JLPT N5 and N4 level language courses',
      'Conducting speaking-focused classes to boost conversational ability',
      'Providing practical skills training classes',
      'Delivering flexible N5 video lessons for convenient self-study',
    ],
  },
]

export const courses = [
  {
    code: 'N5',
    title: 'Japanese Foundation',
    level: 'Beginner',
    duration: '3 months',
    description:
      'Build a solid foundation in Japanese — hiragana, katakana, basic grammar, and everyday vocabulary.',
    image: unsplash('1456513080510-7bf3a84b82f8', 900),
    features: [
      'Hiragana, katakana & basic kanji',
      'Basic greetings and grammar',
      'Everyday vocabulary and phrases',
      'Listening and pronunciation practice',
    ],
  },
  {
    code: 'N4',
    title: 'Elementary Japanese',
    level: 'Elementary',
    duration: '4 months',
    description:
      'Progress to intermediate grammar, kanji, reading, and listening for the JLPT N4 exam.',
    image: unsplash('1524178232363-1fb2b075b655', 900),
    features: [
      '300+ kanji characters',
      'Complex grammar patterns',
      'Reading and article comprehension',
      'Conversation practice for daily life',
    ],
  },
  {
    code: 'SPK',
    title: 'Speaking-Focused Class',
    level: 'All levels',
    duration: 'Flexible',
    description:
      'Conversation-centred lessons that build confidence and fluency for daily life in Japan.',
    image: unsplash('1523240795612-9a054b0db644', 900),
    features: [
      'Conversation-centred lessons',
      'Confidence and fluency building',
      'Real-life situational practice',
    ],
  },
  {
    code: 'SKL',
    title: 'Practical Skills Training',
    level: 'All levels',
    duration: 'Flexible',
    description:
      'Real-world skills and cultural know-how to help you adapt smoothly to life and study in Japan.',
    image: unsplash('1531545514256-b1400bc00f31', 900),
    features: [
      'Cultural know-how for Japan',
      'Daily-life practical skills',
      'Smooth adaptation guidance',
    ],
  },
]

export const intakes = [
  {
    intake: 'April Intake, 2026',
    registration: 'September 2025',
    coeSubmission: 'October 2025',
    coeResult: 'February 2026',
  },
  {
    intake: 'July Intake, 2026',
    registration: 'December 2025',
    coeSubmission: 'January 2026',
    coeResult: 'May 2026',
  },
  {
    intake: 'October Intake, 2026',
    registration: 'March 2026',
    coeSubmission: 'April 2026',
    coeResult: 'August 2026',
  },
]

export const images = {
  logo: logoUrl,
  office: officePhoto,
  mandalay: mandalayPhoto,
  mandalayHill: mandalayHillPhoto,
  support: activity2,
  heroPhoto: heroArrivals,
  heroSecondary: activity3,
  departure: airportPhoto,
  haneda: activity7,
  japanMap: japanMapImg,
  n4Textbooks: n4TextbooksImg,
  shibuya: unsplash('1480796927426-f609979314bd', 1400),
  torii: unsplash('1545569341-9eb8b30979d9', 1400),
  kyotoStreet: unsplash('1528360983277-13d401cdc186', 1400),
  cherryBlossom: unsplash('1522383225653-ed111181a951', 1400),
  study: unsplash('1456513080510-7bf3a84b82f8', 1200),
  graduation: unsplash('1523050854058-8df90110c9f1', 1400),
  classroom: unsplash('1524178232363-1fb2b075b655', 1200),
}

export const cities = [
  { name: 'Tokyo', image: unsplash('1480796927426-f609979314bd', 900) },
  { name: 'Shizuoka', image: unsplash('1493976040374-85c8e12f0c0e', 900) },
  { name: 'Hamamatsu', image: unsplash('1528360983277-13d401cdc186', 900) },
  { name: 'Okayama', image: unsplash('1545569341-9eb8b30979d9', 900) },
  { name: 'Kobe', image: unsplash('1542051841857-5f90071e7989', 900) },
]

export const coeResults = [
  { year: '2023', applicants: 7, successful: '6' },
  { year: '2024', applicants: 32, successful: '32' },
  { year: '2025', applicants: 38, successful: '37' },
  { year: '2026', applicants: 45, successful: '42' },
  { year: '2027 (Oct intake)', applicants: 10, successful: '1 · 9 pending' },
]

export const learningFormats = [
  {
    icon: Video,
    title: 'Video',
    description: 'Self-paced lessons you can study anytime, at your own pace.',
  },
  {
    icon: MonitorPlay,
    title: 'Zoom',
    description: 'Live online classes with real-time interaction and feedback.',
  },
  {
    icon: Layers,
    title: 'Zoom + Video',
    description: 'Live classes plus recordings for flexible, complete learning.',
  },
]

export const achievements = [
  { icon: TrendingUp, value: '97%', label: 'Overall COE success rate' },
  { icon: Users, value: '100+', label: 'Students placed in Japan' },
  { icon: Award, value: '2023', label: 'Trusted since' },
  { icon: Building2, value: '5', label: 'Partner cities in Japan' },
]

export const activities = [
  { title: 'ZAE students arriving in Japan', image: heroArrivals },
  { title: 'Departure day — off to Japan', image: airportPhoto },
  { title: 'Welcome to Japan', image: activity1 },
  { title: 'Arrival day at the airport', image: activity10 },
  { title: 'Orientation ceremony', image: activity2 },
  { title: 'Exploring Japan together', image: activity3 },
  { title: 'Arriving at Haneda Airport', image: activity7 },
  { title: 'Daily life in Japan', image: activity4 },
  { title: 'Student orientation', image: activity5 },
  { title: 'Dinner with our student community', image: activity8 },
  { title: 'Arriving in the city', image: activity6 },
  { title: 'Celebrating together in Japan', image: activity9 },
]
