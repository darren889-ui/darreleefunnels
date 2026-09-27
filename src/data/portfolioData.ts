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
    id: 'matthew-kimberley',
    client: 'Matthew Kimberley',
    niche: 'Marketing for Elite Coaches & Consultants',
    headline: 'Book Yourself Solid: Marketing for Coaches',
    metric: '+285% Application Rate',
    image: 'https://raw.githubusercontent.com/darren889-ui/profile-image/68d4bc8fbe4d868208bfff3182e9702bb99559cd/Redesign%20%232.png',
    beforeImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://raw.githubusercontent.com/darren889-ui/profile-image/68d4bc8fbe4d868208bfff3182e9702bb99559cd/Redesign%20%232.png',
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
    id: 'hair-salon-redesign',
    client: 'Luxe Hair Salon & Studio',
    niche: 'High-End Hair Salon & VIP Appointment Booking Funnel',
    headline: 'From Empty Chairs to Booked-Out Stylists: High-Ticket Hair Salon Redesign',
    metric: '+320% Online Bookings',
    image: '/images/b4-af-hair-salon.png',
    images: [
      '/images/b4-af-hair-salon.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/b4-af-hair-salon.png',
    beforePain: [
      'Outdated clunky booking widget that lost mobile visitors',
      'No visual showcase of premium transformations or stylist portfolio',
      'Hidden pricing causing high inquiry drop-off and price shoppers'
    ],
    afterGain: [
      'High-glamour luxury salon aesthetic with high-converting booking flow',
      'Interactive VIP consultation & stylist selection quiz',
      'Automated SMS deposit collection and reminder sequence reducing no-shows by 85%'
    ],
    details: 'Transformed an upscale hair salon’s online presence with an authority redesign that highlights dramatic hair transformations and fills appointment books on autopilot.',
    tags: ['Hair Salon', 'Appointment Booking', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'faceless-youtube',
    client: 'Tubepreneur Academy',
    niche: 'Digital Course & High-Volume Creator Funnel',
    headline: 'Build Profitable Faceless YouTube Channels & Scale to $10k/mo',
    metric: '4.9x ROAS on Meta Ads',
    image: 'https://raw.githubusercontent.com/darren889-ui/profile-image/68d4bc8fbe4d868208bfff3182e9702bb99559cd/redesign%20%237.png',
    beforeImg: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://raw.githubusercontent.com/darren889-ui/profile-image/68d4bc8fbe4d868208bfff3182e9702bb99559cd/redesign%20%237.png',
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
    image: 'https://raw.githubusercontent.com/darren889-ui/profile-image/46386ed5d801b250a36ca14cd09f4089d2289c2e/roof%20repair.png',
    beforeImg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://raw.githubusercontent.com/darren889-ui/profile-image/46386ed5d801b250a36ca14cd09f4089d2289c2e/roof%20repair.png',
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
    image: 'https://raw.githubusercontent.com/darren889-ui/profile-image/46386ed5d801b250a36ca14cd09f4089d2289c2e/Vanguard-compare.png',
    beforeImg: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://raw.githubusercontent.com/darren889-ui/profile-image/46386ed5d801b250a36ca14cd09f4089d2289c2e/Vanguard-compare.png',
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
    id: 'tuition-hero-redesign',
    client: 'Tuition Hero Academy',
    niche: 'Private Tutoring & Exam Mastery Enrollment Funnel',
    headline: 'Unlock Top Academic Scores With Vetted 1-on-1 Subject Specialists',
    metric: '+380% Student Enrollments',
    image: '/images/tuition-hero-b4-af.png',
    images: [
      '/images/tuition-hero-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/tuition-hero-b4-af.png',
    beforePain: [
      'Dull generic brochure website with wall of confusing subject text',
      'Zero tutor score credentials or parent video testimonials shown above fold',
      'Slow email inquiry form taking 48 hours for parent response'
    ],
    afterGain: [
      'High-energy academic authority aesthetic with parent proof metrics',
      'Interactive 30-second diagnostic matching tool by grade & syllabus',
      'Instant trial lesson booking with automated WhatsApp & SMS reminders'
    ],
    details: 'Re-engineered the complete student acquisition and parent enrollment funnel for Tuition Hero, dramatically lowering cost per student trial and accelerating enrollment velocity.',
    tags: ['Education & Tutoring', 'Enrollment Funnel', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'wealth-advisory',
    client: 'Vanguard Wealth Partners',
    niche: 'Private Wealth Management & Family Office',
    headline: 'Generational Wealth Preservation for High-Net-Worth Families',
    metric: '$4.2M Pipeline Generated',
    image: 'https://raw.githubusercontent.com/darren889-ui/profile-image/46386ed5d801b250a36ca14cd09f4089d2289c2e/redesign%20%238.png',
    beforeImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://raw.githubusercontent.com/darren889-ui/profile-image/46386ed5d801b250a36ca14cd09f4089d2289c2e/redesign%20%238.png',
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
  },
  {
    id: 'anytime-fitness-redesign',
    client: 'Anytime Fitness Redesign',
    niche: 'Fitness Franchise & High-Volume Membership Funnel',
    headline: 'Transforming Local Gym Traffic Into Consistent Monthly Memberships',
    metric: '+275% Member Signups',
    image: '/images/anytime-b4-af-all.png',
    images: [
      '/images/anytime-b4-af-all.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/anytime-b4-af-all.png',
    beforePain: [
      'Outdated corporate template with friction-heavy sign-up form',
      'Lacked clear local gym incentives or 7-day trial hooks',
      'Poor mobile optimization leading to 68% mobile drop-off'
    ],
    afterGain: [
      'High-energy, conversion-focused local membership landing page',
      'Frictionless 2-step VIP trial claim with instant SMS pass confirmation',
      'Social proof wall featuring real member before-and-after transformations'
    ],
    details: 'Complete funnel overhaul and membership acquisition system for Anytime Fitness, driving continuous local trial claims and paid member signups.',
    tags: ['Fitness Funnel', 'Membership Acquisition', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'nyc-consulting-redesign',
    client: 'NYC Strategic Advisory',
    niche: 'High-Ticket NYC Advisory & B2B Consulting Funnel',
    headline: 'Turn Complex Advisory Services Into High-Converting Inbound Pipelines',
    metric: '+415% Qualified Inquiries',
    image: '/images/nyc-b4-af.png',
    images: [
      '/images/nyc-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/nyc-b4-af.png',
    beforePain: [
      'Overly technical engineering jargon that confused executive buyers',
      'Zero interactive proof demonstrations or executive client roadmap',
      'Cold generic contact form with high friction and poor conversion'
    ],
    afterGain: [
      'High-impact dark luxury executive aesthetic with sleek visual breakdown',
      'Interactive executive consultation roadmap and authority proof layout',
      'Frictionless executive discovery audit booking flow'
    ],
    details: 'Engineered a high-converting conversion funnel and landing page redesign for NYC-based advisory, turning high-value traffic into vetted client consultations.',
    tags: ['NYC Consulting', 'B2B Sales Funnel', 'GoHighLevel', 'Conversion Redesign']
  },
  {
    id: 'e-coach-transformation',
    client: 'Elena Rostova Executive Coaching',
    niche: 'High-Ticket Female Founder & Executive Mentorship',
    headline: 'Scale to 7-Figures With Predictable High-Ticket Client Acquisition',
    metric: '+360% Strategy Call Bookings',
    image: '/images/e-coach-b4-af.png',
    images: [
      '/images/e-coach-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/e-coach-b4-af.png',
    beforePain: [
      'Disjointed brand presence failing to reflect high-ticket authority',
      'No pre-qualification mechanism resulting in tire-kickers and low show-up rates',
      'Unoptimized mobile funnel causing massive drop-off from paid social campaigns'
    ],
    afterGain: [
      'Prestigious dark luxury aesthetic with bold editorial social proof banners',
      'Interactive 3-tier qualification questionnaire with automated booking',
      'Seamless calendar scheduling delivering 89% qualified show-up rate'
    ],
    details: 'Complete positioning overhaul and funnel redesign for an elite executive coach, converting organic social followers and paid ads into vetted 5-figure coaching clients.',
    tags: ['Executive Coaching', 'High-Ticket Funnel', 'GoHighLevel', 'Authority Design']
  },
  {
    id: 'vo-hero-studio',
    client: 'VO Hero Audio Academy',
    niche: 'Voiceover Artist Training & Creative Masterclass Funnel',
    headline: 'From Home Studio to Professional Voiceover Contracts',
    metric: '4.8x Meta Ad ROAS',
    image: '/images/vo-hero-b4-af.png',
    images: [
      '/images/vo-hero-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/vo-hero-b4-af.png',
    beforePain: [
      'Outdated sales page with weak audio sample players and low trust',
      'No clear student audio transformation demos or industry proof badges',
      'Single-tier checkout with zero average order value optimization'
    ],
    afterGain: [
      'Cinematic studio dark-mode layout with instant interactive audio previews',
      'Visual breakdown of the home studio launch framework',
      'High-converting 2-step checkout with equipment bundle order bumps'
    ],
    details: 'Engineered a cinematic direct-response VSL and enrollment funnel for an elite voiceover academy, dramatically lowering customer acquisition cost and boosting front-end margins.',
    tags: ['Creative Academy', 'VSL Funnel', 'ClickFunnels 2.0', 'Audio UX']
  },
  {
    id: 'childcare-aware-redesign',
    client: 'Child Care Aware & Early Learning',
    niche: 'Early Childhood Education & Family Enrollment Funnel',
    headline: 'Connecting Families With Trusted Early Child Care & Preschool Learning',
    metric: '+290% Parent Inquiries',
    image: '/images/childcare-aware.png',
    images: [
      '/images/childcare-aware.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/childcare-aware.png',
    beforePain: [
      'Dense regulatory text and confusing state subsidy eligibility forms',
      'No warm visual tour of learning centers or teacher safety credentials',
      'High abandonment rate on standard multi-page enrollment application'
    ],
    afterGain: [
      'Warm family-first welcoming aesthetic with clear accreditation badges',
      'Interactive 3-step childcare subsidy eligibility calculator',
      'Frictionless virtual campus tour and enrollment schedule reservation'
    ],
    details: 'Re-architected the parent onboarding and enrollment funnel for early learning networks, providing clarity, building immediate trust, and accelerating enrollment cycles.',
    tags: ['Education & Childcare', 'Enrollment Funnel', 'GoHighLevel', 'Lead Qualification']
  },
  {
    id: 'inspire-fitness-redesign',
    client: 'Inspire Fitness Studio',
    niche: 'Boutique Fitness & High-Value Personal Training Funnel',
    headline: 'Pack Group Classes & High-Ticket Training Memberships On Autopilot',
    metric: '+340% VIP Trial Claims',
    image: '/images/inspire-fitness-b4-af.png',
    images: [
      '/images/inspire-fitness-b4-af.png'
    ],
    beforeImg: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
    afterImg: '/images/inspire-fitness-b4-af.png',
    beforePain: [
      'Generic gym template with uninspired stock workout photography',
      'No clear transformation stories, coach credentials, or local community feel',
      'Complicated multi-step registration causing 78% mobile drop-off'
    ],
    afterGain: [
      'High-energy neon athletic aesthetic with bold member transformation proof',
      'Interactive 14-day VIP pass voucher claim with instant SMS delivery',
      'Automated onboarding sequence increasing trial-to-membership conversion to 46%'
    ],
    details: 'Complete brand positioning and membership acquisition funnel overhaul for Inspire Fitness, scaling paid ad efficiency and filling studio group sessions consistently.',
    tags: ['Fitness Funnel', 'Membership Acquisition', 'GoHighLevel', 'Conversion Redesign']
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
    answer: 'The cost vary depand on the scope of the project, such as number of pages, scaling up based on multi-step funnels, checkout upsells, and automation integrations. We discuss transparent, will know what exactly included before we start.'
  }
];
