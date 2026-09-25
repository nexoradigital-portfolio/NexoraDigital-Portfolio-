/**
 * NEXORA DIGITAL - Personal Portfolio Data
 * Female Web Developer & Digital Marketing Strategist
 * 
 * Strict Palette: Black (#050505, #0B0B0B, #111111) + White (#FFFFFF, #F5F5F5) + Green (#A4C639, #B5D334, #607A16)
 * No blue, no purple, no pink, no orange.
 */

import heroPortrait from "../assets/images/founder_portrait_1790159530365.jpg";
import aboutWorkspace from "../assets/images/regenerated_image_1790224806664.jpg";
import mockupNexora from "../assets/images/mockup_nexora_business_1790154001083.jpg";
import mockupLumina from "../assets/images/mockup_lumina_ecommerce_1790154022228.jpg";
import mockupGreenEdge from "../assets/images/mockup_greenedge_digital_1790154039310.jpg";
import mockupFinova from "../assets/images/mockup_finova_fintech_1790154060834.jpg";
import mockupVista from "../assets/images/mockup_vista_social_1790154079612.jpg";
import mockupOrbit from "../assets/images/mockup_orbit_seo_1790154096483.jpg";

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  client: string;
  year: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  impact: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  highlightMetric?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const PERSONAL_PROFILE = {
  fullName: "Bisma Imran",
  brandName: "NEXORA DIGITAL",
  roleTitle: "Web Developer & Digital Marketer",
  heroHeading: "Building Digital Experiences That Grow Businesses.",
  heroSubHeading: "I Build Websites. I Grow Brands.",
  heroSupportingText:
    "Hi, I'm Bisma Imran. I specialize in building modern, high-performance websites and crafting digital marketing strategies that help brands grow online.",
  
  aboutHeading: "More Than Code. I Build Websites & Digital Growth.",
  aboutDescription:
    "I'm Bisma Imran, a Web Developer and Digital Marketer. I combine modern engineering, intuitive UI/UX design, and commercial marketing strategies to build digital experiences that look exceptional and achieve real business goals.",
  aboutStory:
    "With a dual focus on engineering robust web applications and creating high-converting acquisition campaigns, I bridge the gap between technical code and measurable commercial traction. Every website I build is engineered for speed, responsiveness, and conversion impact.",
  
  brandStatement: {
    lead: "Code. Create. Grow.",
    body: "I don't just build websites. I create digital experiences designed to help brands move forward.",
  },

  images: {
    heroPortrait: heroPortrait,
    aboutWorkspace: aboutWorkspace,
  },

  contact: {
    email: "nexoradigital1143@gmail.com",
    phone: "03152955520",
    phoneTel: "+923152955520",
    whatsappUrl: "https://wa.me/923152955520",
    location: "Global Remote / Available Worldwide",
    availability: "Available for new projects & retainers",
  },

  socialLinks: [
    { name: "LinkedIn", label: "LinkedIn", url: "https://www.linkedin.com/in/narmeen-imran-391335413/" },
    { name: "Instagram", label: "Instagram", url: "https://www.instagram.com/bismyy2026?stkn=MTAwdXc0c3M0dnJ6Yw==" },
    { name: "Facebook", label: "Facebook", url: "https://www.facebook.com/share/1Gj6PXoMUQ/" },
  ],
};

// 4 Floating Hero Information Cards
export const HERO_FLOATING_CARDS = [
  {
    number: "01",
    title: "WEB DEVELOPMENT",
    detail: "Modern responsive websites",
    icon: "Code",
  },
  {
    number: "02",
    title: "DIGITAL MARKETING",
    detail: "Strategies that grow brands",
    icon: "TrendingUp",
  },
  {
    number: "03",
    title: "UI / UX",
    detail: "Clean and engaging experiences",
    icon: "Layout",
  },
  {
    number: "04",
    title: "WORDPRESS",
    detail: "Custom themes & robust CMS",
    icon: "Layers",
  },
];

// About Highlight Cards (Focused, non-repetitive core strengths)
export const ABOUT_PILLARS = [
  { title: "Clean Engineering", subtitle: "Fast, semantic, mobile-first web applications", icon: "Code2" },
  { title: "Growth Marketing", subtitle: "Targeted campaigns, SEO & measurable ROI", icon: "TrendingUp" },
  { title: "User-Centered UX", subtitle: "Intuitive layouts designed to convert visitors", icon: "Palette" },
  { title: "End-to-End Delivery", subtitle: "From initial concept to launch and ongoing growth", icon: "Rocket" },
];

// Skills Structure
export const SKILLS_DATA = {
  webDevelopment: {
    category: "WEB DEVELOPMENT",
    description: "Modern, scalable architectures built with clean code and high performance standards.",
    skills: [
      { name: "HTML", tag: "Markup Architecture" },
      { name: "CSS", tag: "Tailwind & Modern Layouts" },
      { name: "JavaScript", tag: "ES6+ Logic" },
      { name: "React", tag: "Component State Systems" },
      { name: "WordPress", tag: "Custom Themes & CMS" },
      { name: "Responsive Design", tag: "Mobile-First UX" },
      { name: "UI/UX", tag: "Design Systems & Wireframes" },
      { name: "Website Optimization", tag: "Core Web Vitals & Speed" },
    ],
  },
  digitalMarketing: {
    category: "DIGITAL MARKETING",
    description: "Data-backed acquisition, conversion optimization, and sustainable audience expansion.",
    skills: [
      { name: "Social Media Marketing", tag: "Organic & Paid Growth" },
      { name: "Content Strategy", tag: "Editorial Direction" },
      { name: "Brand Strategy", tag: "Positioning & Messaging" },
      { name: "Google Ads", tag: "High-Intent Search PPC" },
      { name: "Meta Ads", tag: "Audience Retargeting" },
      { name: "Analytics", tag: "GA4, GTM & Funnel Metrics" },
      { name: "Brand Growth", tag: "Positioning & Messaging" },
      { name: "Lead Generation", tag: "Conversion Funnels" },
    ],
  },
};

// 6 Services Cards
export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    number: "01",
    title: "Website Development",
    description: "Modern, responsive and performance-focused websites built for businesses and brands.",
    deliverables: ["Custom Frontend Engineering", "Fast Page Speeds (<1s)", "Cross-Browser Compatibility", "Mobile-First Layouts"],
    icon: "Code",
  },
  {
    id: "wordpress-dev",
    number: "02",
    title: "WordPress Development",
    description: "Professional WordPress websites with clean layouts, responsive design and easy management.",
    deliverables: ["Custom Theme Building", "WooCommerce Integration", "Easy Admin Dashboard", "Security Hardening"],
    icon: "Layers",
  },
  {
    id: "digital-marketing",
    number: "03",
    title: "Digital Marketing",
    description: "Strategic digital campaigns designed to increase visibility, engagement and conversions.",
    deliverables: ["Full-Funnel Campaigns", "PPC Ad Management", "Conversion Rate Audits", "Audience Targeting"],
    icon: "TrendingUp",
  },
  {
    id: "brand-strategy",
    number: "04",
    title: "Brand & Content Strategy",
    description: "Strategic messaging, content positioning, and brand storytelling that captivates and converts audiences.",
    deliverables: ["Brand Positioning & Tone", "Content Marketing Strategy", "Audience Engagement Funnels", "Conversion Copywriting"],
    icon: "Sparkles",
  },
  {
    id: "social-media",
    number: "05",
    title: "Social Media Marketing",
    description: "Creative social strategies that help brands connect with the right audience.",
    deliverables: ["Multi-Platform Campaigns", "High-Engagement Visuals", "Content Calendars", "Audience Community Growth"],
    icon: "Share2",
  },
  {
    id: "ui-ux",
    number: "06",
    title: "UI/UX Design",
    description: "Clean and intuitive interfaces designed around users and business goals.",
    deliverables: ["Wireframing & Prototyping", "Design Systems in Figma", "User Journey Mapping", "Interactive Micro-Interactions"],
    icon: "Layout",
  },
];

// 6 Selected Projects
export const PROJECTS: ProjectItem[] = [
  {
    id: "nexora-business",
    number: "01",
    title: "NEXORA Business Website",
    category: "Web Development",
    description: "Flagship corporate website featuring an ultra-modern dark aesthetic, responsive architecture, and dynamic project showcases.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Performance Optimization"],
    image: mockupNexora,
    client: "NEXORA DIGITAL",
    year: "2026",
    metrics: [
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Bounce Rate Reduction", value: "-42%" },
      { label: "Lead Inquiries", value: "+185%" },
    ],
    challenge: "Deliver a high-impact corporate website that unites web development rigor with digital marketing positioning under strict brand guidelines.",
    solution: "Engineered a headless SPA with modular components, dark and light alternating contrast, zero layout shift, and instant inquiry workflows.",
    impact: "Elevated brand prestige, doubling client conversion rates within the first 30 days of release.",
  },
  {
    id: "lumina-ecommerce",
    number: "02",
    title: "LUMINA E-Commerce",
    category: "Website + UI/UX",
    description: "Minimalist luxury retail experience with seamless product discovery, intuitive checkout flows, and responsive mobile architecture.",
    technologies: ["WordPress", "WooCommerce", "Figma UI/UX", "Tailwind CSS", "Stripe API"],
    image: mockupLumina,
    client: "Lumina Lifestyle",
    year: "2026",
    metrics: [
      { label: "Checkout Conversion", value: "+38%" },
      { label: "Average Order Value", value: "+24%" },
      { label: "Mobile Page Load", value: "0.8s" },
    ],
    challenge: "The previous store suffered from high cart abandonment on mobile devices and cluttered navigation that confused shoppers.",
    solution: "Redesigned the entire user journey with clean editorial white space, sticky 1-tap checkout, and lightning-fast product filtering.",
    impact: "Turned mobile traffic into the primary revenue driver, exceeding annual sales goals by 140%.",
  },
  {
    id: "greenedge-digital",
    number: "03",
    title: "GREENEDGE DIGITAL",
    category: "Digital Marketing",
    description: "Comprehensive multi-channel digital growth engine combining high-intent Google Ads, retargeting funnels, and real-time analytics.",
    technologies: ["Google Ads", "Meta Ads", "GA4 Analytics", "Conversion Copywriting", "GTM Tracking"],
    image: mockupGreenEdge,
    client: "GreenEdge Solutions",
    year: "2025",
    metrics: [
      { label: "Return on Ad Spend (ROAS)", value: "4.8x" },
      { label: "Cost Per Acquisition", value: "-34%" },
      { label: "Qualified Pipeline", value: "$1.4M" },
    ],
    challenge: "High cost-per-lead and poor attribution visibility across fragmented marketing channels.",
    solution: "Built a consolidated tracking stack with custom UTM attribution, negative keyword optimization, and high-converting landing pages.",
    impact: "Delivered a record 4.8x ROAS while lowering overall acquisition spend.",
  },
  {
    id: "finova-fintech",
    number: "04",
    title: "FINOVA",
    category: "Fintech Website",
    description: "Next-generation digital banking web application with interactive investment calculators and enterprise-grade UI security standards.",
    technologies: ["React", "JavaScript", "Responsive UI", "Tailwind CSS", "Data Visualizations"],
    image: mockupFinova,
    client: "Finova Technologies",
    year: "2025",
    metrics: [
      { label: "Monthly Active Users", value: "85,000+" },
      { label: "Session Duration", value: "+55%" },
      { label: "App Signups", value: "+210%" },
    ],
    challenge: "Communicating complex financial instruments to everyday consumers in an accessible, trust-inspiring format.",
    solution: "Crafted intuitive interactive charts, streamlined onboarding modals, and crisp responsive tables.",
    impact: "Secured over 85,000 verified user accounts within the initial four months post-launch.",
  },
  {
    id: "vista-social",
    number: "05",
    title: "VISTA SOCIAL",
    category: "Social Media Marketing",
    description: "Content strategy and community growth campaign built to cultivate high-intent engagement across Instagram and LinkedIn.",
    technologies: ["Content Strategy", "Meta Business Suite", "Graphic Design", "Video Campaigns", "Audience Growth"],
    image: mockupVista,
    client: "Vista Collective",
    year: "2025",
    metrics: [
      { label: "Organic Reach", value: "450K+" },
      { label: "Engagement Rate", value: "6.2%" },
      { label: "Inbound DMs / Leads", value: "320+" },
    ],
    challenge: "Low algorithmic engagement and inconsistent visual presence across disparate social platforms.",
    solution: "Developed an authoritative aesthetic playbook, carousel education formats, and active community conversation workflows.",
    impact: "Grew verified follower base from 3,000 to over 38,000 active subscribers organically.",
  },
  {
    id: "orbit-campaign",
    number: "06",
    title: "ORBIT CLOUD PLATFORM",
    category: "Web & Brand Campaign",
    description: "Full-stack cloud portal web application and multi-channel acquisition strategy for an enterprise cloud management startup.",
    technologies: ["React", "Tailwind CSS", "Brand Strategy", "Campaign Analytics", "UX Prototyping"],
    image: mockupOrbit,
    client: "Orbit Cloud Solutions",
    year: "2025",
    metrics: [
      { label: "Demo Sign-ups", value: "+280%" },
      { label: "User Retention", value: "92%" },
      { label: "Lead Inquiries", value: "450+/mo" },
    ],
    challenge: "The client struggled with conveying a complex cloud management product and had low conversion rates on demo sign-ups.",
    solution: "Crafted a high-converting web presence, interactive feature walk-throughs, and an integrated inbound digital marketing campaign.",
    impact: "Surpassed target qualified demo sign-ups by 280% within the initial 90 days following rollout.",
  },
];

// Experience / Statistics (Demo information, easy to replace)
export const STATISTICS = [
  {
    value: "30+",
    label: "Brands Supported",
    description: "Startups, enterprises, and businesses scaled across modern web and digital channels.",
  },
  {
    value: "3+",
    label: "Years Experience",
    description: "Specialized in responsive web engineering and full-funnel digital marketing.",
  },
  {
    value: "95%",
    label: "Client Satisfaction",
    description: "Long-term client relationships and verified positive project milestones.",
  },
];

// 5 Process Steps
export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    summary: "Understand the business and goals.",
    description: "We begin with a deep dive into your vision, target audience, competitive landscape, and key conversion metrics.",
  },
  {
    number: "02",
    title: "Plan",
    summary: "Create the strategy and digital direction.",
    description: "Mapping site architecture, technical stack, wireframes, and marketing funnel strategy before writing code.",
  },
  {
    number: "03",
    title: "Design",
    summary: "Create the visual experience.",
    description: "Crafting modern, intuitive, and brand-aligned interfaces that captivate visitors and establish immediate credibility.",
  },
  {
    number: "04",
    title: "Develop",
    summary: "Build the website or digital solution.",
    description: "Writing clean, semantic, performance-optimized code with responsive mobile-first execution and SEO best practices.",
  },
  {
    number: "05",
    title: "Grow",
    summary: "Optimize through marketing, SEO and analytics.",
    description: "Continuous optimization through targeted ad campaigns, technical SEO, and conversion analytics to drive compounding ROI.",
  },
];

// Testimonials (Demo data, easily replaceable)
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "sarah-khan",
    quote: "She understood exactly what our brand needed and turned the idea into a website that feels modern and professional.",
    author: "Sarah Khan",
    role: "Founder",
    company: "Lumina",
    rating: 5,
    highlightMetric: "+38% Sales Surge",
  },
  {
    id: "ayesha-malik",
    quote: "Her combination of web development and digital marketing made the entire project much more effective.",
    author: "Ayesha Malik",
    role: "Business Owner",
    company: "Malik Interiors",
    rating: 5,
    highlightMetric: "4.8x Campaign ROAS",
  },
  {
    id: "hamza-ahmed",
    quote: "The website looks great, performs smoothly and has helped us create a much stronger online presence.",
    author: "Hamza Ahmed",
    role: "Founder",
    company: "Vertex",
    rating: 5,
    highlightMetric: "Sub-second Speed",
  },
];

// Frequently Asked Questions
export const FAQS: FaqItem[] = [
  {
    question: "How do your web development and digital marketing services work together?",
    answer: "Unlike traditional developers who only write code, or marketers who can't build websites, I bring both together. Your website is architected from day one with technical SEO, conversion funnels, and analytics tracking baked in directly.",
    category: "General",
  },
  {
    question: "What is your typical turnaround time for a website project?",
    answer: "Most custom business websites and landing page systems are designed, developed, and deployed within 2 to 4 weeks. Larger e-commerce or custom web applications typically range from 4 to 8 weeks.",
    category: "Process",
  },
  {
    question: "Do you offer ongoing digital marketing and SEO support after launch?",
    answer: "Yes! Many clients continue working on a monthly retainer covering ongoing technical SEO audits, Google & Meta Ads management, content updates, and monthly performance reporting.",
    category: "Services",
  },
  {
    question: "Can I manage and update my website myself after completion?",
    answer: "Absolutely. I provide clean admin dashboards (e.g., WordPress or intuitive CMS setups) and full recorded video walkthroughs so your team can easily update content, images, and products.",
    category: "Handoff",
  },
];
