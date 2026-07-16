export type Lang = 'en' | 'ja' | 'my'

const en = {
  nav: {
    home: 'Home',
    about: 'About',
    courses: 'Courses',
    study: 'Study in Japan',
    stories: 'Stories',
    activities: 'Activities',
    results: 'Results',
    contactUs: 'Contact Us',
  },
  topbar: { hours: 'Tue–Sat, 8:30 AM – 5:30 PM' },
  hero: {
    badge: 'Now enrolling — 2026 intakes',
    titleLead: 'Your Gateway to ',
    titleAccent: 'Japan',
    subtitle:
      'Helping Myanmar students study at top Japanese language schools — full guidance and support from application to arrival.',
    cta1: 'Get Free Consultation',
    cta2: 'Explore Courses',
    trust1: 'Trusted since 2023',
    trust2: 'Founder based in Japan',
    trust3: '97% COE success',
    caption: 'ZAE students arriving in Japan ✈️',
    badgeTop: '100+',
    badgeBottom: 'Students placed',
  },
  quick: [
    {
      title: 'Free Consultation',
      description: 'Talk with our team about your study plan and best intake.',
    },
    {
      title: 'Application Form',
      description: 'Download the ZAE application form (PDF) and apply today.',
    },
    {
      title: '2026 Intake Schedule',
      description: 'April, July & October intakes — deadlines and COE dates.',
    },
  ],
  support: {
    eyebrow: 'Support',
    title: 'Complete Student Support',
    subtitle: "From enrollment to achievement — we're with you every step of the way.",
    photoCaption: 'Orientation day — ZAE family',
  },
  achievements: [
    'Overall COE success rate',
    'Online application support',
    'Trusted since',
    'Partner cities in Japan',
  ],
  videoSection: {
    eyebrow: 'Watch',
    title: 'Get to know Zin Apex Education',
    subtitle:
      'A quick look at who we are and how we guide students all the way to Japan.',
  },
  aboutSection: {
    eyebrow: 'About',
    title: 'About Zin Apex Education',
    intro:
      'Zin Apex Education offers Japanese language courses and provides complete support services for those who wish to study in Japan — from the initial application process all the way to their arrival in Japan.',
    detail:
      'With a focus on both language learning and practical guidance, we help students prepare for life in Japan academically, culturally, and professionally.',
    founderRole: 'Founder & Educator',
    founderBio:
      "I'm Zin Thu Aung, a Burmese educator and content creator based in Japan, and the founder of Zin Apex Education. My mission is to guide Burmese students with clear pathways, accurate information, and full support — from language training to arrival assistance — helping them succeed both academically and culturally in Japan.",
    youtubeLink: 'Zin Japan Life on YouTube',
    mission: 'Mission',
    vision: 'Vision',
    purpose: 'Purpose',
    missionItems: [
      'To provide clear, accurate, and accessible pathways for students aspiring to study in Japan.',
      'To offer both language and cultural training for better integration and success in Japan.',
    ],
    visionText:
      'To become a trusted, internationally recognized education agency for students aiming to study and thrive in Japan.',
    purposeItems: [
      'To enable students who wish to study in Japan to pursue their education with ease and confidence.',
      'To assist our fellow citizens in overcoming any challenges they may face while living abroad.',
      'To build a strong and inspiring community made up of talented and motivated young people.',
    ],
  },
  servicesSection: {
    eyebrow: 'Our Services',
    title: 'Complete support, every step',
    subtitle: 'From your first application to your arrival in Japan.',
    whyTitle: 'Why choose Zin Apex Education?',
  },
  services: [
    {
      title: 'Student Placement & Documentation',
      items: [
        'Connecting students with reputable language schools in Japan',
        'Assisting with preparation and organization of all required documents',
        'Supporting COE (Certificate of Eligibility) applications and compiling supporting paperwork',
      ],
    },
    {
      title: 'Visa & Travel Arrangements',
      items: [
        'Providing full guidance through the visa application process',
        'Booking airline tickets and offering travel advice',
        'Preparing all immigration-related documents to ensure smooth entry',
      ],
    },
    {
      title: 'Arrival Support in Japan',
      items: [
        'Welcoming students at the airport upon arrival',
        'Safely escorting students to their accommodation',
      ],
    },
    {
      title: 'Japanese Language & Skills Training',
      items: [
        'Offering JLPT N5 and N4 level language courses',
        'Conducting speaking-focused classes to boost conversational ability',
        'Providing practical skills training classes',
        'Delivering flexible N5 video lessons for convenient self-study',
      ],
    },
  ],
  whyChooseUs: [
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
  ],
  journeySection: {
    eyebrow: 'How it works',
    title: 'Your journey to Japan',
    subtitle:
      'A clear, guided process — from your first consultation to your first day in Japan.',
  },
  journey: [
    {
      title: 'Free Consultation',
      description: 'Talk with our team about your goals, budget, and the best intake for you.',
    },
    {
      title: 'Choose Your School',
      description: 'We match you with a reputable language school in one of our five partner cities.',
    },
    {
      title: 'Documents & COE',
      description: 'We prepare your documents precisely and submit your COE application.',
    },
    {
      title: 'Visa & Travel',
      description: 'Full visa guidance, air-ticket booking, and pre-departure orientation.',
    },
    {
      title: 'Arrival in Japan',
      description: 'We welcome you at the airport and escort you safely to your accommodation.',
    },
  ],
  coursesSection: {
    eyebrow: 'Courses',
    title: 'Japanese Language Courses',
    subtitle:
      'Comprehensive JLPT preparation designed to take you from beginner to advanced proficiency.',
    features: 'Course Features',
    enroll: 'Enroll Now',
    flexibleTitle: 'Flexible ways to learn',
    whyTitle: 'Why our courses are effective',
  },
  courses: [
    {
      title: 'Japanese Foundation',
      level: 'Beginner',
      duration: '3 months',
      description:
        'Build a solid foundation in Japanese — hiragana, katakana, basic grammar, and everyday vocabulary.',
      features: [
        'Hiragana, katakana & basic kanji',
        'Basic greetings and grammar',
        'Everyday vocabulary and phrases',
        'Listening and pronunciation practice',
      ],
    },
    {
      title: 'Elementary Japanese',
      level: 'Elementary',
      duration: '4 months',
      description:
        'Progress to intermediate grammar, kanji, reading, and listening for the JLPT N4 exam.',
      features: [
        '300+ kanji characters',
        'Complex grammar patterns',
        'Reading and article comprehension',
        'Conversation practice for daily life',
      ],
    },
    {
      title: 'Speaking-Focused Class',
      level: 'All levels',
      duration: 'Flexible',
      description:
        'Conversation-centred lessons that build confidence and fluency for daily life in Japan.',
      features: [
        'Conversation-centred lessons',
        'Confidence and fluency building',
        'Real-life situational practice',
      ],
    },
    {
      title: 'Practical Skills Training',
      level: 'All levels',
      duration: 'Flexible',
      description:
        'Real-world skills and cultural know-how to help you adapt smoothly to life and study in Japan.',
      features: [
        'Cultural know-how for Japan',
        'Daily-life practical skills',
        'Smooth adaptation guidance',
      ],
    },
  ],
  learningFormats: [
    { title: 'Video', description: 'Self-paced lessons you can study anytime, at your own pace.' },
    { title: 'Zoom', description: 'Live online classes with real-time interaction and feedback.' },
    { title: 'Zoom + Video', description: 'Live classes plus recordings for flexible, complete learning.' },
  ],
  whyCoursesWork: [
    {
      title: 'Systematic Practice for Accurate Pronunciation & Writing',
      description: 'Students are trained step by step to master correct pronunciation and proper writing.',
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
  ],
  studySection: {
    eyebrow: 'Study in Japan',
    title: 'Your path to a Japanese language school',
    subtitle: 'Everything you need to know to apply with Zin Apex Education.',
    docsTitle: 'Required documents (sample)',
    formTitle: 'Application form',
    formBody:
      'Download our application form (PDF), fill it out, and send it back to us. All required attachments are in the Google Drive folder.',
    download: 'Download form',
    viewSample: 'View sample',
    driveLink: 'Open Drive folder & attachments',
    orientationTitle: 'Student orientation',
    orientationBody:
      'Register through our Google Form to join the orientation briefing and get important information about the application process.',
    register: 'Register now',
    intakeTitle: 'Intake schedules',
    intakeHead: ['Intake', 'Registration Deadline', 'COE Submission', 'COE Result'],
    citiesTitle: 'Cities where you can apply with us',
  },
  requiredDocuments: [
    'Passport',
    'NRC (National Registration Card) for Student, Sponsor, and Parents',
    'Family Registration Card',
    'High School Graduation Certificate / Academic Transcript or Degree Certificate with yearly transcripts',
    'Certificate of Completion & Yearly Transcripts of the final university year (current university students only)',
    'Japanese Language Proficiency Test Certificate (e.g. JLPT, NAT-TEST)',
    'Certificate of Attendance for any Japanese language courses taken',
    'Bank Statement as proof of show money (approximately 4 million kyats)',
    'Photograph (3cm x 4cm)',
  ],
  intakes: [
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
  ],
  cities: ['Tokyo', 'Shizuoka', 'Hamamatsu', 'Okayama', 'Kobe'],
  storiesSection: {
    eyebrow: 'Student Stories',
    title: 'Student Reviews',
    subtitle:
      'See how our students benefited from our support services and achieved their study-abroad goals.',
    storyName: 'Student Success Story',
    schools: ['Tokyo Language School', 'Shizuoka Language School', 'Hamamatsu Language School'],
    programs: ['April 2024 Intake', 'July 2024 Intake', 'October 2024 Intake'],
  },
  testimonialsSection: {
    eyebrow: 'Testimonials',
    title: 'What our students say',
    subtitle: 'Real words from ZAE students now studying and living in Japan.',
  },
  testimonials: [
    {
      name: 'Myint Myat Theingi',
      intake: 'Recommended on Facebook',
      quote:
        'Working with this agency was truly reassuring. From the day I arrived in Japan, the founder personally took care of everything, and the office team handled all my documents flawlessly. Once in Japan, they introduced me to seniors so I would never feel alone — it gave me so much confidence.',
    },
    {
      name: 'Nwe Nwe Khaing',
      intake: 'Recommended on Facebook',
      quote:
        'Thank you to the whole ZIN APEX family for helping with every single thing. Even though it is an online service, there were no gaps — they patiently explained everything right up until I reached Japan. With Sensei Zin himself based in Japan, it could not be more reassuring.',
    },
    {
      name: 'Ingyin Pwint Phyu',
      intake: 'Recommended on Facebook',
      quote:
        'The senseis are so patient and kind. They handled everything without a single mistake and supported me all the way to Japan. 100% trustworthy.',
    },
    {
      name: 'Htet Myat',
      intake: 'Recommended on Facebook',
      quote:
        'I moved on to Japan from Thailand, and everything was handled entirely online. Because I checked them thoroughly and they genuinely delivered — actually getting me to Japan — I wholeheartedly recommend ZIN APEX Education to anyone considering the journey.',
    },
  ],
  activitiesSection: {
    eyebrow: 'Activities',
    title: 'Our Activities',
    subtitle:
      'Discover how we support students at every step of their study-abroad journey through our activities and programs.',
    shareText: "Want to share your success story? We'd love to feature you.",
    shareCta: 'Contact us to share your story',
  },
  activities: [
    'ZAE students arriving in Japan',
    'Departure day — off to Japan',
    'Welcome to Japan',
    'Arrival day at the airport',
    'Orientation ceremony',
    'Exploring Japan together',
    'Arriving at Haneda Airport',
    'Daily life in Japan',
    'Student orientation',
    'Dinner with our student community',
    'Arriving in the city',
    'Celebrating together in Japan',
  ],
  resultsSection: {
    eyebrow: 'Results',
    title: 'Our COE Results',
    subtitle:
      "This track record demonstrates Zin Apex Education's commitment and capability in guiding students successfully through the Japanese immigration and study application process.",
    chartTitle: 'COE results by year',
    legendApplicants: 'Applicants',
    legendSuccessful: 'Successful COE',
    pending: '9 pending',
  },
  faqSection: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
  },
  faqs: [
    {
      q: 'Can I apply without a high-school graduation certificate?',
      a: 'Yes — if you have a GED or any certificate equivalent to high-school graduation, you can still apply.',
    },
    {
      q: 'Is there an age limit?',
      a: 'There is no strict age limit for applying, but it depends on the intake and school — please consult us for details.',
    },
    {
      q: 'Do you provide training for the school interview?',
      a: 'Yes, we provide interview training through our online system.',
    },
    {
      q: 'Can I pay six months of tuition at a time?',
      a: 'Yes. For the first academic year you pay the full year, and the second year can be paid in installments.',
    },
    {
      q: 'Can tuition be paid in Japanese yen?',
      a: 'Yes — the language school sends an invoice, so you can pay in yen directly to the school’s bank account through friends or relatives in Japan.',
    },
    {
      q: 'I live outside the city — do I have to visit the office in person?',
      a: 'No. From the first inquiry through interview training, the school interview, and the COE result, everything can be handled conveniently online.',
    },
    {
      q: 'What is the overall process like?',
      a: 'We hold an orientation, explain school selection in detail, prepare all documents for the COE, handle visa and airport paperwork, and see you off at the airport. In Japan, our coordinator meets you at the airport and takes you to your dormitory.',
    },
    {
      q: 'Do you accept applications from Myanmar citizens living abroad?',
      a: 'Yes — we accept applicants who hold a long-term residence visa abroad, for example an ED visa or work visa.',
    },
    {
      q: 'Can I work after finishing language school?',
      a: 'Yes. After language school you can switch to work without continuing to university, and you can also apply to schools that introduce Tokutei (specified-skill) jobs.',
    },
  ],
  contactCta: {
    title: 'Ready to begin your journey to ',
    titleAccent: 'Japan?',
    subtitle: 'Get in touch with our team for clear guidance and full support.',
    button: 'Get Free Consultation',
  },
  footer: {
    tagline:
      'Your trusted partner for Japanese language learning and study-in-Japan support — helping students achieve their dreams since 2023.',
    quickLinks: 'Quick Links',
    ourServices: 'Our Services',
    serviceItems: [
      'Student Placement & Documentation',
      'Visa & Travel Arrangements',
      'Arrival Support in Japan',
      'Japanese Language & Skills Training',
    ],
    office: 'Mandalay Office',
    linkAbout: 'About',
    linkCourses: 'Japanese Courses',
    linkStudy: 'Study in Japan',
    linkStories: 'Student Stories',
    linkResults: 'Our COE Results',
    rights: 'All rights reserved.',
  },
  contactPage: {
    heroTitle: 'Contact us',
    heroSub:
      'Ready to apply or have a question? Send us a message and our team will get back to you shortly.',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    officeHours: 'Office hours',
    holiday: 'Holiday',
    holidayValue: 'Every Monday & Sunday',
    followUs: 'Follow us',
    fullName: 'Full name',
    namePlaceholder: 'Your name',
    course: 'Course of interest',
    coursePlaceholder: 'Select a course',
    message: 'Message',
    messagePlaceholder: 'Tell us how we can help',
    send: 'Send message',
    sending: 'Sending...',
    successTitle: 'Thank you!',
    successBody: "We've received your message and will be in touch soon.",
    sendAnother: 'Send another message',
    error: 'Something went wrong. Please try again or call us directly.',
  },
  aboutPage: {
    heroTitle: 'About Zin Apex Education',
    founderTitle: 'Founder profile',
    founderYoutube:
      'I also run Zin Japan Life on YouTube, sharing high-quality vlogs, knowledge sharing and tips, visa information, Japanese learning content, and real-life guidance for Burmese people living in or planning to come to Japan.',
    qualifications: 'Qualifications',
    qualificationItems: [
      'Graduated — Hamamatsu Japanese Language College',
      'Shizuoka Eiwa University, Japan (Business Management)',
      'Yadanabon University, Mandalay',
    ],
    ctaTitle: 'Join the Zin Apex Education community',
    ctaSub: 'Let us guide you towards a successful future in Japan.',
    ctaBtn: 'Contact us',
  },
  coursesPage: {
    heroTitle: 'Japanese language courses',
    heroSub: 'JLPT-focused courses and practical training to prepare you for study and life in Japan.',
    enroll: 'Enroll',
    textbooksTitle: 'N4 textbooks & materials',
    textbooksBody:
      'Our N4 course covers grammar, kotoba, reading, listening, and kanji using Minna no Nihongo and curated supplementary materials — available through flexible video, live Zoom, or combined formats.',
    speakingTitle: 'Speaking-focused & flexible self-study',
    speakingBody:
      'Boost your conversational ability in our speaking classes, or learn at your own pace with flexible N5 video lessons.',
    speakingLi1: 'Conversation-centred lessons for real-life fluency',
    speakingLi2: 'On-demand N5 video lessons you can study anytime',
    ctaTitle: 'Start learning Japanese today',
    ctaSub: 'Enroll in a course that fits your goals and schedule.',
    ctaBtn: 'Enroll now',
  },
  studyPage: {
    heroTitle: 'Study in Japan',
    heroSub: 'Everything you need to know to apply to a Japanese language school with Zin Apex Education.',
    docsNote:
      'Documents typically required when applying to a Japanese language school. Exact requirements may vary by school and intake.',
    intakeNote:
      'The dates above are approximate and may vary depending on individual circumstances and official processing times. We strongly recommend confirming all deadlines well in advance to ensure a smooth application.',
    citiesSub:
      'We help students apply to language schools in major cities across Japan. Choose the city that matches your goals, lifestyle, and study plan.',
    ctaTitle: 'Have questions about applying?',
    ctaSub: 'Our team will guide you through every step of the process.',
    ctaBtn: 'Get in touch',
  },
  faqPage: {
    heroTitle: 'Frequently asked questions',
    stillTitle: 'Still have questions?',
    stillBody: 'Our team is happy to help — reach out any time.',
    stillBtn: 'Contact us',
  },
}

const ja: typeof en = {
  nav: {
    home: 'ホーム',
    about: '私たちについて',
    courses: 'コース',
    study: '日本留学',
    stories: '体験談',
    activities: '活動',
    results: '実績',
    contactUs: 'お問い合わせ',
  },
  topbar: { hours: '火〜土 8:30〜17:30' },
  hero: {
    badge: '2026年度 入学生募集中',
    titleLead: '日本留学への',
    titleAccent: '架け橋',
    subtitle:
      'ミャンマーの学生が日本の優良な日本語学校で学べるよう、出願から日本到着まで一貫してサポートします。',
    cta1: '無料相談する',
    cta2: 'コースを見る',
    trust1: '2023年創業',
    trust2: '創設者が日本在住',
    trust3: 'COE合格率97%',
    caption: '日本に到着したZAEの学生たち ✈️',
    badgeTop: '100+',
    badgeBottom: '名を日本へ',
  },
  quick: [
    { title: '無料相談', description: '留学プランや最適な入学時期についてご相談ください。' },
    { title: '入学願書', description: 'ZAE入学願書（PDF）をダウンロードして今すぐ出願。' },
    { title: '2026年度 入学日程', description: '4月・7月・10月入学 — 締切とCOE日程はこちら。' },
  ],
  support: {
    eyebrow: 'サポート',
    title: '入学から到着まで完全サポート',
    subtitle: '入学手続きから目標達成まで、私たちがすべての段階に寄り添います。',
    photoCaption: 'オリエンテーションの日 — ZAEファミリー',
  },
  achievements: ['COE合格率', 'オンライン対応', '創業年', '日本の提携都市'],
  videoSection: {
    eyebrow: '動画',
    title: 'Zin Apex Educationを動画で紹介',
    subtitle:
      '私たちがどんな存在で、学生を日本までどう導くのかを、ぜひ動画でご覧ください。',
  },
  aboutSection: {
    eyebrow: '私たちについて',
    title: 'Zin Apex Educationについて',
    intro:
      'Zin Apex Educationは、日本語コースの提供とともに、日本留学を希望する方へ出願手続きから日本到着まで一貫したサポートを行っています。',
    detail:
      '語学学習と実践的なガイダンスの両方に重点を置き、学業・文化・生活のあらゆる面で日本での生活に備えられるよう支援します。',
    founderRole: '創設者・教育者',
    founderBio:
      '日本在住のミャンマー人教育者・コンテンツクリエイターのZin Thu Aungです。Zin Apex Educationの創設者として、明確な進路、正確な情報、そして語学研修から到着サポートまでの完全な支援でミャンマーの学生を導き、日本での学業と生活の成功をサポートすることを使命としています。',
    youtubeLink: 'YouTube「Zin Japan Life」',
    mission: 'ミッション',
    vision: 'ビジョン',
    purpose: '目的',
    missionItems: [
      '日本留学を目指す学生に、明確で正確、そして利用しやすい進学ルートを提供します。',
      '日本での適応と成功のため、語学と文化の両面の研修を提供します。',
    ],
    visionText: '日本で学び活躍したい学生に信頼される、国際的に認められた留学エージェントを目指します。',
    purposeItems: [
      '日本留学を希望する学生が、安心して確実に学業を進められるようにします。',
      '海外生活で直面する課題を乗り越えられるよう、同胞を支援します。',
      '才能と意欲にあふれる若者たちによる、強く刺激的なコミュニティを築きます。',
    ],
  },
  servicesSection: {
    eyebrow: 'サービス',
    title: 'すべての段階で完全サポート',
    subtitle: '最初の出願から日本到着まで。',
    whyTitle: 'Zin Apex Educationが選ばれる理由',
  },
  services: [
    {
      title: '学校紹介・書類作成',
      items: [
        '日本の優良な日本語学校をご紹介',
        '必要書類の準備・整理をサポート',
        'COE（在留資格認定証明書）申請と関係書類の作成を支援',
      ],
    },
    {
      title: 'ビザ・渡航手配',
      items: [
        'ビザ申請の全過程をガイド',
        '航空券の手配と渡航アドバイス',
        'スムーズな入国のための入管関係書類を準備',
      ],
    },
    {
      title: '日本到着サポート',
      items: ['空港でのお出迎え', '宿舎まで安全にご案内'],
    },
    {
      title: '日本語・スキル研修',
      items: [
        'JLPT N5・N4レベルの日本語コース',
        '会話力を伸ばすスピーキング特化クラス',
        '実践スキルトレーニング',
        '自習に便利なN5ビデオレッスン',
      ],
    },
  ],
  whyChooseUs: [
    {
      title: '高いCOE合格率',
      description: '評価の高い優良校と提携しており、学生のCOE合格率は常に高水準です。',
    },
    {
      title: '学生からの高い評価',
      description: '当社を通じて出願した多くの学生から、満足と信頼を示す高評価をいただいています。',
    },
    {
      title: '正確な書類作成',
      description: 'すべての書類を正確・丁寧に作成し、学生と保護者の両方に分かりやすくご説明します。',
    },
    {
      title: '透明な費用説明',
      description: '費用に関する明確で誠実な説明により、学生とご家族に安心をお届けします。',
    },
    {
      title: '適正なサービス料金',
      description: '手厚く価値あるサポート内容に見合った、良心的なサービス料金です。',
    },
    {
      title: '日本での継続サポート',
      description: '日本にいる先輩メンバーが、新入生を家族のように迎え、継続的にサポートします。',
    },
  ],
  journeySection: {
    eyebrow: '流れ',
    title: '日本までの道のり',
    subtitle: '初回相談から日本での初日まで、明確なステップでご案内します。',
  },
  journey: [
    { title: '無料相談', description: '目標・予算・最適な入学時期についてご相談ください。' },
    { title: '学校選び', description: '5つの提携都市から、あなたに合う優良校をご紹介します。' },
    { title: '書類・COE', description: '書類を正確に準備し、COEを申請します。' },
    { title: 'ビザ・渡航', description: 'ビザ取得、航空券手配、渡航前オリエンテーションまで。' },
    { title: '日本到着', description: '空港でお出迎えし、宿舎まで安全にご案内します。' },
  ],
  coursesSection: {
    eyebrow: 'コース',
    title: '日本語コース',
    subtitle: '初級から上級まで、JLPT対策を体系的に学べるコースです。',
    features: 'コース内容',
    enroll: '申し込む',
    flexibleTitle: '選べる学習スタイル',
    whyTitle: '当校のコースが効果的な理由',
  },
  courses: [
    {
      title: '日本語基礎',
      level: '初級',
      duration: '3ヶ月',
      description: 'ひらがな・カタカナ・基礎文法・日常語彙など、日本語の土台をしっかり築きます。',
      features: ['ひらがな・カタカナ・基礎漢字', '基本の挨拶と文法', '日常語彙と表現', 'リスニング・発音練習'],
    },
    {
      title: '初級日本語',
      level: '初中級',
      duration: '4ヶ月',
      description: 'JLPT N4に向けて、中級文法・漢字・読解・聴解へステップアップします。',
      features: ['漢字300字以上', '複合的な文法パターン', '読解・文章理解', '日常会話の練習'],
    },
    {
      title: 'スピーキング特化クラス',
      level: '全レベル',
      duration: '随時',
      description: '日本での生活に役立つ、会話中心のレッスンで自信と流暢さを養います。',
      features: ['会話中心のレッスン', '自信と流暢さの向上', '実生活を想定した練習'],
    },
    {
      title: '実践スキル研修',
      level: '全レベル',
      duration: '随時',
      description: '日本での生活と学業にスムーズに適応するための実践スキルと文化知識を学びます。',
      features: ['日本の文化知識', '日常生活の実践スキル', 'スムーズな適応ガイド'],
    },
  ],
  learningFormats: [
    { title: 'ビデオ', description: 'いつでも自分のペースで学べる自習型レッスン。' },
    { title: 'Zoom', description: 'リアルタイムでやり取りできるオンラインライブ授業。' },
    { title: 'Zoom + ビデオ', description: 'ライブ授業と録画で、柔軟かつ完全な学習を。' },
  ],
  whyCoursesWork: [
    { title: '正確な発音と文字の体系的練習', description: '正しい発音と書き方を段階的にマスターできるよう指導します。' },
    { title: '週次・月次テストで着実に上達', description: '定期的なテストで理解を深め、成績向上につなげます。' },
    { title: '分かりやすい文法指導', description: '文法をシンプルに整理し、概念を理解しやすく教えます。' },
    { title: '読解・聴解の追加練習', description: '教科書以外の教材で、読む力・聞く力をさらに伸ばします。' },
    { title: 'JLPT過去問トレーニング', description: '過去問演習で、本番のJLPT試験に自信を持って臨めます。' },
  ],
  studySection: {
    eyebrow: '日本留学',
    title: '日本語学校への道',
    subtitle: 'Zin Apex Educationでの出願に必要な情報をまとめました。',
    docsTitle: '必要書類（例）',
    formTitle: '入学願書',
    formBody:
      '入学願書（PDF）をダウンロードし、記入のうえご返送ください。必要な添付書類はGoogle Driveフォルダにあります。',
    download: '願書をダウンロード',
    viewSample: '記入例を見る',
    driveLink: 'Driveフォルダを開く',
    orientationTitle: '入学オリエンテーション',
    orientationBody:
      'Googleフォームから登録して説明会に参加し、出願手続きに関する重要な情報を入手してください。',
    register: '今すぐ登録',
    intakeTitle: '入学日程',
    intakeHead: ['入学時期', '登録締切', 'COE申請', 'COE結果'],
    citiesTitle: '出願できる都市',
  },
  requiredDocuments: [
    'パスポート',
    '本人・保証人・両親のNRC（国民登録証）',
    '家族登録票',
    '高校卒業証明書／成績証明書、または学位証明書と各年度の成績証明書',
    '大学最終学年の修了証明書と各年度成績証明書（現役大学生のみ）',
    '日本語能力試験の証明書（JLPT・NAT-TESTなど）',
    '日本語コースの受講証明書',
    '残高証明としての銀行取引明細書（約400万チャット）',
    '証明写真（3cm×4cm）',
  ],
  intakes: [
    { intake: '2026年4月入学', registration: '2025年9月', coeSubmission: '2025年10月', coeResult: '2026年2月' },
    { intake: '2026年7月入学', registration: '2025年12月', coeSubmission: '2026年1月', coeResult: '2026年5月' },
    { intake: '2026年10月入学', registration: '2026年3月', coeSubmission: '2026年4月', coeResult: '2026年8月' },
  ],
  cities: ['東京', '静岡', '浜松', '岡山', '神戸'],
  storiesSection: {
    eyebrow: '学生の声',
    title: '先輩たちのストーリー',
    subtitle: '当社のサポートで留学の目標を叶えた学生たちの体験をご覧ください。',
    storyName: '学生の成功ストーリー',
    schools: ['東京の日本語学校', '静岡の日本語学校', '浜松の日本語学校'],
    programs: ['2024年4月入学', '2024年7月入学', '2024年10月入学'],
  },
  testimonialsSection: {
    eyebrow: '体験談',
    title: '学生たちの声',
    subtitle: '現在日本で学び、生活しているZAE学生の生の声です。',
  },
  testimonials: [
    {
      name: 'Myint Myat Theingi',
      intake: 'Facebookで推薦',
      quote:
        'この機関に任せて本当に安心できました。日本到着の日から創設者ご本人が何もかも面倒を見てくださり、事務所の皆さんも書類を一つのミスもなく丁寧に進めてくださいました。日本に着いてからも先輩を紹介してくださり、心細さを感じずに済みました。',
    },
    {
      name: 'Nwe Nwe Khaing',
      intake: 'Facebookで推薦',
      quote:
        '何から何まで支えてくださったZIN APEXの皆さまに心から感謝します。オンラインサービスでも抜かりなく、日本到着まで根気強く説明してくださいました。Sensei Zinご本人が日本にいらっしゃるので、これ以上ない安心感です。',
    },
    {
      name: 'Ingyin Pwint Phyu',
      intake: 'Facebookで推薦',
      quote:
        '先生方はとても辛抱強く、親切です。すべてをミスなく進めてくださり、日本到着まで支えてくださいました。100%信頼できます。',
    },
    {
      name: 'Htet Myat',
      intake: 'Facebookで推薦',
      quote:
        '私はタイから日本へ進んだ学生で、手続きはすべてオンラインで行いました。しっかり調べたうえで、本当に私を日本まで送り出してくれた実績のある機関なので、これから検討する方にはZIN APEX Educationを心からおすすめします。',
    },
  ],
  activitiesSection: {
    eyebrow: '活動',
    title: '私たちの活動',
    subtitle: '留学のあらゆる段階で学生を支える、私たちの活動とプログラムをご紹介します。',
    shareText: 'あなたの成功体験もぜひ聞かせてください。',
    shareCta: '体験談を送る',
  },
  activities: [
    '日本に到着したZAEの学生たち',
    '出発の日 — いざ日本へ',
    'ようこそ日本へ',
    '空港到着の日',
    'オリエンテーション',
    'みんなで日本を探検',
    '羽田空港に到着',
    '日本での日常',
    '入学オリエンテーション',
    '学生コミュニティの夕食会',
    '街に到着',
    '日本でお祝い',
  ],
  resultsSection: {
    eyebrow: '実績',
    title: 'COE取得実績',
    subtitle:
      'この実績は、日本の入管手続きと留学出願を確実に導くZin Apex Educationの取り組みと実力を示しています。',
    chartTitle: '年度別COE実績',
    legendApplicants: '出願者',
    legendSuccessful: 'COE取得',
    pending: '9名審査中',
  },
  faqSection: { eyebrow: 'FAQ', title: 'よくある質問' },
  faqs: [
    { q: '高校卒業証明書がなくても出願できますか？', a: 'GEDまたは高卒同等の資格があれば出願できます。' },
    { q: '年齢制限はありますか？', a: '厳密な年齢制限はありませんが、入学時期と学校によりますので、詳しくはご相談ください。' },
    { q: '学校の面接対策はしてもらえますか？', a: 'はい、オンラインシステムで面接トレーニングを行っています。' },
    { q: '学費を6ヶ月分ずつ払えますか？', a: '可能です。初年度は1年分を納入し、2年目は分割で納入できます。' },
    {
      q: '学費を円で払えますか？',
      a: '学校から請求書が届きますので、日本にいる知人を通じて学校の口座へ直接円で納入できます。',
    },
    {
      q: '地方在住ですが、必ず来店が必要ですか？',
      a: '不要です。お問い合わせから面接対策、学校面接、COE結果まで、すべてオンラインで対応しています。',
    },
    {
      q: 'どのような流れで進みますか？',
      a: 'オリエンテーションで学校選びを詳しく説明し、COE書類・ビザ・空港関係の書類を準備、空港までお見送りします。日本では担当者が空港でお迎えし、寮までご案内します。',
    },
    {
      q: '海外在住のミャンマー人も出願できますか？',
      a: '長期滞在ビザ（EDビザや就労ビザなど）をお持ちの方は出願いただけます。',
    },
    {
      q: '語学学校修了後に就職できますか？',
      a: 'できます。大学に進学せず就労に切り替えることも、特定技能の仕事を紹介する語学学校への出願も可能です。',
    },
  ],
  contactCta: {
    title: '日本への第一歩を、',
    titleAccent: 'ここから始めよう',
    subtitle: '明確なガイダンスと万全のサポートを、私たちのチームがお届けします。',
    button: '無料相談する',
  },
  footer: {
    tagline:
      '日本語学習と日本留学サポートの信頼できるパートナーとして、2023年から学生の夢を応援しています。',
    quickLinks: 'クイックリンク',
    ourServices: 'サービス',
    serviceItems: ['学校紹介・書類作成', 'ビザ・渡航手配', '日本到着サポート', '日本語・スキル研修'],
    office: 'マンダレー事務所',
    linkAbout: '私たちについて',
    linkCourses: '日本語コース',
    linkStudy: '日本留学',
    linkStories: '学生の声',
    linkResults: 'COE実績',
    rights: 'All rights reserved.',
  },
  contactPage: {
    heroTitle: 'お問い合わせ',
    heroSub: '出願のご相談やご質問は、メッセージをお送りください。担当者よりすぐにご連絡いたします。',
    address: '住所',
    phone: '電話',
    email: 'メール',
    officeHours: '営業時間',
    holiday: '定休日',
    holidayValue: '月曜・日曜（毎週）',
    followUs: 'フォローする',
    fullName: 'お名前',
    namePlaceholder: 'お名前を入力',
    course: '希望コース',
    coursePlaceholder: 'コースを選択',
    message: 'メッセージ',
    messagePlaceholder: 'ご相談内容をご記入ください',
    send: '送信する',
    sending: '送信中...',
    successTitle: 'ありがとうございます！',
    successBody: 'メッセージを受け取りました。まもなくご連絡いたします。',
    sendAnother: '別のメッセージを送る',
    error: '送信に失敗しました。もう一度お試しいただくか、直接お電話ください。',
  },
  aboutPage: {
    heroTitle: 'Zin Apex Educationについて',
    founderTitle: '創設者プロフィール',
    founderYoutube:
      'YouTubeチャンネル「Zin Japan Life」では、日本在住・来日予定のミャンマーの方々に向けて、質の高いVlog、知識やコツ、ビザ情報、日本語学習コンテンツ、リアルな生活ガイドを発信しています。',
    qualifications: '学歴',
    qualificationItems: [
      '浜松日本語学院 卒業',
      '静岡英和学院大学（経営学）',
      'ヤダナボン大学（マンダレー）',
    ],
    ctaTitle: 'ZAEコミュニティに参加しよう',
    ctaSub: '日本での輝かしい未来へ、私たちがご案内します。',
    ctaBtn: 'お問い合わせ',
  },
  coursesPage: {
    heroTitle: '日本語コース',
    heroSub: '日本での学びと生活に備える、JLPT対策と実践トレーニングのコースです。',
    enroll: '申し込む',
    textbooksTitle: 'N4教材のご紹介',
    textbooksBody:
      'N4コースでは「みんなの日本語」と厳選した補助教材を使い、文法・言葉・読解・聴解・漢字を学びます。ビデオ、Zoomライブ、併用の3形式から選べます。',
    speakingTitle: 'スピーキング特化＆自由な自習',
    speakingBody:
      'スピーキングクラスで会話力を伸ばすことも、N5ビデオレッスンで自分のペースで学ぶこともできます。',
    speakingLi1: '実生活で使える会話中心のレッスン',
    speakingLi2: 'いつでも視聴できるN5オンデマンドビデオ',
    ctaTitle: '今日から日本語を始めよう',
    ctaSub: '目標とスケジュールに合ったコースにお申し込みください。',
    ctaBtn: '今すぐ申し込む',
  },
  studyPage: {
    heroTitle: '日本留学',
    heroSub: 'Zin Apex Educationで日本語学校に出願するために必要な情報をすべてご案内します。',
    docsNote: '日本語学校出願時に一般的に必要な書類です。学校や入学時期により異なる場合があります。',
    intakeNote:
      '上記の日程は目安であり、個々の状況や公式の処理期間により変わることがあります。余裕を持って締切をご確認ください。',
    citiesSub: '日本の主要都市の語学学校への出願をサポートします。目標やライフスタイルに合う都市をお選びください。',
    ctaTitle: '出願についてのご質問は？',
    ctaSub: 'すべてのステップを私たちのチームがご案内します。',
    ctaBtn: 'お問い合わせ',
  },
  faqPage: {
    heroTitle: 'よくある質問',
    stillTitle: 'ご不明な点はありませんか？',
    stillBody: 'いつでもお気軽にお問い合わせください。',
    stillBtn: 'お問い合わせ',
  },
}

const my: typeof en = {
  nav: {
    home: 'Home',
    about: 'About',
    courses: 'Courses',
    study: 'Study in Japan',
    stories: 'Stories',
    activities: 'Activities',
    results: 'Results',
    contactUs: 'Contact Us',
  },
  topbar: { hours: 'အင်္ဂါ–စနေ၊ နံနက် ၈:၃၀ – ညနေ ၅:၃၀' },
  hero: {
    badge: '၂၀၂၆ ဝင်ခွင့်များ လက်ခံနေပါပြီ',
    titleLead: 'ဂျပန်အိပ်မက်ကို ',
    titleAccent: 'အကောင်အထည်ဖော်ပေးမယ်',
    subtitle:
      'မြန်မာကျောင်းသားတွေ ဂျပန်မှာ ပညာသင်နိုင်ဖို့ — လျှောက်လွှာကနေ ဂျပန်ရောက်သည်အထိ အစအဆုံး လမ်းညွှန် ကူညီပေးပါတယ်။',
    cta1: 'အခမဲ့ တိုင်ပင်ဆွေးနွေးရန်',
    cta2: 'သင်တန်းများ ကြည့်ရန်',
    trust1: '၂၀၂၃ ကတည်းက ယုံကြည်စိတ်ချရ',
    trust2: 'Founder ကိုယ်တိုင် ဂျပန်တွင်',
    trust3: 'COE အောင်မြင်နှုန်း ၉၇%',
    caption: 'ဂျပန်ရောက်ရှိလာသော ZAE ကျောင်းသားများ ✈️',
    badgeTop: '၁၀၀+',
    badgeBottom: 'ကျောင်းသား ပို့ဆောင်ပြီး',
  },
  quick: [
    {
      title: 'အခမဲ့ တိုင်ပင်ဆွေးနွေးမှု',
      description: 'သင့်ပညာရေးအစီအစဉ်နဲ့ သင့်တော်ဆုံး intake အတွက် ကျွန်ုပ်တို့အဖွဲ့နဲ့ ဆွေးနွေးနိုင်ပါတယ်။',
    },
    {
      title: 'လျှောက်လွှာဖောင်',
      description: 'ZAE လျှောက်လွှာ (PDF) ကို download လုပ်ပြီး ယနေ့ပဲ လျှောက်ထားပါ။',
    },
    {
      title: '၂၀၂၆ Intake အချိန်ဇယား',
      description: 'ဧပြီ၊ ဇူလိုင်၊ အောက်တိုဘာ intake များ — နောက်ဆုံးရက်နဲ့ COE ရက်များ။',
    },
  ],
  support: {
    eyebrow: 'ပံ့ပိုးမှု',
    title: 'ကျောင်းသား ပံ့ပိုးမှု အပြည့်အစုံ',
    subtitle: 'ကျောင်းအပ်ခြင်းမှ အောင်မြင်မှုအထိ — အဆင့်တိုင်းမှာ အတူရှိပေးပါမယ်။',
    photoCaption: 'Orientation နေ့ — ZAE မိသားစု',
  },
  achievements: [
    'COE အောင်မြင်နှုန်း စုစုပေါင်း',
    'Online ဖြင့် လျှောက်ထားနိုင်',
    'စတင်တည်ထောင်သည့်နှစ်',
    'ဂျပန်ရှိ မိတ်ဖက်မြို့များ',
  ],
  videoSection: {
    eyebrow: 'ဗီဒီယို',
    title: 'Zin Apex Education ကို မိတ်ဆက်ပါရစေ',
    subtitle:
      'ကျွန်ုပ်တို့ ဘယ်သူဘယ်ဝါဆိုတာနဲ့ ကျောင်းသားတွေကို ဂျပန်အထိ ဘယ်လို လမ်းညွှန်ပေးလဲဆိုတာ ဗီဒီယိုလေးနဲ့ ကြည့်ရှုလိုက်ပါ။',
  },
  aboutSection: {
    eyebrow: 'အကြောင်း',
    title: 'Zin Apex Education အကြောင်း',
    intro:
      'Zin Apex Education သည် ဂျပန်ဘာသာစကား သင်တန်းများ ပို့ချပေးသည့်အပြင် ဂျပန်တွင် ပညာဆက်လက်သင်ကြားလိုသူများအတွက် လျှောက်ထားခြင်း အစကနေ ဂျပန်ရောက်ရှိသည်အထိ ဝန်ဆောင်မှု အပြည့်အစုံ ပေးနေပါသည်။',
    detail:
      'ဘာသာစကား သင်ယူမှုနဲ့ လက်တွေ့ လမ်းညွှန်မှု နှစ်မျိုးလုံးကို အလေးပေးပြီး ကျောင်းသားများ ဂျပန်မှာ ပညာရေး၊ ယဉ်ကျေးမှုနဲ့ အသက်မွေးဝမ်းကျောင်း အဘက်ဘက်က အဆင်သင့်ဖြစ်အောင် ကူညီပေးပါတယ်။',
    founderRole: 'တည်ထောင်သူနှင့် ပညာရေးဆရာ',
    founderBio:
      'ကျွန်တော်က ဂျပန်မှာ အခြေချနေထိုင်တဲ့ မြန်မာပညာရေးပညာရှင်နဲ့ content creator ဖြစ်တဲ့ Zin Thu Aung ဖြစ်ပြီး Zin Apex Education ရဲ့ တည်ထောင်သူပါ။ မြန်မာကျောင်းသားတွေကို ရှင်းလင်းတဲ့ လမ်းကြောင်း၊ တိကျမှန်ကန်တဲ့ အချက်အလက်နဲ့ ဘာသာစကား သင်တန်းကနေ ဂျပန်ရောက် ကူညီမှုအထိ အပြည့်အဝ ပံ့ပိုးပြီး ပညာရေးရော ယဉ်ကျေးမှုပါ အောင်မြင်အောင် လမ်းညွှန်ပေးဖို့ ရည်မှန်းထားပါတယ်။',
    youtubeLink: 'YouTube — Zin Japan Life',
    mission: 'ရည်မှန်းချက်',
    vision: 'မျှော်မှန်းချက်',
    purpose: 'ရည်ရွယ်ချက်',
    missionItems: [
      'ဂျပန်တွင် ပညာသင်လိုသော ကျောင်းသားများအတွက် ရှင်းလင်း တိကျပြီး လက်လှမ်းမီသော လမ်းကြောင်းများ ဖော်ဆောင်ပေးရန်။',
      'ဂျပန်တွင် ပိုမိုပေါင်းစည်း အောင်မြင်နိုင်စေရန် ဘာသာစကားရော ယဉ်ကျေးမှုပါ လေ့ကျင့်သင်ကြားပေးရန်။',
    ],
    visionText:
      'ဂျပန်တွင် ပညာသင်ကြား အောင်မြင်လိုသော ကျောင်းသားများအတွက် နိုင်ငံတကာက အသိအမှတ်ပြု ယုံကြည်ရသော ပညာရေးအေဂျင်စီ ဖြစ်လာရန်။',
    purposeItems: [
      'ဂျပန်တွင် ပညာသင်လိုသူများ လွယ်ကူ ယုံကြည်စိတ်ချစွာ ပညာဆည်းပူးနိုင်စေရန်။',
      'နိုင်ငံရပ်ခြားနေထိုင်စဉ် ကြုံတွေ့ရသော အခက်အခဲများကို ကျော်လွှားနိုင်အောင် မိမိလူမျိုးများကို ကူညီပေးရန်။',
      'အရည်အချင်းနဲ့ စိတ်အားထက်သန်မှုရှိတဲ့ လူငယ်တွေနဲ့ ဖွဲ့စည်းထားတဲ့ ခိုင်မာအားကျစရာ အသိုက်အဝန်း တည်ဆောက်ရန်။',
    ],
  },
  servicesSection: {
    eyebrow: 'ဝန်ဆောင်မှုများ',
    title: 'အဆင့်တိုင်း ပံ့ပိုးမှု အပြည့်အစုံ',
    subtitle: 'ပထမဆုံး လျှောက်လွှာမှ ဂျပန်ရောက်သည်အထိ။',
    whyTitle: 'Zin Apex Education ကို ဘာကြောင့် ရွေးသင့်လဲ?',
  },
  services: [
    {
      title: 'ကျောင်းချိတ်ဆက်ခြင်းနှင့် စာရွက်စာတမ်း',
      items: [
        'ဂျပန်ရှိ နာမည်ကောင်း ဘာသာစကားကျောင်းများနှင့် ချိတ်ဆက်ပေးခြင်း',
        'လိုအပ်သော စာရွက်စာတမ်းများ ပြင်ဆင်စီစဉ်ရာတွင် ကူညီခြင်း',
        'COE လျှောက်ထားမှုနှင့် ထောက်ခံစာရွက်စာတမ်းများ စုစည်းပေးခြင်း',
      ],
    },
    {
      title: 'ဗီဇာနှင့် ခရီးစဉ် စီစဉ်မှု',
      items: [
        'ဗီဇာလျှောက်ထားမှု တစ်လျှောက်လုံး လမ်းညွှန်ပေးခြင်း',
        'လေယာဉ်လက်မှတ် ဝယ်ယူပေးခြင်းနှင့် ခရီးသွား အကြံပေးခြင်း',
        'ချောမွေ့စွာ ဝင်ရောက်နိုင်ရန် လူဝင်မှုကြီးကြပ်ရေး စာရွက်စာတမ်းများ ပြင်ဆင်ပေးခြင်း',
      ],
    },
    {
      title: 'ဂျပန်ရောက် ပံ့ပိုးမှု',
      items: [
        'လေဆိပ်တွင် ကျောင်းသားများကို ကြိုဆိုပေးခြင်း',
        'နေရာထိုင်ခင်းအထိ ဘေးကင်းစွာ လိုက်ပါပို့ဆောင်ပေးခြင်း',
      ],
    },
    {
      title: 'ဂျပန်ဘာသာနှင့် ကျွမ်းကျင်မှု သင်တန်း',
      items: [
        'JLPT N5 နှင့် N4 အဆင့် သင်တန်းများ',
        'စကားပြော ကျွမ်းကျင်စေရန် speaking အထူးပြု အတန်းများ',
        'လက်တွေ့ ကျွမ်းကျင်မှု သင်တန်းများ',
        'အချိန်မရွေး လေ့လာနိုင်သော N5 ဗီဒီယို သင်ခန်းစာများ',
      ],
    },
  ],
  whyChooseUs: [
    {
      title: 'မြင့်မားသော COE အောင်မြင်နှုန်း',
      description:
        'အဆင့်မြင့် နာမည်ကောင်းကျောင်းများနှင့် ချိတ်ဆက်ထားသဖြင့် ကျောင်းသားများ၏ COE အောင်မြင်နှုန်း တသမတ်တည်း မြင့်မားပါသည်။',
    },
    {
      title: 'ကျောင်းသားများ၏ အကောင်းမြင် သုံးသပ်ချက်များ',
      description:
        'ကျွန်ုပ်တို့မှတဆင့် လျှောက်ထားသော ကျောင်းသားများစွာက ကျေနပ်ယုံကြည်မှုကို ထင်ဟပ်သော အကောင်းဆုံး သုံးသပ်ချက်များ မျှဝေကြပါသည်။',
    },
    {
      title: 'တိကျသော စာရွက်စာတမ်း ပြင်ဆင်မှု',
      description:
        'စာရွက်စာတမ်းအားလုံးကို တိကျဂရုတစိုက် ပြင်ဆင်ပြီး ကျောင်းသားရော မိဘများပါ ရှင်းလင်းစွာ နားလည်အောင် ဆက်သွယ်ပြောကြားပါသည်။',
    },
    {
      title: 'ပွင့်လင်းမြင်သာသော ငွေကြေးအချက်အလက်',
      description:
        'ငွေကြေးကိစ္စအားလုံးကို ပွင့်ပွင့်လင်းလင်း ရိုးရိုးသားသား ရှင်းပြပေးသဖြင့် ကျောင်းသားနှင့် မိသားစုများ စိတ်ချယုံကြည်နိုင်ပါသည်။',
    },
    {
      title: 'မျှတသော ဝန်ဆောင်ခ',
      description:
        'တစ်လျှောက်လုံး ရရှိမည့် တန်ဖိုးမြင့် ပံ့ပိုးမှုအပြည့်အစုံနှင့် ကိုက်ညီသော သင့်တင့်မျှတသည့် ဝန်ဆောင်ခသာ ကောက်ခံပါသည်။',
    },
    {
      title: 'ဂျပန်ရောက်ပြီးနောက်လည်း ဆက်လက်ပံ့ပိုးမှု',
      description:
        'ဂျပန်ရှိ စီနီယာများက အသစ်ရောက်လာသူများကို မိသားစုလို ဆက်ဆံပြီး ဆက်လက် လမ်းညွှန်ပေးပါသည်။',
    },
  ],
  journeySection: {
    eyebrow: 'လုပ်ငန်းစဉ်',
    title: 'ဂျပန်ဆီသို့ သင့်ခရီးလမ်း',
    subtitle: 'ပထမဆုံး ဆွေးနွေးမှုမှ ဂျပန်မှာ ပထမဆုံးနေ့အထိ — ရှင်းလင်းတဲ့ အဆင့်ဆင့် လမ်းညွှန်မှု။',
  },
  journey: [
    {
      title: 'အခမဲ့ တိုင်ပင်ဆွေးနွေး',
      description: 'သင့်ရည်မှန်းချက်၊ ဘတ်ဂျက်နဲ့ သင့်တော်ဆုံး intake အတွက် ဆွေးနွေးပါ။',
    },
    {
      title: 'ကျောင်းရွေးချယ်',
      description: 'မိတ်ဖက်မြို့ ၅ မြို့ထဲက နာမည်ကောင်း ကျောင်းတစ်ကျောင်းနဲ့ ချိတ်ဆက်ပေးပါတယ်။',
    },
    {
      title: 'စာရွက်စာတမ်းနှင့် COE',
      description: 'စာရွက်စာတမ်းများ တိကျစွာ ပြင်ဆင်ပြီး COE လျှောက်ထားပေးပါတယ်။',
    },
    {
      title: 'ဗီဇာနှင့် ခရီးစဉ်',
      description: 'ဗီဇာလမ်းညွှန်၊ လေယာဉ်လက်မှတ်နဲ့ မထွက်ခွာမီ orientation အပြည့်အစုံ။',
    },
    {
      title: 'ဂျပန်ရောက်ရှိ',
      description: 'လေဆိပ်မှာ ကြိုဆိုပြီး နေရာထိုင်ခင်းအထိ ဘေးကင်းစွာ ပို့ဆောင်ပေးပါတယ်။',
    },
  ],
  coursesSection: {
    eyebrow: 'သင်တန်းများ',
    title: 'ဂျပန်ဘာသာ သင်တန်းများ',
    subtitle: 'အခြေခံကနေ အဆင့်မြင့်အထိ တဆင့်ချင်း တက်လှမ်းနိုင်စေမယ့် JLPT ပြင်ဆင်မှု အပြည့်အစုံ။',
    features: 'သင်တန်း အကြောင်းအရာ',
    enroll: 'အပ်နှံရန်',
    flexibleTitle: 'လိုက်လျောညီထွေ သင်ယူနည်းများ',
    whyTitle: 'ကျွန်ုပ်တို့ သင်တန်းများ ဘာကြောင့် ထိရောက်သလဲ',
  },
  courses: [
    {
      title: 'ဂျပန်ဘာသာ အခြေခံ',
      level: 'အခြေခံ',
      duration: '၃ လ',
      description:
        'ဟီရာဂနာ၊ ခတခနာ၊ အခြေခံ သဒ္ဒါနဲ့ နေ့စဉ်သုံး ဝေါဟာရများဖြင့် ဂျပန်စာ အုတ်မြစ် ခိုင်မာအောင် တည်ဆောက်ပါ။',
      features: [
        'ဟီရာဂနာ၊ ခတခနာနှင့် အခြေခံ ခန်းဂျီး',
        'အခြေခံ နှုတ်ဆက်စကားနှင့် သဒ္ဒါ',
        'နေ့စဉ်သုံး ဝေါဟာရနှင့် အသုံးအနှုန်းများ',
        'နားထောင်ခြင်းနှင့် အသံထွက် လေ့ကျင့်မှု',
      ],
    },
    {
      title: 'ဂျပန်ဘာသာ အလယ်အလတ်',
      level: 'အလယ်အလတ်',
      duration: '၄ လ',
      description: 'JLPT N4 စာမေးပွဲအတွက် သဒ္ဒါ၊ ခန်းဂျီး၊ အဖတ်နှင့် နားထောင်စွမ်းရည် မြှင့်တင်ပါ။',
      features: [
        'ခန်းဂျီး ၃၀၀ ကျော်',
        'ရှုပ်ထွေးသော သဒ္ဒါပုံစံများ',
        'စာဖတ်ခြင်းနှင့် ဆောင်းပါး နားလည်မှု',
        'နေ့စဉ်ဘဝအတွက် စကားပြော လေ့ကျင့်မှု',
      ],
    },
    {
      title: 'Speaking အထူးပြု အတန်း',
      level: 'အဆင့်မရွေး',
      duration: 'အချိန်ညှိနိုင်',
      description: 'ဂျပန်နေ့စဉ်ဘဝအတွက် ယုံကြည်မှုနဲ့ ချောမွေ့မှုကို တည်ဆောက်ပေးမည့် စကားပြောဗဟိုပြု သင်ခန်းစာများ။',
      features: ['စကားပြော ဗဟိုပြု သင်ခန်းစာများ', 'ယုံကြည်မှုနှင့် ချောမွေ့မှု တည်ဆောက်ခြင်း', 'လက်တွေ့ဘဝ အခြေအနေ လေ့ကျင့်မှု'],
    },
    {
      title: 'လက်တွေ့ ကျွမ်းကျင်မှု သင်တန်း',
      level: 'အဆင့်မရွေး',
      duration: 'အချိန်ညှိနိုင်',
      description: 'ဂျပန်မှာ နေထိုင်ရင်း ပညာဆက်သင်ဖို့ ချောမွေ့စွာ လိုက်လျောညီထွေဖြစ်စေမယ့် လက်တွေ့စွမ်းရည်နဲ့ ယဉ်ကျေးမှု ဗဟုသုတများ။',
      features: ['ဂျပန် ယဉ်ကျေးမှု ဗဟုသုတ', 'နေ့စဉ်ဘဝ လက်တွေ့ ကျွမ်းကျင်မှု', 'ချောမွေ့စွာ လိုက်လျောညီထွေဖြစ်ရေး လမ်းညွှန်'],
    },
  ],
  learningFormats: [
    { title: 'ဗီဒီယို', description: 'အချိန်မရွေး ကိုယ့်နှုန်းနဲ့ကိုယ် လေ့လာနိုင်တဲ့ သင်ခန်းစာများ။' },
    { title: 'Zoom', description: 'အချိန်နှင့်တပြေးညီ အပြန်အလှန် ဆွေးနွေးနိုင်တဲ့ online live အတန်းများ။' },
    { title: 'Zoom + ဗီဒီယို', description: 'Live အတန်းအပြင် recording ပါ ပြန်ကြည့်နိုင်လို့ အချိန်လွတ်လပ်စွာ ပြည့်ပြည့်စုံစုံ လေ့လာနိုင်ပါတယ်။' },
  ],
  whyCoursesWork: [
    {
      title: 'အသံထွက်နှင့် အရေးအသား တိကျရန် စနစ်တကျ လေ့ကျင့်မှု',
      description: 'မှန်ကန်တဲ့ အသံထွက်နဲ့ အရေးအသားကို အဆင့်ဆင့် ကျွမ်းကျင်အောင် လေ့ကျင့်ပေးပါတယ်။',
    },
    {
      title: 'အပတ်စဉ်/လစဉ် စာမေးပွဲများဖြင့် ထိရောက်စွာ တိုးတက်',
      description: 'ပုံမှန် စစ်ဆေးအကဲဖြတ်မှုတွေက နားလည်မှုကို ခိုင်မာစေပြီး ရလဒ်ကို မြှင့်တင်ပေးပါတယ်။',
    },
    {
      title: 'ရိုးရှင်း နားလည်လွယ်တဲ့ သဒ္ဒါ သင်ကြားမှု',
      description: 'သဒ္ဒါကို ရှင်းလင်း ရိုးရှင်းအောင် စီစဉ်ပြီး နားလည်လွယ်အောင် သင်ကြားပေးပါတယ်။',
    },
    {
      title: 'အပို အဖတ်နှင့် အကြား လေ့ကျင့်မှု',
      description: 'ပြဌာန်းစာအုပ်အပြင် ဖတ်စွမ်းရည်၊ ကြားစွမ်းရည် တိုးစေမည့် အပိုစာရွက်စာတမ်းများ ပေးပါတယ်။',
    },
    {
      title: 'JLPT စာမေးပွဲဟောင်းများဖြင့် လေ့ကျင့်မှု',
      description: 'မေးခွန်းဟောင်းများ လေ့ကျင့်ဖြေဆိုခြင်းက တကယ့် JLPT စာမေးပွဲအတွက် ယုံကြည်မှုအပြည့် ပြင်ဆင်ပေးပါတယ်။',
    },
  ],
  studySection: {
    eyebrow: 'ဂျပန်ပညာတော်သင်',
    title: 'ဂျပန်ဘာသာစကားကျောင်းဆီ သင့်လမ်းကြောင်း',
    subtitle: 'Zin Apex Education နဲ့ လျှောက်ထားဖို့ သိထားသင့်တာ အားလုံး။',
    docsTitle: 'လိုအပ်သော စာရွက်စာတမ်းများ (နမူနာ)',
    formTitle: 'လျှောက်လွှာဖောင်',
    formBody:
      'လျှောက်လွှာ (PDF) ကို download လုပ်ပြီး ဖြည့်စွက်ကာ ပြန်ပို့ပေးပါ။ လိုအပ်တဲ့ ပူးတွဲစာရွက်တွေ Google Drive folder ထဲမှာ ရှိပါတယ်။',
    download: 'ဖောင် ရယူရန်',
    viewSample: 'နမူနာ ကြည့်ရန်',
    driveLink: 'Drive folder ဖွင့်ရန်',
    orientationTitle: 'ကျောင်းသား Orientation',
    orientationBody:
      'Google Form ကနေ စာရင်းသွင်းပြီး orientation ဆွေးနွေးပွဲ တက်ရောက်ကာ လျှောက်ထားမှုဆိုင်ရာ အရေးကြီး အချက်အလက်များ ရယူပါ။',
    register: 'ယခုပဲ စာရင်းသွင်းရန်',
    intakeTitle: 'Intake အချိန်ဇယားများ',
    intakeHead: ['Intake', 'စာရင်းသွင်း နောက်ဆုံးရက်', 'COE တင်သွင်း', 'COE ရလဒ်'],
    citiesTitle: 'လျှောက်ထားနိုင်သော မြို့များ',
  },
  requiredDocuments: [
    'နိုင်ငံကူးလက်မှတ် (Passport)',
    'ကျောင်းသား၊ Sponsor နှင့် မိဘများ၏ မှတ်ပုံတင် (NRC)',
    'အိမ်ထောင်စု စာရင်း',
    'အထက်တန်း အောင်လက်မှတ် / အမှတ်စာရင်း သို့မဟုတ် ဘွဲ့လက်မှတ်နှင့် နှစ်အလိုက် အမှတ်စာရင်းများ',
    'တက္ကသိုလ် နောက်ဆုံးနှစ် ပြီးဆုံးကြောင်း လက်မှတ်နှင့် နှစ်အလိုက် အမှတ်စာရင်း (လက်ရှိ တက္ကသိုလ်ကျောင်းသားများသာ)',
    'ဂျပန်ဘာသာ အရည်အချင်း လက်မှတ် (JLPT, NAT-TEST စသည်)',
    'တက်ရောက်ခဲ့သော ဂျပန်ဘာသာ သင်တန်း တက်ရောက်ကြောင်း လက်မှတ်',
    'Show money အထောက်အထား ဘဏ်စာရင်း (ကျပ် သိန်း ၄၀ ခန့်)',
    'ဓာတ်ပုံ (3cm x 4cm)',
  ],
  intakes: [
    {
      intake: '၂၀၂၆ ဧပြီ Intake',
      registration: '၂၀၂၅ စက်တင်ဘာ',
      coeSubmission: '၂၀၂၅ အောက်တိုဘာ',
      coeResult: '၂၀၂၆ ဖေဖော်ဝါရီ',
    },
    {
      intake: '၂၀၂၆ ဇူလိုင် Intake',
      registration: '၂၀၂၅ ဒီဇင်ဘာ',
      coeSubmission: '၂၀၂၆ ဇန်နဝါရီ',
      coeResult: '၂၀၂၆ မေ',
    },
    {
      intake: '၂၀၂၆ အောက်တိုဘာ Intake',
      registration: '၂၀၂၆ မတ်',
      coeSubmission: '၂၀၂၆ ဧပြီ',
      coeResult: '၂၀၂၆ သြဂုတ်',
    },
  ],
  cities: ['တိုကျို', 'ရှိဇုအိုကာ', 'ဟာမာမတ်ဆု', 'အိုကာယာမာ', 'ကိုဘေး'],
  storiesSection: {
    eyebrow: 'ကျောင်းသား အတွေ့အကြုံများ',
    title: 'ကျောင်းသား သုံးသပ်ချက်များ',
    subtitle: 'ကျွန်ုပ်တို့ရဲ့ ပံ့ပိုးမှုနဲ့ ပညာတော်သင် ရည်မှန်းချက် အောင်မြင်ခဲ့တဲ့ ကျောင်းသားတွေရဲ့ အတွေ့အကြုံများ။',
    storyName: 'ကျောင်းသား အောင်မြင်မှု မှတ်တမ်း',
    schools: ['တိုကျို ဘာသာစကားကျောင်း', 'ရှိဇုအိုကာ ဘာသာစကားကျောင်း', 'ဟာမာမတ်ဆု ဘာသာစကားကျောင်း'],
    programs: ['၂၀၂၄ ဧပြီ Intake', '၂၀၂၄ ဇူလိုင် Intake', '၂၀၂၄ အောက်တိုဘာ Intake'],
  },
  testimonialsSection: {
    eyebrow: 'ကျောင်းသားအသံများ',
    title: 'ကျောင်းသားတွေ ဘာပြောကြလဲ',
    subtitle: 'ဂျပန်မှာ ပညာသင် နေထိုင်နေကြတဲ့ ZAE ကျောင်းသားတွေရဲ့ တကယ့်စကားများ။',
  },
  testimonials: [
    {
      name: 'Myint Myat Theingi',
      intake: 'Facebook တွင် အကြံပြုထားသည်',
      quote:
        'အေဂျင်စီနဲ့ လက်တွဲခဲ့ရတာ တကယ်ကို စိတ်ချမ်းသာစရာ ကောင်းပါတယ်။ Founder ကိုယ်တိုင် ဂျပန်ရောက်တဲ့နေ့ကစပြီး လိုလေသေးမရှိ ဆောင်ရွက်ပေးသလို၊ ရုံးက အစ်မတွေကလည်း စာရွက်စာတမ်းတွေကို အမှားအယွင်းမရှိအောင် စနစ်တကျ လုပ်ပေးကြပါတယ်။ ဂျပန်ရောက်တဲ့အခါ စီနီယာတွေနဲ့ မိတ်ဆက်ပေးပြီး အထီးမကျန်အောင် ဂရုစိုက်ပေးလို့ အားရှိခဲ့ရပါတယ်။',
    },
    {
      name: 'Nwe Nwe Khaing',
      intake: 'Facebook တွင် အကြံပြုထားသည်',
      quote:
        'အစအရာရာ အဆင်ပြေအောင် ကူညီပေးခဲ့တဲ့အတွက် ZIN APEX EDUCATION မိသားစုတစ်ခုလုံးကို ကျေးဇူးတင်ပါတယ်။ Online service ဆိုပေမဲ့ လစ်ဟာမှုမရှိ၊ ဂျပန်ရောက်တဲ့အချိန်ထိ စိတ်ရှည်လက်ရှည် ရှင်းပြပေးကြပါတယ်။ Sensei Zin ကိုယ်တိုင် ဂျပန်မှာ ရှိနေတာဆိုတော့ အဆင်ပြေဆုံးပါ။ အေးချမ်းစွာနဲ့ ဂျပန်ကို လာချင်ရင် Zin APEX ကိုပဲ recommend ပေးပါရစေ။',
    },
    {
      name: 'Ingyin Pwint Phyu',
      intake: 'Facebook တွင် အကြံပြုထားသည်',
      quote:
        'Sensei တွေ အရမ်းစိတ်ရှည်ပြီး သဘောလည်းကောင်းပါတယ်။ အစအရာရာ လိုလေသေးမရှိ၊ မမှားယွင်းအောင် လုပ်ပေးပြီး ဂျပန်ရောက်တဲ့ထိ ကူညီပေးပါတယ်။ 100% ယုံကြည်စိတ်ချရပါတယ်။',
    },
    {
      name: 'Htet Myat',
      intake: 'Facebook တွင် အကြံပြုထားသည်',
      quote:
        'ကျွန်တော်က ထိုင်းနိုင်ငံကနေ တစ်ဆင့် ဂျပန်ကို ကူးတဲ့ ကျောင်းသားဖြစ်ပြီး ကိစ္စအဝဝကို online ကနေပဲ ဆောင်ရွက်ခဲ့ရပါတယ်။ ကိုယ်တိုင် စုံစမ်းစစ်ဆေးပြီး၊ တကယ် အလုပ်လုပ်နေတဲ့၊ ကျွန်တော့်ကို ဂျပန်အထိ တကယ် ပို့ဆောင်ပေးခဲ့တဲ့ အေဂျင်စီ ဖြစ်လို့ နောက်လာမယ့်သူတွေကို ZIN APEX Education ကိုပဲ ညွှန်းချင်ပါတယ်။',
    },
  ],
  activitiesSection: {
    eyebrow: 'လှုပ်ရှားမှုများ',
    title: 'ကျွန်ုပ်တို့၏ လှုပ်ရှားမှုများ',
    subtitle:
      'ပညာတော်သင် ခရီးလမ်း အဆင့်တိုင်းမှာ ကျောင်းသားတွေကို ဘယ်လို ပံ့ပိုးပေးနေလဲဆိုတာ လှုပ်ရှားမှုတွေကနေ လေ့လာကြည့်ပါ။',
    shareText: 'သင့်အောင်မြင်မှု အတွေ့အကြုံကို မျှဝေချင်ပါသလား? ဝမ်းသာစွာ ဖော်ပြပေးချင်ပါတယ်။',
    shareCta: 'အတွေ့အကြုံ မျှဝေရန် ဆက်သွယ်ပါ',
  },
  activities: [
    'ဂျပန်ရောက်ရှိလာသော ZAE ကျောင်းသားများ',
    'ထွက်ခွာသည့်နေ့ — ဂျပန်ဆီ ခရီးစ',
    'ဂျပန်မှ ကြိုဆိုပါတယ်',
    'လေဆိပ်ရောက်ရှိသည့်နေ့',
    'Orientation အခမ်းအနား',
    'ဂျပန်မှာ အတူတူ လည်ပတ်ခြင်း',
    'ဟနေဒါ လေဆိပ် ရောက်ရှိ',
    'ဂျပန်မှာ နေ့စဉ်ဘဝ',
    'ကျောင်းသား Orientation',
    'ကျောင်းသား အသိုက်အဝန်းနှင့် ညစာ',
    'မြို့ထဲ ရောက်ရှိ',
    'ဂျပန်မှာ အတူတူ အောင်ပွဲခံ',
  ],
  resultsSection: {
    eyebrow: 'ရလဒ်များ',
    title: 'ကျွန်ုပ်တို့၏ COE ရလဒ်',
    subtitle:
      'ဒီမှတ်တမ်းက ဂျပန် လူဝင်မှုကြီးကြပ်ရေးနဲ့ ကျောင်းလျှောက်ထားမှု လုပ်ငန်းစဉ်တွေမှာ ကျောင်းသားတွေကို အောင်မြင်စွာ လမ်းညွှန်နိုင်တဲ့ Zin Apex Education ရဲ့ စွမ်းရည်နဲ့ တာဝန်ယူမှုကို သက်သေပြပါတယ်။',
    chartTitle: 'နှစ်အလိုက် COE ရလဒ်များ',
    legendApplicants: 'လျှောက်ထားသူ',
    legendSuccessful: 'COE အောင်မြင်သူ',
    pending: '၉ ဦး စောင့်ဆိုင်းဆဲ',
  },
  faqSection: { eyebrow: 'FAQ', title: 'မေးလေ့ရှိသော မေးခွန်းများ' },
  faqs: [
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
  ],
  contactCta: {
    title: 'ဂျပန်ဆီ ခရီးစတင်ဖို့ ',
    titleAccent: 'အသင့်ဖြစ်ပြီလား?',
    subtitle: 'ရှင်းလင်းတဲ့ လမ်းညွှန်မှုနဲ့ ပံ့ပိုးမှု အပြည့်အစုံအတွက် ကျွန်ုပ်တို့အဖွဲ့ကို ဆက်သွယ်လိုက်ပါ။',
    button: 'အခမဲ့ တိုင်ပင်ဆွေးနွေးရန်',
  },
  footer: {
    tagline:
      'ဂျပန်ဘာသာ သင်ယူမှုနဲ့ ဂျပန်ပညာတော်သင် ပံ့ပိုးမှုအတွက် ယုံကြည်စိတ်ချရတဲ့ မိတ်ဖက် — ၂၀၂၃ ခုနှစ်ကတည်းက ကျောင်းသားတွေရဲ့ အိပ်မက်တွေကို အကောင်အထည်ဖော်ပေးနေပါတယ်။',
    quickLinks: 'အမြန်လင့်ခ်များ',
    ourServices: 'ဝန်ဆောင်မှုများ',
    serviceItems: [
      'ကျောင်းချိတ်ဆက်ခြင်းနှင့် စာရွက်စာတမ်း',
      'ဗီဇာနှင့် ခရီးစဉ် စီစဉ်မှု',
      'ဂျပန်ရောက် ပံ့ပိုးမှု',
      'ဂျပန်ဘာသာနှင့် ကျွမ်းကျင်မှု သင်တန်း',
    ],
    office: 'မန္တလေး ရုံးခန်း',
    linkAbout: 'အကြောင်း',
    linkCourses: 'ဂျပန်ဘာသာ သင်တန်းများ',
    linkStudy: 'ဂျပန်ပညာတော်သင်',
    linkStories: 'ကျောင်းသား အတွေ့အကြုံများ',
    linkResults: 'COE ရလဒ်',
    rights: 'မူပိုင်ခွင့် အားလုံး လက်ဝယ်ရှိသည်။',
  },
  contactPage: {
    heroTitle: 'ဆက်သွယ်ရန်',
    heroSub: 'လျှောက်ထားဖို့ အသင့်ဖြစ်ပြီလား၊ မေးစရာရှိပါသလား? စာလေးပို့ထားလိုက်ပါ — ကျွန်ုပ်တို့အဖွဲ့က မကြာမီ ပြန်လည်ဆက်သွယ်ပေးပါမယ်။',
    address: 'လိပ်စာ',
    phone: 'ဖုန်း',
    email: 'အီးမေးလ်',
    officeHours: 'ရုံးချိန်',
    holiday: 'ပိတ်ရက်',
    holidayValue: 'တနင်္လာနှင့် တနင်္ဂနွေ (အပတ်စဉ်)',
    followUs: 'ကျွန်ုပ်တို့ကို Follow လုပ်ပါ',
    fullName: 'အမည် အပြည့်အစုံ',
    namePlaceholder: 'သင့်အမည်',
    course: 'စိတ်ဝင်စားသော သင်တန်း',
    coursePlaceholder: 'သင်တန်း ရွေးပါ',
    message: 'ပေးပို့လိုသော အကြောင်းအရာ',
    messagePlaceholder: 'ဘယ်လို ကူညီပေးရမလဲ ပြောပြပေးပါ',
    send: 'စာ ပို့ရန်',
    sending: 'ပို့နေပါသည်...',
    successTitle: 'ကျေးဇူးတင်ပါတယ်!',
    successBody: 'သင့်စာကို လက်ခံရရှိပါပြီ။ မကြာမီ ပြန်လည်ဆက်သွယ်ပေးပါမယ်။',
    sendAnother: 'နောက်တစ်စောင် ထပ်ပို့ရန်',
    error: 'တစ်ခုခု မှားယွင်းသွားပါတယ်။ ထပ်စမ်းကြည့်ပါ သို့မဟုတ် ဖုန်းဖြင့် တိုက်ရိုက် ဆက်သွယ်ပါ။',
  },
  aboutPage: {
    heroTitle: 'Zin Apex Education အကြောင်း',
    founderTitle: 'တည်ထောင်သူ အကြောင်း',
    founderYoutube:
      'YouTube မှာ Zin Japan Life channel လည်း လုပ်ကိုင်နေပြီး ဂျပန်မှာ နေထိုင်နေသူ/လာရောက်မည့် မြန်မာများအတွက် အရည်အသွေးမြင့် vlog များ၊ ဗဟုသုတနဲ့ အကြံပြုချက်များ၊ ဗီဇာ အချက်အလက်၊ ဂျပန်စာ သင်ခန်းစာနဲ့ လက်တွေ့ဘဝ လမ်းညွှန်များ မျှဝေနေပါတယ်။',
    qualifications: 'ပညာအရည်အချင်း',
    qualificationItems: [
      'ဟာမာမတ်ဆု ဂျပန်ဘာသာ ကောလိပ် — ဘွဲ့ရ',
      'ရှိဇုအိုကာ အေဝါ တက္ကသိုလ်၊ ဂျပန် (စီးပွားရေး စီမံခန့်ခွဲမှု)',
      'ရတနာပုံ တက္ကသိုလ်၊ မန္တလေး',
    ],
    ctaTitle: 'Zin Apex Education အသိုက်အဝန်းသို့ ဝင်ရောက်ပါ',
    ctaSub: 'ဂျပန်မှာ အောင်မြင်တဲ့ အနာဂတ်ဆီ ကျွန်ုပ်တို့ လမ်းညွှန်ပေးပါမယ်။',
    ctaBtn: 'ဆက်သွယ်ရန်',
  },
  coursesPage: {
    heroTitle: 'ဂျပန်ဘာသာ သင်တန်းများ',
    heroSub: 'ဂျပန်မှာ ပညာသင်နေထိုင်ဖို့ ပြင်ဆင်ပေးမည့် JLPT အထူးပြုသင်တန်းနဲ့ လက်တွေ့ လေ့ကျင့်မှုများ။',
    enroll: 'အပ်နှံရန်',
    textbooksTitle: 'N4 ပြဌာန်းစာအုပ်နှင့် သင်ထောက်ကူများ',
    textbooksBody:
      'N4 သင်တန်းမှာ Minna no Nihongo နဲ့ ရွေးချယ်ထားတဲ့ အထောက်အကူ စာအုပ်များသုံးပြီး သဒ္ဒါ၊ ဝေါဟာရ၊ အဖတ်၊ အကြားနဲ့ ခန်းဂျီးတွေ သင်ကြားပါတယ် — ဗီဒီယို၊ Zoom live ဒါမှမဟုတ် ပေါင်းစပ်ပုံစံ ရွေးချယ်နိုင်ပါတယ်။',
    speakingTitle: 'Speaking အထူးပြုနှင့် လွတ်လပ်စွာ လေ့လာမှု',
    speakingBody:
      'Speaking အတန်းများနဲ့ စကားပြောစွမ်းရည် မြှင့်တင်ပါ၊ ဒါမှမဟုတ် N5 ဗီဒီယို သင်ခန်းစာတွေနဲ့ ကိုယ့်နှုန်းနဲ့ကိုယ် လေ့လာပါ။',
    speakingLi1: 'လက်တွေ့ဘဝသုံး စကားပြော ဗဟိုပြု သင်ခန်းစာများ',
    speakingLi2: 'အချိန်မရွေး ကြည့်နိုင်တဲ့ N5 ဗီဒီယို သင်ခန်းစာများ',
    ctaTitle: 'ဒီနေ့ပဲ ဂျပန်စာ စတင်လေ့လာလိုက်ပါ',
    ctaSub: 'သင့်ရည်မှန်းချက်နဲ့ အချိန်ဇယားနဲ့ ကိုက်ညီတဲ့ သင်တန်းကို အပ်နှံလိုက်ပါ။',
    ctaBtn: 'ယခုပဲ အပ်နှံရန်',
  },
  studyPage: {
    heroTitle: 'ဂျပန်ပညာတော်သင်',
    heroSub: 'Zin Apex Education နဲ့ ဂျပန်ဘာသာစကားကျောင်း လျှောက်ထားဖို့ သိသင့်တာ အားလုံး။',
    docsNote:
      'ဂျပန်ဘာသာစကားကျောင်း လျှောက်ရာတွင် ယေဘုယျ လိုအပ်တတ်သော စာရွက်စာတမ်းများ ဖြစ်ပါသည်။ ကျောင်းနှင့် intake ပေါ်မူတည်၍ ကွာခြားနိုင်ပါသည်။',
    intakeNote:
      'အထက်ပါ ရက်စွဲများသည် ခန့်မှန်းချက်သာဖြစ်ပြီး တစ်ဦးချင်း အခြေအနေနှင့် တရားဝင် ဆောင်ရွက်ချိန်များပေါ် မူတည်၍ ပြောင်းလဲနိုင်ပါသည်။ ချောမွေ့စေရန် နောက်ဆုံးရက်များကို ကြိုတင် အတည်ပြုထားဖို့ အထူး အကြံပြုပါသည်။',
    citiesSub:
      'ဂျပန်ရဲ့ အဓိကမြို့ကြီးတွေမှာရှိတဲ့ ဘာသာစကားကျောင်းတွေကို လျှောက်ထားပေးပါတယ်။ သင့်ရည်မှန်းချက်နဲ့ လိုက်ဖက်တဲ့ မြို့ကို ရွေးချယ်ပါ။',
    ctaTitle: 'လျှောက်ထားမှုနဲ့ ပတ်သက်ပြီး မေးစရာရှိလား?',
    ctaSub: 'အဆင့်တိုင်းမှာ ကျွန်ုပ်တို့အဖွဲ့က လမ်းညွှန်ပေးပါမယ်။',
    ctaBtn: 'ဆက်သွယ်ရန်',
  },
  faqPage: {
    heroTitle: 'မေးလေ့ရှိသော မေးခွန်းများ',
    stillTitle: 'မေးစရာ ကျန်သေးလား?',
    stillBody: 'ကျွန်ုပ်တို့အဖွဲ့က ဝမ်းသာစွာ ကူညီပေးပါမယ် — အချိန်မရွေး ဆက်သွယ်နိုင်ပါတယ်။',
    stillBtn: 'ဆက်သွယ်ရန်',
  },
}

export const locales = { en, ja, my }
export type Locale = typeof en
