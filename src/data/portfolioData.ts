import { BeforeAfterCase, ProjectItem, SkillCategory, FaqItem } from '../types';

export const HERO_PLATFORMS = [
  { name: 'HighLevel', badge: 'GHL Certified', icon: 'Layers' },
  { name: 'ClickFunnels', badge: 'CF 2.0 Pro', icon: 'Flame' },
  { name: 'Systeme.io', badge: 'Automation Expert', icon: 'Cpu' },
  { name: 'WordPress', badge: 'Elementor / Bricks', icon: 'Globe' },
  { name: 'Webflow', badge: 'Visual CMS', icon: 'Box' },
  { name: 'Shopify', badge: 'E-commerce Funnels', icon: 'ShoppingBag' }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'lolly-daskal',
    client: 'Lolly Daskal',
    niche: 'Executive Leadership & Keynote Speaker',
    headline: 'Are you solving the Wrong Problem? The Leadership Code',
    metric: '+310% Lead Conversion',
    image: 'https://raw.githubusercontent.com/darren889-ui/profile-image/68d4bc8fbe4d868208bfff3182e9702bb99559cd/Redesign%20%231.png',
    images: [
      'https://raw.githubusercontent.com/darren889-ui/profile-image/68d4bc8fbe4d868208bfff3182e9702bb99559cd/Redesign%20%231.png',
      'https://raw.githubusercontent.com/darren889-ui/profile-image/68d4bc8fbe4d868208bfff3182e9702bb99559cd/blur%2060%25.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://raw.githubusercontent.com/darren889-ui/profile-image/68d4bc8fbe4d868208bfff3182e9702bb99559cd/Redesign%20%231.png',
    beforePain: [
      'Cluttered wall of text with no visual anchor',
      'Unclear primary CTA hidden below the fold',
      'Lacked social proof metrics and book authority badges'
    ],
    afterGain: [
      'Warm luxury gold & slate executive aesthetic',
      '"1.2 Million Leaders Coached" authority badge instantly visible',
      'Frictionless "Start My Transformation" 1-click booking flow'
    ],
    details: 'Redesigned for a world-renowned executive coach. Streamlined her leadership assessment funnel to capture C-suite inquiries directly from paid media and organic LinkedIn traffic.',
    tags: ['Executive Coaching', 'High-Ticket Funnel', 'GoHighLevel', 'Authority Branding']
  },
  {
    id: 'brand-identity-mastery-redesign',
    client: 'BrandForge Digital',
    niche: 'E-Commerce Branding & Digital Product Launch Funnel',
    headline: 'Build Iconic, Irresistible Brands That Dominate Modern E-Commerce',
    metric: '+345% Enrollment Conversion',
    image: '/images/online-name-brand-b4-af.png',
    images: [
      '/images/online-name-brand-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/online-name-brand-b4-af.png',
    beforePain: [
      'Basic course sales page with low visual appeal and generic typography',
      'Zero interactive brand naming case studies or student revenue breakdowns',
      'Clunky multi-page checkout causing 74% cart abandonment'
    ],
    afterGain: [
      'High-converting editorial aesthetic with vibrant layout and proof cards',
      'Interactive brand identity framework roadmap with live case study slider',
      'Streamlined 1-step checkout with order bumps driving +42% average order value'
    ],
    details: 'Re-engineered the digital presence and product launch funnel for BrandForge, transforming cold traffic into high-converting course enrollments and scaling front-end profit.',
    tags: ['E-Commerce Branding', 'Info Product Funnel', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'emily-life-coach-redesign',
    client: 'Emily Life Coach',
    niche: 'Transformational Life Coaching & Personal Mastery Funnel',
    headline: 'Break Through Mental Blocks & Step Into Your Highest Potential',
    metric: '+350% Discovery Calls Booked',
    image: '/images/emily-life-coach.png',
    images: [
      '/images/emily-life-coach.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/emily-life-coach.png',
    beforePain: [
      'Vague self-help messaging with zero tangible client transformation hooks',
      'Passive contact form resulting in tire-kickers and low-commitment inquiries',
      'Unstructured offer presentation causing 84% mobile visitor bounce rate'
    ],
    afterGain: [
      'Serene, high-trust coaching aesthetic with radiant visual storytelling',
      'Interactive 60-second clarity quiz pre-qualifying dream coaching clients',
      'Seamless discovery session calendar booking with automated preparation guide'
    ],
    details: 'Re-engineered the digital presence and client acquisition funnel for Emily Life Coach, turning casual social followers into committed 1-on-1 coaching clients.',
    tags: ['Life Coaching', 'Application Funnel', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'digital-growth-funnel-redesign',
    client: 'Nexus Digital Accelerator',
    niche: 'Digital Marketing & Growth Agency Funnel',
    headline: 'Scale Predictable Revenue: Full-Stack Digital Growth & CRO Architecture',
    metric: '+360% Qualified Growth Audits',
    image: '/images/digital-b4-af.png',
    images: [
      '/images/digital-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/digital-b4-af.png',
    beforePain: [
      'Generic agency landing page with clunky text walls and weak positioning',
      'No breakdown of proprietary growth framework or client ROI data',
      'Standard passive contact form yielding low-intent inquiries'
    ],
    afterGain: [
      'High-tech dark futuristic UX with interactive metric visualizers',
      'Strategic 3-step growth audit qualifier filtering high-ticket brands',
      'Frictionless consultation booking with automated pre-call briefing'
    ],
    details: 'Re-engineered the digital presence and inbound client acquisition funnel for Nexus Digital, positioning the firm as elite growth architects and dramatically accelerating enterprise deal velocity.',
    tags: ['Digital Agency', 'Growth Funnel', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'vanguard-roof-repair-redesign',
    client: 'Apex Roofing & Restoration',
    niche: 'Emergency Roof Repair & Storm Damage Replacement Funnel',
    headline: 'Stop Leaks Fast: Certified Roof Inspection & 24/7 Storm Restoration',
    metric: '+350% Emergency Inspection Requests',
    image: '/images/roof-repair-b4-af.png',
    images: [
      '/images/roof-repair-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/roof-repair-b4-af.png',
    beforePain: [
      'Outdated contractor template with tiny emergency hotline and low mobile trust',
      'Zero insurance claim assistance guidance or drone inspection proof',
      'Slow generic contact form losing 79% of urgent leak repair calls'
    ],
    afterGain: [
      'High-contrast emergency authority aesthetic with instant 24/7 hotline banner',
      'Interactive 45-second Storm Damage & Roof Age Assessment Quiz',
      'Automated dispatch calendar with instant SMS confirmation & technician tracker'
    ],
    details: 'Re-engineered the digital presence and inbound emergency acquisition funnel for Apex Roofing, capturing high-intent storm repair leads and multi-thousand dollar roof replacements on autopilot.',
    tags: ['Roofing Services', 'Emergency Lead Gen', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'home-fix-pro-redesign',
    client: 'HomeFix Handyman & Home Services',
    niche: 'Residential Repair & Local Handyman Service Funnel',
    headline: 'Fast, Reliable Home Repairs & Maintenance by Licensed Craftsmen',
    metric: '+330% Local Estimate Requests',
    image: '/images/home-fix-b4-af.png',
    images: [
      '/images/home-fix-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/home-fix-b4-af.png',
    beforePain: [
      'Cluttered local contractor template with buried emergency service numbers',
      'No upfront transparent pricing tiers or background-checked safety badges',
      'Slow phone-only booking causing high bounce rates among busy homeowners'
    ],
    afterGain: [
      'Clean, high-trust homeowner layout with instant upfront service category cards',
      'Interactive 30-second Project Cost Estimator & Photo Upload Tool',
      'Frictionless same-day / next-day arrival slot booking with instant SMS confirmation'
    ],
    details: 'Re-engineered the local client acquisition funnel for HomeFix, positioning the service as the most trustworthy home maintenance provider in the metro area and driving consistent daily repair bookings.',
    tags: ['Home Services', 'Local Lead Gen', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'pure-glo-skincare-redesign',
    client: 'Pure Glo Aesthetics',
    niche: 'Luxury Skincare Clinic & VIP Treatment Funnel',
    headline: 'Reveal Radiant, Ageless Skin: High-Ticket MedSpa & Skin Therapy',
    metric: '+365% First-Visit Bookings',
    image: '/images/pure-glo-b4-af.png',
    images: [
      '/images/pure-glo-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/pure-glo-b4-af.png',
    beforePain: [
      'Sterile, outdated clinic template with clinical jargon and dull imagery',
      'No visual showcase of real skin transformations or client reviews',
      'Friction-heavy phone-only booking losing 76% of evening mobile traffic'
    ],
    afterGain: [
      'Elegantly luminous luxury spa aesthetic with glowing complexion proof',
      'Interactive 45-second Skin Analysis Quiz recommending custom protocols',
      'Frictionless VIP treatment reservation with instant SMS confirmation'
    ],
    details: 'Complete brand positioning and client booking funnel overhaul for Pure Glo Aesthetics, transforming casual browsers into loyal high-ticket clinic members.',
    tags: ['MedSpa & Aesthetics', 'VIP Treatment Funnel', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'jessica-fitness-coach-redesign',
    client: 'Jessica Fitness Coach',
    niche: 'Women’s Fitness & High-Ticket Online Coaching Funnel',
    headline: 'Sustainable Fat Loss & Strength: Customized 1-on-1 Fitness Transformation',
    metric: '+385% Strategy Call Applications',
    image: '/images/jessica-fitness-coach-b4-af.png',
    images: [
      '/images/jessica-fitness-coach-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/jessica-fitness-coach-b4-af.png',
    beforePain: [
      'Basic link-in-bio page failing to convey high-ticket coaching value',
      'Zero structured client body transformations or verified workout milestones',
      'Passive Google form resulting in unqualified leads and low show-up rates'
    ],
    afterGain: [
      'Empowering, high-energy coaching layout featuring real client results',
      'Interactive 60-second fitness readiness questionnaire pre-qualifying applicants',
      'Automated calendar booking flow with instant prep guide boosting show-ups to 92%'
    ],
    details: 'Re-engineered the digital presence and client acquisition funnel for Jessica Fitness Coach, converting organic Instagram followers into high-ticket 1-on-1 coaching clients.',
    tags: ['Fitness Coaching', 'Application Funnel', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'kaizen-omakase-sushi-redesign',
    client: 'Kaizen Sushi & Omakase Bar',
    niche: 'Authentic Japanese Omakase & Premium Sushi Dining Funnel',
    headline: 'Mastery in Every Cut: Intimate Omakase & Handcrafted Japanese Gastronomy',
    metric: '+365% Omakase Counter Bookings',
    image: '/images/kaizen-sushi-b4-af.png',
    images: [
      '/images/kaizen-sushi-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/kaizen-sushi-b4-af.png',
    beforePain: [
      'Cluttered generic sushi takeaway menu lacking authentic artisan presentation',
      'Zero visual spotlight on master chef credentials, daily Tokyo fish market sourcing, or sake pairings',
      'Unreliable third-party ordering link causing 72% mobile bounce rate'
    ],
    afterGain: [
      'Intimate zen luxury Japanese dining aesthetic with vibrant nigiri & sashimi imagery',
      'Interactive 30-second Omakase & Tasting Course reservation selector',
      'Frictionless VIP counter seat reservation with instant SMS confirmation and deposit capture'
    ],
    details: 'Re-engineered the digital presence and VIP seat acquisition funnel for Kaizen Sushi & Omakase Bar, turning local culinary enthusiasts into booked-out weekend tasting seatings.',
    tags: ['Japanese Cuisine', 'Omakase Funnel', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'nyc-culinary-bistro-redesign',
    client: 'Manhattan Epicure & Fine Dining',
    niche: 'Michelin-Caliber NYC Dining & VIP Private Event Funnel',
    headline: 'Artisanal Gastronomy & Exclusive Dining Experiences in the Heart of NYC',
    metric: '+390% Private Dining & Table Bookings',
    image: '/images/nyc-food-b4-af.png',
    images: [
      '/images/nyc-food-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/nyc-food-b4-af.png',
    beforePain: [
      'Clunky PDF menu downloads that failed to render properly on mobile screens',
      'Zero visual storytelling around seasonal chef tastings or wine pairings',
      'Slow phone-only reservation system losing over 80% of evening diners'
    ],
    afterGain: [
      'Cinematic NYC editorial culinary aesthetic showcasing dishes in mouthwatering detail',
      'Interactive Chef’s Tasting Menu Explorer with curated wine flight pairings',
      'Seamless OpenTable / Resy calendar integration with instant VIP table confirmation'
    ],
    details: 'Re-engineered the digital storefront and reservation acquisition funnel for Manhattan Epicure, turning local foodie traffic and corporate event inquiries into fully booked dining rooms.',
    tags: ['NYC Hospitality', 'Fine Dining Funnel', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'ana-wellness-coach-redesign',
    client: 'Ana Wellness Coach',
    niche: 'Holistic Health & VIP Wellness Coaching Funnel',
    headline: 'Reclaim Vibrant Energy, Metabolic Balance & Lasting Wellbeing',
    metric: '+310% Client Consultation Bookings',
    image: '/images/ana-wellness-coach-b4-af.png',
    images: [
      '/images/ana-wellness-coach-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/ana-wellness-coach-b4-af.png',
    beforePain: [
      'Cluttered, unorganized health blog layout with buried service offer',
      'No clear transformation stories, nutrition protocols, or client proof',
      'Generic inquiry contact form with 81% bounce rate on mobile'
    ],
    afterGain: [
      'Nourishing, high-trust wellness aesthetic with serene editorial layout',
      'Interactive 60-second vitality assessment pre-qualifying private clients',
      'Automated calendar onboarding with instant preparatory nutrition guide'
    ],
    details: 'Transformed an integrative wellness practitioner’s online presence with an authority redesign that highlights sustainable transformations and consistently fills 1-on-1 coaching rosters.',
    tags: ['Wellness Coaching', 'Holistic Health', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'prana-yoga-studio-redesign',
    client: 'Prana Sanctuary Yoga Studio',
    niche: 'Boutique Yoga Studio & Unlimited Membership Pass Funnel',
    headline: 'Find Balance, Strength & Serenity: Discover Mindful Movement',
    metric: '+325% Intro Pass Signups',
    image: '/images/yoga-studio-b4-af.png',
    images: [
      '/images/yoga-studio-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/yoga-studio-b4-af.png',
    beforePain: [
      'Confusing multi-tab schedule widget that was unreadable on mobile phones',
      'No clear beginner pathway or reassurance for first-time yoga practitioners',
      'Complex checkout requiring account creation before viewing pricing'
    ],
    afterGain: [
      'Tranquil, earthy aesthetic evoking immediate sanctuary calm and warmth',
      'Interactive 3-question Beginner Style Finder matching classes to goals',
      'Frictionless $29 Unlimited 14-Day Intro Pass checkout with instant calendar sync'
    ],
    details: 'Re-architected the student onboarding and membership acquisition funnel for Prana Sanctuary Yoga Studio, converting local searchers into committed community members.',
    tags: ['Yoga & Wellness', 'Membership Funnel', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'botanica-florist-redesign',
    client: 'Botanica Luxe Floral Studio',
    niche: 'Bespoke Floral Design & Luxury Wedding Inquiry Funnel',
    headline: 'Bespoke Floral Artistry for Unforgettable Weddings & Milestone Celebrations',
    metric: '+340% High-Ticket Event Inquiries',
    image: '/images/florist-b4-af.png',
    images: [
      '/images/florist-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/florist-b4-af.png',
    beforePain: [
      'Cluttered, generic catalog template failing to showcase bespoke floral artistry',
      'Zero wedding venue portfolio or bride testimonial galleries',
      'Buried contact form with no date availability or budget selector'
    ],
    afterGain: [
      'Enchanting botanical editorial aesthetic with lush portfolio showcases',
      'Interactive 60-second Wedding Floral Vision & Budget Planner',
      'Streamlined VIP consultation booking with instant moodboard questionnaire'
    ],
    details: 'Re-engineered the digital presence and client acquisition funnel for Botanica Floral Studio, positioning the brand as the premier luxury wedding florist and filling event calendars months in advance.',
    tags: ['Floral & Events', 'Wedding Funnel', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'luxe-bridal-atelier-redesign',
    client: 'Aura Bridal Atelier',
    niche: 'Haute Couture Bridalwear & Private Fitting Appointment Funnel',
    headline: 'Curated Elegance: Designer Wedding Gowns & Bespoke Private Fittings',
    metric: '+360% VIP Fitting Bookings',
    image: '/images/wedding-shop-b4-af.png',
    images: [
      '/images/wedding-shop-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/wedding-shop-b4-af.png',
    beforePain: [
      'Dated catalog template with low-resolution dress photos and no silhouette filters',
      'Zero explanation of designer collections, alteration timelines, or stylist credentials',
      'Slow email inquiry form taking 72 hours for appointments, losing high-intent brides'
    ],
    afterGain: [
      'Luminous champagne editorial bridal aesthetic highlighting intricate lace and gown detail',
      'Interactive 60-second Gown Silhouette & Wedding Date Style Matcher',
      'Frictionless VIP private suite fitting reservation with champagne service booking confirmation'
    ],
    details: 'Re-engineered the digital presence and bridal consultation acquisition funnel for Aura Bridal Atelier, capturing high-intent brides-to-be and booking premium private fittings months in advance.',
    tags: ['Bridal & Weddings', 'VIP Appointment Funnel', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'people-ops-hr-coach-redesign',
    client: 'Catalyst HR & Leadership Advisory',
    niche: 'Fractional Head of People & Executive HR Coaching Funnel',
    headline: 'Build High-Performance Teams: Strategic HR & Executive Culture Coaching',
    metric: '+335% Executive Retainer Inquiries',
    image: '/images/hr-coach-b4-af.png',
    images: [
      '/images/hr-coach-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/hr-coach-b4-af.png',
    beforePain: [
      'Dry compliance-heavy resume layout with zero leadership frameworks',
      'Unclear distinction between basic staffing and high-ticket fractional CPO retainers',
      'Slow unstructured inquiry form losing corporate decision-makers'
    ],
    afterGain: [
      'Polished corporate executive aesthetic showcasing proprietary talent retention frameworks',
      'Interactive 60-second Culture & Team Scalability Assessment diagnostic tool',
      'Frictionless executive discovery audit reservation with automated briefing pack'
    ],
    details: 'Re-engineered the digital presence and client acquisition funnel for Catalyst HR Advisory, positioning the practice as the go-to people strategy partner for scaleups and closing 5-figure monthly retainers.',
    tags: ['Executive HR', 'B2B Consulting Funnel', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'volt-athletic-fitness-redesign',
    client: 'Volt Athletic & Strength Club',
    niche: 'Elite Strength Conditioning & High-Performance Athletic Gym Funnel',
    headline: 'Unleash Peak Athletic Potential: Elite Coaching & Strength Architecture',
    metric: '+380% Athlete Assessment Bookings',
    image: '/images/volt-fitness-b4-af.png',
    images: [
      '/images/volt-fitness-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/volt-fitness-b4-af.png',
    beforePain: [
      'Standard local gym brochure with generic clip art and buried class schedules',
      'Zero spotlight on elite athletic training methodologies, barbell racks, or coach certifications',
      'Friction-filled phone-only trial inquiries losing 82% of night-time mobile searchers'
    ],
    afterGain: [
      'Electrifying high-voltage athletic aesthetic featuring bold neon accents and athlete transformations',
      'Interactive 45-second Athletic Goal & Movement Screen qualifier',
      'Instant VIP Trial Pass claim with direct calendar booking and automated SMS confirmation'
    ],
    details: 'Re-engineered the digital storefront and membership acquisition funnel for Volt Athletic Club, driving high-ticket semi-private personal training bookings and filling peak-hour lifting platforms.',
    tags: ['Athletic Performance', 'Strength Gym Funnel', 'GoHighLevel', 'Conversion Redesign']
  }
];

export const GLIMPSE_PROJECTS: ProjectItem[] = [
  {
    id: 'saas-funnel-matrix',
    title: 'Enterprise AI & SaaS Acquisition Funnel',
    category: 'saas',
    categoryLabel: 'SaaS Funnel',
    designerTag: 'DESIGNED BY DARREN LEE',
    thumbnail: 'https://raw.githubusercontent.com/darren889-ui/profile-image/c66727f964895f0b68291b8320cd45c0aacc84cd/Funnels.png',
    fullImage: 'https://raw.githubusercontent.com/darren889-ui/profile-image/c66727f964895f0b68291b8320cd45c0aacc84cd/Funnels.png',
    conversionLift: '+340% Trial Activation',
    platform: 'Webflow + HighLevel',
    colorTheme: 'from-purple-900/40 via-indigo-900/20 to-slate-950',
    overview: 'High-converting software landing page featuring dark cyberpunk typography, real-time ROI calculator, and interactive interactive product teardowns.',
    keyFeatures: [
      'Dark obsidian theme with neon purple accents & gradient glass cards',
      'Interactive slider calculating time saved per enterprise user',
      '1-Click Google & GitHub SSO registration modal',
      'Live customer review ticker with verified Trustpilot scores'
    ],
    results: [
      { label: 'Trial CVR', value: '14.2%' },
      { label: 'CAC Reduction', value: '-42%' },
      { label: 'Annual Pipeline', value: '$2.4M' }
    ]
  },
  {
    id: 'coaching-funnel-elite',
    title: 'High-Ticket Physique & Executive Coaching',
    category: 'coaching',
    categoryLabel: 'Coaching Funnel',
    designerTag: 'DESIGNED BY DARREN LEE',
    thumbnail: 'https://raw.githubusercontent.com/darren889-ui/profile-image/46386ed5d801b250a36ca14cd09f4089d2289c2e/Frame%2035.png',
    fullImage: 'https://raw.githubusercontent.com/darren889-ui/profile-image/46386ed5d801b250a36ca14cd09f4089d2289c2e/Frame%2035.png',
    conversionLift: '+220% Booked Strategy Calls',
    platform: 'GoHighLevel + Zapier',
    colorTheme: 'from-blue-900/40 via-sky-950/20 to-slate-950',
    overview: 'Designed for a top-tier fitness and performance mentor commanding $5,000+ per program. Built around authority, raw client transformations, and tight qualification.',
    keyFeatures: [
      'Cinematic high-contrast hero with embedded 90-second authority VSL',
      'Interactive 4-step transformation gallery with slider comparisons',
      'Pre-call application questionnaire that weeds out non-serious inquiries',
      'SMS & Email reminder sequences pre-wired in HighLevel'
    ],
    results: [
      { label: 'Application CVR', value: '9.8%' },
      { label: 'Show-Up Rate', value: '89%' },
      { label: 'Client Close Rate', value: '41%' }
    ]
  },
  {
    id: 'health-wellness-funnel',
    title: 'Holistic Health Clinic & Gut Health Protocol',
    category: 'health',
    categoryLabel: 'Health Funnel',
    designerTag: 'DESIGNED BY DARREN LEE',
    thumbnail: 'https://raw.githubusercontent.com/darren889-ui/profile-image/c66727f964895f0b68291b8320cd45c0aacc84cd/SaaS.png',
    fullImage: 'https://raw.githubusercontent.com/darren889-ui/profile-image/c66727f964895f0b68291b8320cd45c0aacc84cd/SaaS.png',
    conversionLift: '+410% Quiz Completion Rate',
    platform: 'ClickFunnels 2.0',
    colorTheme: 'from-emerald-950/40 via-teal-950/20 to-slate-950',
    overview: 'Calming, clean sage & sand visual hierarchy engineered to establish clinical credibility and guide chronic health patients through an empathetic quiz funnel.',
    keyFeatures: [
      'Warm organic color palette designed for high empathy and trust',
      'Interactive 60-second symptom assessment quiz funnel',
      'Doctor-backed research citations & medical advisory board cards',
      'Automated personalized protocol delivery upon email submission'
    ],
    results: [
      { label: 'Quiz Completion', value: '68%' },
      { label: 'Email Capture', value: '47%' },
      { label: 'Initial Consults', value: '320+/mo' }
    ]
  },
  {
    id: 'business-coaching-scale',
    title: 'B2B Founder Scale & Revenue Accelerator',
    category: 'business',
    categoryLabel: 'Business Coaching Funnel',
    designerTag: 'DESIGNED BY DARREN LEE',
    thumbnail: 'https://raw.githubusercontent.com/darren889-ui/profile-image/46386ed5d801b250a36ca14cd09f4089d2289c2e/ai%20consultatant%20LP1.png',
    fullImage: 'https://raw.githubusercontent.com/darren889-ui/profile-image/46386ed5d801b250a36ca14cd09f4089d2289c2e/ai%20consultatant%20LP1.png',
    conversionLift: '3.8x Return on Ad Spend',
    platform: 'Systeme.io + Stripe',
    colorTheme: 'from-amber-950/40 via-stone-900/20 to-slate-950',
    overview: 'Sophisticated warm-neutral corporate funnel engineered to attract 7-figure founders looking for systemized growth without burnout.',
    keyFeatures: [
      'Clean architectural typography with warm earth and slate accents',
      'Embedded video masterclass player with timed call-to-action triggers',
      'Detailed breakdown of the 5 core business bottlenecks',
      'Interactive calendar booking embedded directly into the qualification flow'
    ],
    results: [
      { label: 'Ad ROAS', value: '3.8x' },
      { label: 'Avg Deal Size', value: '$12,500' },
      { label: 'Qualified Leads', value: '145/mo' }
    ]
  },
  {
    id: 'finance-wealth-funnel',
    title: 'High-Net-Worth Wealth Advisory & Tax Strategy',
    category: 'finance',
    categoryLabel: 'Finance Coaching Funnel',
    designerTag: 'DESIGNED BY DARREN LEE',
    thumbnail: 'https://raw.githubusercontent.com/darren889-ui/profile-image/46386ed5d801b250a36ca14cd09f4089d2289c2e/lap-aa.png',
    fullImage: 'https://raw.githubusercontent.com/darren889-ui/profile-image/46386ed5d801b250a36ca14cd09f4089d2289c2e/lap-aa.png',
    images: [
      'https://raw.githubusercontent.com/darren889-ui/profile-image/46386ed5d801b250a36ca14cd09f4089d2289c2e/lap-aa.png',
      'https://raw.githubusercontent.com/darren889-ui/profile-image/46386ed5d801b250a36ca14cd09f4089d2289c2e/Group%201000008054.png'
    ],
    conversionLift: '+195% High-Net-Worth Inquiries',
    platform: 'WordPress + Custom Bricks',
    colorTheme: 'from-slate-900/40 via-zinc-900/20 to-slate-950',
    overview: 'Minimalist Swiss-inspired typography, subtle dark luxury tones, and institutional credibility designed for accredited investors and business owners.',
    keyFeatures: [
      'Ultra-clean black & crisp off-white contrast typography',
      'Interactive Tax Savings Calculator showing estimated deductions',
      'Strict SSL, compliance badges, and SEC-compliant disclaimers',
      'Private client portal preview to enhance perceived service value'
    ],
    results: [
      { label: 'AUM Inflow', value: '$8.5M' },
      { label: 'Avg Asset Base', value: '$1.8M' },
      { label: 'Lead Quality', value: '94% Match' }
    ]
  },
  {
    id: 'course-ai-agency',
    title: 'AI-Powered Agency Incubator & Curriculum Funnel',
    category: 'course',
    categoryLabel: 'Course Funnel',
    designerTag: 'DESIGNED BY DARREN LEE',
    thumbnail: 'https://raw.githubusercontent.com/darren889-ui/profile-image/68d4bc8fbe4d868208bfff3182e9702bb99559cd/Female%20entrepreneur%20coach%20landing%20page.png',
    fullImage: 'https://raw.githubusercontent.com/darren889-ui/profile-image/68d4bc8fbe4d868208bfff3182e9702bb99559cd/Female%20entrepreneur%20coach%20landing%20page.png',
    conversionLift: '$320,000 in 14 Days',
    platform: 'ClickFunnels 2.0 + HighLevel',
    colorTheme: 'from-violet-950/40 via-fuchsia-950/20 to-slate-950',
    overview: 'High-energy cyberpunk curriculum launch funnel with interactive module previews, animated prompt engineering teardowns, and live enrollment counter.',
    keyFeatures: [
      'Deep cosmic indigo background with glowing terminal cards',
      'Interactive curriculum accordion with preview video clips',
      'Dynamic countdown timer synchronized with cohort bonus deadlines',
      'High-converting 2-tier pricing table (Standard vs VIP Mentorship)'
    ],
    results: [
      { label: 'Launch Sales', value: '412 Enrolled' },
      { label: 'VIP Upgrade %', value: '38%' },
      { label: 'Refund Rate', value: '< 1.1%' }
    ]
  },
  {
    id: 'leadup-website-platform',
    title: 'LeadUp — B2B Lead Generation & Growth Platform',
    category: 'business',
    categoryLabel: 'B2B Growth Platform',
    designerTag: 'DESIGNED BY DARREN LEE',
    thumbnail: 'https://leadup-website-mu.vercel.app/',
    fullImage: 'https://leadup-website-mu.vercel.app/',
    liveUrl: 'https://leadup-website-mu.vercel.app/',
    iframeUrl: 'https://leadup-website-mu.vercel.app/',
    conversionLift: 'Live Vercel App',
    platform: 'Next.js / React / Vercel',
    colorTheme: 'from-blue-950/40 via-indigo-950/20 to-slate-950',
    overview: 'High-performance interactive B2B lead generation, growth strategy, and conversion website engineered with sleek dark UX, dynamic capability breakdowns, and direct consultation booking.',
    keyFeatures: [
      'Interactive live web app hosted on Vercel',
      'Ultra-responsive direct-response B2B layout',
      'Engineered service visualizers and ROI proof mechanics',
      'Frictionless discovery call and audit scheduling workflow'
    ],
    results: [
      { label: 'Platform', value: 'Vercel' },
      { label: 'App Status', value: 'Active' },
      { label: 'Conversion', value: 'Live' }
    ]
  },
  {
    id: 'mastermind-luxury-funnel',
    title: 'Elite Mastermind & Private Retreat Funnel',
    category: 'coaching',
    categoryLabel: 'High-Ticket Funnel',
    designerTag: 'DESIGNED BY DARREN LEE',
    thumbnail: 'https://raw.githubusercontent.com/darren889-ui/profile-image/c66727f964895f0b68291b8320cd45c0aacc84cd/intelligent%20Ai.png',
    fullImage: 'https://raw.githubusercontent.com/darren889-ui/profile-image/c66727f964895f0b68291b8320cd45c0aacc84cd/intelligent%20Ai.png',
    conversionLift: '$850k Closed Cohort',
    platform: 'GoHighLevel + Typeform',
    colorTheme: 'from-amber-950/40 via-yellow-950/20 to-slate-950',
    overview: 'Ultra-luxury application funnel engineered for an exclusive $25,000 per seat founder mastermind retreat in Bali.',
    keyFeatures: [
      'Editorial luxury aesthetic with gold accents and cinematic photography',
      'Multi-step application questionnaire filtering for $1M+ ARR founders',
      'Exclusive video trailer with past attendee endorsements',
      'Private calendar booking with automated vetting criteria'
    ],
    results: [
      { label: 'Qualified Apps', value: '184' },
      { label: 'Seat Fill Rate', value: '100%' },
      { label: 'Total Revenue', value: '$850k' }
    ]
  },
  {
    id: 'reno-fit-live-platform',
    title: 'RenoFit — Fitness & Transformation Platform',
    category: 'health',
    categoryLabel: 'Health & Fitness Platform',
    designerTag: 'DESIGNED BY DARREN LEE',
    thumbnail: 'https://reno-fit.vercel.app/',
    fullImage: 'https://reno-fit.vercel.app/',
    liveUrl: 'https://reno-fit.vercel.app/',
    iframeUrl: 'https://reno-fit.vercel.app/',
    conversionLift: 'Live Vercel App',
    platform: 'Next.js / React / Vercel',
    colorTheme: 'from-emerald-950/40 via-teal-950/20 to-slate-950',
    overview: 'High-converting interactive fitness, training, and transformation web platform engineered with sleek dark UX, dynamic calculators, and mobile-first responsiveness.',
    keyFeatures: [
      'Interactive live web application hosted on Vercel',
      'Ultra-responsive mobile and desktop layouts',
      'High-contrast direct-response conversion hierarchy',
      'Frictionless call-to-action routing and user journeys'
    ],
    results: [
      { label: 'Platform', value: 'Vercel' },
      { label: 'App Status', value: 'Active' },
      { label: 'Conversion', value: 'Live' }
    ]
  },
  {
    id: 'fit-transform-lpem-platform',
    title: 'FitTransform — Premium Coaching & Transformation Funnel',
    category: 'health',
    categoryLabel: 'Fitness & Transformation Funnel',
    designerTag: 'DESIGNED BY DARREN LEE',
    thumbnail: 'https://fit-transform-lpem.vercel.app/',
    fullImage: 'https://fit-transform-lpem.vercel.app/',
    liveUrl: 'https://fit-transform-lpem.vercel.app/',
    iframeUrl: 'https://fit-transform-lpem.vercel.app/',
    conversionLift: 'Live Vercel App',
    platform: 'Next.js / React / Vercel',
    colorTheme: 'from-amber-950/40 via-orange-950/20 to-slate-950',
    overview: 'High-converting interactive fitness transformation and coaching sales funnel designed with dynamic interactive calculators, client transformation breakdowns, and direct-response lead generation flows.',
    keyFeatures: [
      'Interactive live web app hosted on Vercel',
      'Dynamic transformation calculators and calorie roadmaps',
      'High-impact direct-response mobile conversion layout',
      'Frictionless call-to-action booking & application flow'
    ],
    results: [
      { label: 'Platform', value: 'Vercel' },
      { label: 'App Status', value: 'Active' },
      { label: 'Conversion', value: 'Live' }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Funnel Architecture & Strategy',
    iconName: 'Workflow',
    description: 'Engineering the psychological journey from initial ad click to paying customer.',
    skills: [
      { name: 'Direct-Response Copywriting', level: 96, badge: 'Conversion Focus', description: 'Headlines, hooks, value props, objection handling, and micro-copy.' },
      { name: 'Funnel Wireframing & Flow', level: 98, badge: 'Architecture', description: 'VSL pages, quiz funnels, application funnels, multi-tier checkouts.' },
      { name: 'Offer Positioning & Stacking', level: 94, badge: 'High-Ticket', description: 'Structuring bonuses, risk reversals, guarantees, and tiered pricing.' },
      { name: 'Lead Magnet & Squeeze Engineering', level: 95, badge: 'List Growth', description: 'Frictionless opt-in forms, 2-step popups, automated asset delivery.' }
    ]
  },
  {
    title: 'Platform & Tech Stack Mastery',
    iconName: 'Cpu',
    description: 'Flawless technical execution across all top funnel builders and CMS platforms.',
    skills: [
      { name: 'GoHighLevel (GHL)', level: 98, badge: 'Mastery', description: 'Full funnel builds, workflow automations, pipelines, custom CSS styling.' },
      { name: 'ClickFunnels 2.0 & Classic', level: 95, badge: 'Certified', description: 'High-speed checkouts, upsell ladders, order bumps, member areas.' },
      { name: 'WordPress & Elementor / Bricks', level: 94, badge: 'Custom Code', description: 'Pixel-perfect responsive design, speed optimization, dynamic fields.' },
      { name: 'Systeme.io & Webflow', level: 92, badge: 'Automations', description: 'All-in-one low-overhead systems, fluid responsive typography.' }
    ]
  },
  {
    title: 'Conversion UI/UX & Visual Design',
    iconName: 'Palette',
    description: 'Transforming bland templates into authority-building, trust-instilling visual assets.',
    skills: [
      { name: 'Figma UI/UX Prototyping', level: 98, badge: 'Design System', description: 'Mobile-first master components, high-fidelity mockups, auto-layouts.' },
      { name: 'Mobile-First Responsiveness', level: 99, badge: 'Crucial (80% Traffic)', description: 'Zero lag, thumb-friendly tap targets, optimized mobile layout.' },
      { name: 'Visual Hierarchy & Typography', level: 96, badge: 'Readability', description: 'High-contrast readability, scan-friendly formatting, editorial styling.' },
      { name: 'Color Psychology & Contrast', level: 95, badge: 'Brand Trust', description: 'Dark luxury, medical clean, and high-energy tech palettes.' }
    ]
  },
  {
    title: 'Optimization, Tracking & Analytics',
    iconName: 'BarChart3',
    description: 'Eliminating guesswork with rigorous data, split-testing, and tracking pixels.',
    skills: [
      { name: 'A/B Split Testing & CRO', level: 92, badge: 'Data-Driven', description: 'Headline variations, CTA tests, friction elimination, multivariate testing.' },
      { name: 'Meta Pixel & Google Tag Manager', level: 94, badge: 'Tracking', description: 'Custom conversion events, CAPI server-side tracking, GTM triggers.' },
      { name: 'Heatmaps & Session Analysis', level: 90, badge: 'Diagnostics', description: 'Clarity / Hotjar analysis to spot dead clicks and drop-off zones.' },
      { name: 'Page Speed (<1.2s Load Time)', level: 97, badge: 'Performance', description: 'Asset compression, WebP images, clean DOM structure, CDN tuning.' }
    ]
  }
];

export const TRANSFORMATION_ITEMS = [
  {
    id: 't1',
    title: 'Wake up to a conversion engine',
    description: 'Your landing page generates qualified leads and revenue 24/7 on autopilot while you sleep.'
  },
  {
    id: 't2',
    title: 'No more stressing over ghost appointments',
    description: 'Pre-qualify every prospect before they book so your calendar is only filled with ready-to-buy clients.'
  },
  {
    id: 't3',
    title: 'No longer push your services to cold leads',
    description: 'Educate, nurture, and establish authority through structured storytelling so visitors sell themselves.'
  },
  {
    id: 't4',
    title: 'Be the undisputed authority in your niche',
    description: 'Stand out from amateur competitors with a world-class brand presentation that commands top dollar.'
  },
  {
    id: 't5',
    title: 'Stand out with strategic conversion flow',
    description: 'Every headline, testimonial, and button is mathematically engineered to pull the reader down the page.'
  },
  {
    id: 't6',
    title: 'Save $5,000+ on messy, broken designs',
    description: 'Eliminate wasteful ad spend and leaky funnels with a clean, bulletproof build delivered in 7–14 days.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is a funnel for?',
    answer: 'A funnel is a step-by-step psychological process that guides potential customers through your offer—from initial awareness to final sale. it focuses 100% of visitor attention on a single high-converting action (e.g., booking a call, buying a product, or claiming an audit).'
  },
  {
    question: 'Who is this service for?',
    answer: 'This service is crafted specifically for coaches, consultants, SaaS founders, course creators, and agency owners who are actively running traffic (or planning to) and need a high-converting, authority-building landing page that turns clicks into high-ticket clients.'
  },
  {
    question: 'How long does a funnel take to build?',
    answer: 'Most custom funnel projects are designed, built, and launched within 7 to 14 days, depending on scope and whether copy is provided or needs strategic optimization.'
  },
  {
    question: 'Can you improve an existing landing page?',
    answer: 'Yes. I can redesign and optimize your page for better clarity, trust, and conversions.'
  },
  {
    question: 'Do you provide copywriting?',
    answer: 'Yes. I can help structure and refine the copy to make your offer easier to understand. If you have existing copy or a draft, we will refine it together'
  },
  {
    question: 'How much does it cost?',
    answer: 'The cost vary depend on the scope of the project, such as number of pages, scaling up based on multi-step funnels, checkout upsells, and automation integrations. We discuss transparent, will know what exactly included before we start.'
  }
];
