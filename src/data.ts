import {
  FileText,
  Plane,
  PlaneLanding,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react'

export const site = {
  name: 'Zin Apex Education',
  tagline: 'Your trusted pathway to study in Japan',
  applicationFormUrl:
    'https://drive.google.com/drive/folders/1YH9ASp1qnexRfQu1rpSywLvuWS3GSNWw?usp=sharing',
  orientationFormUrl: 'https://forms.gle/Rk8dxPJeJgLSfRpx5',
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

export const about = {
  intro:
    'Zin Apex Education offers Japanese language courses and provides complete support services for those who wish to study in Japan — from the initial application process all the way to their arrival in Japan.',
  detail:
    'With a focus on both language learning and practical guidance, we help students prepare for life in Japan academically, culturally, and professionally.',
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

export const mission = [
  'To provide clear, accurate, and accessible pathways for students aspiring to study in Japan.',
  'To offer both language and cultural training for better integration and success in Japan.',
]

export const vision =
  'To become a trusted, internationally recognized education agency for students aiming to study and thrive in Japan.'

export const purpose = [
  'To enable students who wish to study in Japan to pursue their education with ease and confidence.',
  'To assist our fellow citizens in overcoming any challenges they may face while living abroad.',
  'To build a strong and inspiring community made up of talented and motivated young people.',
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

export const whyChooseUs = [
  {
    title: 'Strong COE Success Rate',
    description:
      'Connected with reputable, high-ranking institutions, contributing to a consistently strong COE success rate for students.',
  },
  {
    title: 'Highly Positive Student Reviews',
    description:
      'Many students who applied through us share excellent reviews, reflecting their satisfaction and trust in our service.',
  },
  {
    title: 'Accurate Document Preparation',
    description:
      'All documents are carefully prepared with precision, with clear communication to both students and parents.',
  },
  {
    title: 'Transparent Financial Information',
    description:
      'Clear, honest explanations of all financial matters give students and families complete confidence and peace of mind.',
  },
  {
    title: 'Fair Service Fee',
    description:
      'A reasonable service fee that reflects the high-value, comprehensive support students receive throughout the process.',
  },
  {
    title: 'Ongoing Support in Japan',
    description:
      'Students continue to receive guidance from senior members in Japan, who treat newcomers like family.',
  },
]

export const courses = [
  {
    title: 'JLPT N5 Course',
    level: 'Beginner',
    description:
      'Build a solid foundation in Japanese — hiragana, katakana, basic grammar, and everyday vocabulary.',
  },
  {
    title: 'JLPT N4 Course',
    level: 'Elementary',
    description:
      'Progress to intermediate grammar, kanji, reading, and listening for the JLPT N4 exam.',
  },
  {
    title: 'Speaking-Focused Class',
    level: 'All levels',
    description:
      'Conversation-centred lessons that build confidence and fluency for daily life in Japan.',
  },
  {
    title: 'Practical Skills Training',
    level: 'All levels',
    description:
      'Real-world skills and cultural know-how to help you adapt smoothly to life and study in Japan.',
  },
  {
    title: 'N5 Video Lessons',
    level: 'Self-study',
    description:
      'Flexible, on-demand N5 video lessons you can study anytime, at your own pace.',
  },
]

export const whyCoursesWork = [
  {
    title: 'Systematic Practice for Accurate Pronunciation & Writing',
    description:
      'Students are trained step by step to master correct pronunciation and proper writing.',
  },
  {
    title: 'Weekly & Monthly Tests for Effective Progress',
    description:
      'Regular assessment through weekly and monthly tests strengthens understanding and improves performance.',
  },
  {
    title: 'Simple, Easy-to-Understand Grammar Teaching',
    description:
      'Grammar lessons are delivered in a clear, simplified way that makes concepts easy to understand.',
  },
  {
    title: 'Extra Reading & Listening Practice',
    description:
      'Beyond the textbook, students receive additional materials to improve reading and listening skills.',
  },
  {
    title: 'Training with Past JLPT Questions',
    description:
      'Practising past exam questions ensures students are fully prepared and confident for the actual JLPT exam.',
  },
]

export const requiredDocuments = [
  'Passport',
  'NRC (National Registration Card) for Student, Sponsor, and Parents',
  'Family Registration Card',
  'High School Graduation Certificate / Academic Transcript or Degree Certificate with yearly transcripts',
  'Certificate of Completion & Yearly Transcripts of the final university year (current university students only)',
  'Japanese Language Proficiency Test Certificate (e.g. JLPT, NAT-TEST)',
  'Certificate of Attendance for any Japanese language courses taken',
  'Bank Statement as proof of show money (approximately 4 million kyats)',
  'Photograph (3cm x 4cm)',
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

export const cities = ['Tokyo', 'Shizuoka', 'Hamamatsu', 'Okayama', 'Kobe']

export const coeResults = [
  { year: '2023', applicants: 7, successful: '6' },
  { year: '2024', applicants: 32, successful: '32' },
  { year: '2025', applicants: 38, successful: '37' },
  { year: '2026', applicants: 35, successful: 'Pending' },
]

export const stats = [
  { value: '100+', label: 'Successful COE' },
  { value: '2023', label: 'Trusted since' },
  { value: '5', label: 'Partner cities in Japan' },
  { value: 'N5–N4', label: 'JLPT courses' },
]

export const faqs = [
  {
    q: 'အထက်တန်း အောင်လက်မှတ် မရှိရင်ရော ကျောင်းလျှောက်ထားလို့ရလား?',
    a: 'အထက်တန်း အောင်လက်မှတ် မရှိလဲ GED (သို့) အထက်တန်းနှင့် ညီမျှသည့် အောင်လက်မှတ် တစ်ခုခု ရှိပါက လျှောက်ထားလို့ရနိုင်ပါတယ်။',
  },
  {
    q: 'အသက်အကန့်အသတ်ရှိလား?',
    a: 'ကျောင်းလျှောက်ထားရာတွင် အသက်ကန့်သတ်ချက်တော့ မရှိပေမယ့် လျှောက်ထားမည့် intake နှင့် ကျောင်းပေါ်မူတည်ပြီး အသေးစိတ်တိုင်ပင်ဆွေးနွေးနိုင်ပါသည်။',
  },
  {
    q: 'ကျောင်း INTERVIEW အတွက် TRAINING ပြုလုပ်ပေးလား?',
    a: 'ကျောင်း INTERVIEW အတွက် ONLINE SYSTEM ဖြင့် TRAINING ပြုလုပ်ပေးပါသည်။',
  },
  {
    q: 'ကျောင်းလခ ၆လစာ ပေးသွင်းလို့ရနိုင်လား?',
    a: 'ကျောင်းလခ ၆လစာ ပေးသွင်းလို့ရပါတယ်။ စတက်မည့် ပထမစာသင်နှစ်ကိုတော့ တစ်နှစ်စာအပြည့်သွင်းပြီး ဒုတိယစာသင်နှစ်အတွက်ကိုတော့ အရစ်ကျ ခွဲသွင်းလို့ရပါတယ်။',
  },
  {
    q: 'ကျောင်းလခကို ယန်းနဲ့ ပေးသွင်းလို့ရလား?',
    a: 'LANGUAGE SCHOOL ဘက်မှ invoice ပို့ပေးမည်ဖြစ်သဖြင့် ဂျပန်ရှိ မိမိ အသိမိတ်ဆွေများထံမှတဆင့် ယန်းနှင့် တိုက်ရိုက် ကျောင်းဘဏ်အကောင့်ထဲသို့ ပေးသွင်းလို့ရပါသည်။',
  },
  {
    q: 'နယ်ကမို့ ရုံးခန်းသို့ လူကိုယ်တိုင် မဖြစ်မနေ လာစရာလိုအပ်လား?',
    a: 'စတင်မေးမြန်းစုံစမ်းချိန်မှစ၍ INTERVIEW TRAINING ပြုလုပ်ခြင်း၊ ကျောင်း INTERVIEW ဖြေဆိုခြင်းများအပြင် COE result ထွက်သည်အထိ online system နှင့် အဆင်ပြေအောင် ဆောင်ရွက်ပေးနေပါသည်။',
  },
  {
    q: 'ဘယ်လို process တွေနဲ့ ဆောင်ရွက်ပေးလဲ?',
    a: 'ORIENTATION ပြုလုပ်ပြီး ကျောင်းရွေးချယ်မှုနှင့်ပတ်သက်ပြီး အသေးစိတ်ရှင်းပြပေးခြင်း၊ COE အတွက် လိုအပ်သည့် စာရွက်စာတမ်းများ ပြင်ဆင်ပေးခြင်း၊ VISA & AIRPORT ဆိုင်ရာ စာရွက်စာတမ်းများ ပြင်ဆင်ပေးခြင်း၊ လေဆိပ်သို့ ပို့ဆောင်ပေးခြင်း — တာဝန်ခံမှ လေဆိပ်သို့ လာကြိုပေးပြီး အဆောင်သို့ ပို့ဆောင်ပေးပါသည်။',
  },
  {
    q: 'ပြည်ပရောက် မြန်မာနိုင်ငံသားတွေကိုရော ကျောင်းလျှောက်ပေးလား?',
    a: 'ပြည်ပတွင် နှစ်ရှည်နေထိုင်ခွင့် VISA ရထားသူများကို လျှောက်ထားပေးပါသည်။ ဥပမာ — ED VISA / WORK VISA။',
  },
  {
    q: 'LANGUAGE SCHOOL ပြီးရင် အလုပ်လုပ်လို့ရလား?',
    a: 'LANGUAGE SCHOOL ပြီးရင် တက္ကသိုလ်ဆက်မတက်ပဲ အလုပ်ပြောင်းလုပ်လို့ရပါသည်။ TOKUTEI အလုပ်မိတ်ဆက်ပေးသည့် LANGUAGE SCHOOL ကိုလဲ လျှောက်ထားလို့ရပါသည်။',
  },
]
