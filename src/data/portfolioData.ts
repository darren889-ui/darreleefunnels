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
    image: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a8194a0a6a03cda06e9a080.png',
    images: [
      'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a8194a0a6a03cda06e9a080.png',
      'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81af6ca6a03cda062bf8d5.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a8194a0a6a03cda06e9a080.png',
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
    id: 'matthew-kimberley',
    client: 'Matthew Kimberley',
    niche: 'Marketing for Elite Coaches & Consultants',
    headline: 'Book Yourself Solid: Marketing for Coaches',
    metric: '+285% Application Rate',
    image: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81983fa6a03cda06f0a6b8.png',
    beforeImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81983fa6a03cda06f0a6b8.png',
    beforePain: [
      'Outdated 2012 blog layout with 4 competing sidebars',
      'Confusing multi-step application form with 28 inputs',
      'Zero mobile responsiveness causing 74% bounce rate on mobile'
    ],
    afterGain: [
      'High-impact dark luxury aesthetic with bold typography hierarchy',
      '"60+ Books Published / Authority Framework" spotlight card',
      'Step-by-step 3-question qualifier funnel converting at 11.4%'
    ],
    details: 'Complete repositioning of Matthew Kimberley’s flagship coaching funnel, restructuring the narrative to eliminate tire-kickers and pre-qualify 5-figure coaching candidates.',
    tags: ['Consulting', 'Application Funnel', 'ClickFunnels 2.0', 'Direct-Response Copy']
  },
  {
    id: 'ai-products',
    client: 'NeuralFlow AI',
    niche: 'B2B SaaS & AI Product Studio',
    headline: 'Design Better AI Products & Interactive Interfaces',
    metric: '+440% Free Trial Signups',
    image: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a819a03fe4291bd107a5b28.png',
    beforeImg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a819a03fe4291bd107a5b28.png',
    beforePain: [
      'Generic corporate template with dull stock illustrations',
      'Visitors didn’t understand what the AI product actually did',
      'No interactive interactive preview or live demo hook'
    ],
    afterGain: [
      'Electric neon glassmorphism aesthetic with glowing UI mockups',
      'Interactive visual prompt playground directly in the hero section',
      'Reduced time-to-signup to under 18 seconds'
    ],
    details: 'Crafted a tech-forward landing page that showcases AI capabilities in real-time, drastically reducing visitor skepticism and driving enterprise demo requests.',
    tags: ['SaaS Landing Page', 'AI Tech', 'Webflow', 'Interactive UX']
  },
  {
    id: 'faceless-youtube',
    client: 'Tubepreneur Academy',
    niche: 'Digital Course & High-Volume Creator Funnel',
    headline: 'Build Profitable Faceless YouTube Channels & Scale to $10k/mo',
    metric: '4.9x ROAS on Meta Ads',
    image: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81a7fd255b571c8e84d789.png',
    beforeImg: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81a7fd255b571c8e84d789.png',
    beforePain: [
      'Cheap looking squeeze page with generic red countdown timers',
      'Failed Facebook ad compliance due to aggressive unverified claims',
      'Weak order bump & upsell flow causing missed average order value'
    ],
    afterGain: [
      'High-authority dark mode layout with real student income proofs',
      'Streamlined 2-step checkout with high-converting order bumps (+38% AOV)',
      '100% policy-compliant landing page structure for ad scale'
    ],
    details: 'Built a multi-tier VSL funnel for a top digital educator, scaling daily ad spend from $300/day to $2,500/day profitably while maintaining 4.9x ROAS.',
    tags: ['Course Funnel', 'VSL Architecture', 'Systeme.io', 'Order Bumps']
  },
  {
    id: 'creative-operations',
    client: 'ScaleAgency Ops',
    niche: 'B2B Creative Operations & Agency Scaling',
    headline: 'Run Creative Teams. Deliver Great Work. Every Time.',
    metric: '18 Qualified Calls / Wk',
    image: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a819a44fe4291bd107b3f9b.png',
    beforeImg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a819a44fe4291bd107b3f9b.png',
    beforePain: [
      'Unfocused agency service buffet confusing prospective buyers',
      'No clear case studies or tangible workflow walkthrough',
      'Generic "Contact Us" form that resulted in cold inquiries'
    ],
    afterGain: [
      'Striking high-contrast editorial yellow & obsidian design',
      'Interactive agency bottleneck diagnostic tool',
      'Automated Calendly qualification workflow with video intro'
    ],
    details: 'Positioned an agency consultancy as the premier solution for 7-figure creative agencies looking to streamline their project delivery pipelines.',
    tags: ['Agency Funnel', 'B2B Sales', 'WordPress / Elementor', 'Lead Scoring']
  },
  {
    id: 'brand-names-course',
    client: 'Nameric Studio',
    niche: 'E-Commerce Branding Masterclass',
    headline: 'Easily Create Memorable Brands: Master Naming Framework',
    metric: '$180k Launch Revenue',
    image: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a819e2c99074f5ef6f19745.png',
    beforeImg: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a819e2c99074f5ef6f19745.png',
    beforePain: [
      'Plain Shopify product page lacking storytelling and depth',
      'Zero student testimonials or before/after naming showcases',
      'Low perceived value for a $497 digital workshop'
    ],
    afterGain: [
      'Editorial magazine layout with bespoke typography & device mockups',
      'Interactive naming case study slider showing real brand results',
      'Sticky bottom cart bar with dynamic countdown for launch bonuses'
    ],
    details: 'Engineered a cinematic course launch funnel featuring video breakdowns, interactive workbook previews, and guaranteed outcome guarantees.',
    tags: ['Info Product', 'Launch Funnel', 'Shopify / PageFly', 'Conversion Design']
  },
  {
    id: 'health-longevity',
    client: 'VitalApex Longevity',
    niche: 'High-Ticket Health & Biohacking Protocol',
    headline: 'Reverse Biological Age: The Cellular Optimization Blueprint',
    metric: '+360% Consultation Bookings',
    image: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a819e53cf50f900f2cb3d75.png',
    beforeImg: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a819e53cf50f900f2cb3d75.png',
    beforePain: [
      'Clinical, intimidating medical jargon with poor mobile navigation',
      'No clear patient success stories or scientific proof benchmarks',
      'Buried consultation calendar resulting in 82% bounce rate'
    ],
    afterGain: [
      'Serene emerald & slate authority design with bio-marker trackers',
      'Interactive 60-second biological age self-assessment calculator',
      'Frictionless calendar booking with automated confirmation workflows'
    ],
    details: 'Transformed a functional medicine clinic’s digital presence into an elite patient acquisition engine, boosting high-ticket program conversions from organic search and social traffic.',
    tags: ['Health & Wellness', 'High-Ticket Funnel', 'GoHighLevel', 'Interactive Assessment']
  },
  {
    id: 'wealth-advisory',
    client: 'Vanguard Wealth Partners',
    niche: 'Private Wealth Management & Family Office',
    headline: 'Generational Wealth Preservation for High-Net-Worth Families',
    metric: '$4.2M Pipeline Generated',
    image: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a819e6ecf50f900f2cb4089.png',
    beforeImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a819e6ecf50f900f2cb4089.png',
    beforePain: [
      'Generic corporate brochure website with zero lead capture mechanisms',
      'Unclear value proposition that sounded like traditional retail banking',
      'No gated research whitepapers or accredited investor case studies'
    ],
    afterGain: [
      'Prestigious navy & champagne executive layout with trust badges',
      'High-converting gated institutional research report funnel',
      'Pre-qualification questionnaire routing high-intent investors directly to partners'
    ],
    details: 'Re-architected the client onboarding funnel for a boutique wealth firm, establishing undeniable trust and driving high-net-worth investor consultations.',
    tags: ['Finance & Wealth', 'Application Funnel', 'ClickFunnels 2.0', 'VIP Lead Gen']
  }
];

export const GLIMPSE_PROJECTS: ProjectItem[] = [
  {
    id: 'saas-funnel-matrix',
    title: 'Enterprise AI & SaaS Acquisition Funnel',
    category: 'saas',
    categoryLabel: 'SaaS Funnel',
    designerTag: 'DESIGNED BY DARREN LEE',
    thumbnail: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81a035255b571c8e69e0e6.png',
    fullImage: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81a035255b571c8e69e0e6.png',
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
    thumbnail: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81a6d2cf50f900f2e2575f.png',
    fullImage: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81a6d2cf50f900f2e2575f.png',
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
    thumbnail: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81a739fe4291bd109a1f5d.png',
    fullImage: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81a739fe4291bd109a1f5d.png',
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
    thumbnail: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81a98afe4291bd10a22ae2.png',
    fullImage: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81a98afe4291bd10a22ae2.png',
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
    thumbnail: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81ab96fe4291bd10a57160.png',
    fullImage: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81ab96fe4291bd10a57160.png',
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
    thumbnail: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81abc4a6a03cda06255fb2.png',
    fullImage: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81abc4a6a03cda06255fb2.png',
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
    id: 'ecommerce-scaling-funnel',
    title: 'D2C Supplement & Subscription Funnel',
    category: 'saas',
    categoryLabel: 'E-Commerce Funnel',
    designerTag: 'DESIGNED BY DARREN LEE',
    thumbnail: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81ae54a6a03cda062867f0.png',
    fullImage: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81ae54a6a03cda062867f0.png',
    conversionLift: '+285% Average Order Value',
    platform: 'Shopify Plus + ReCharge',
    colorTheme: 'from-cyan-950/40 via-blue-950/20 to-slate-950',
    overview: 'High-converting direct-to-consumer product funnel with dynamic bundle builders, one-click upsells, and subscription discount incentives.',
    keyFeatures: [
      'Interactive tiered quantity selector with free gift unlocks',
      'One-click post-purchase upsell flow maximizing checkout AOV',
      'Clinical trial proof benchmarks and real customer video reviews',
      'Instant mobile payment checkout integration with Apple Pay'
    ],
    results: [
      { label: 'Checkout CVR', value: '6.4%' },
      { label: 'AOV Increase', value: '+$42' },
      { label: 'Subscription Rate', value: '44%' }
    ]
  },
  {
    id: 'mastermind-luxury-funnel',
    title: 'Elite Mastermind & Private Retreat Funnel',
    category: 'coaching',
    categoryLabel: 'High-Ticket Funnel',
    designerTag: 'DESIGNED BY DARREN LEE',
    thumbnail: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81b30b99074f5ef6267258.png',
    fullImage: 'https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81b30b99074f5ef6267258.png',
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
    question: 'What is a funnel and why do I need one?',
    answer: 'A sales funnel is a step-by-step psychological process that guides potential customers through your offer—from initial awareness to final sale. Unlike a standard website with 20 distracting navigation links, a funnel focuses 100% of visitor attention on a single high-converting action (e.g., booking a call, buying a product, or claiming an audit).'
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
    question: 'What do you need from me to start?',
    answer: 'To kick off, all I need is your primary offer details, existing brand assets (logo, brand colors if any), and your target audience overview via a quick 5-minute onboarding questionnaire. If you have existing copy or a draft, we will refine it together.'
  },
  {
    question: 'What is your payment term?',
    answer: 'A standard 50% deposit is required to initiate the project and secure your build sprint on the calendar. The remaining 50% is due upon 100% completion and client sign-off. Payments are processed securely via Stripe or PayPal.'
  },
  {
    question: 'How much does it cost to build the funnel?',
    answer: 'Project investment starts at $500 for a focused single-page landing page redesign, scaling up based on multi-step funnels, custom copy, checkout upsells, and automation integrations. We discuss transparent, fixed pricing during your initial consultation.'
  },
  {
    question: 'Which funnel platforms do you work with?',
    answer: 'I specialize in GoHighLevel (GHL), ClickFunnels (2.0 & Classic), Systeme.io, WordPress with Elementor / Bricks Builder, Webflow, and Shopify. If your platform has custom CSS/HTML capabilities, I can build on it!'
  },
  {
    question: 'Do you write the copy or just do the design?',
    answer: 'Both! True conversion requires synergy between direct-response copy and visual hierarchy. I either write high-converting copy from scratch or surgically audit and optimize your existing copy for maximum punch and emotional resonance.'
  }
];
