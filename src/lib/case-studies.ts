export type CaseStudyMeta = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  eyebrow: string;
  lede: string;
  accent: "pink" | "teal" | "amber";
  meta: CaseStudyMeta[];
  /** Path under /public/work/<slug>/..., drop real screenshots here later */
  heroImage: string;
  problem: {
    title: string;
    body: string;
  };
  decisions: {
    title: string;
    body: string;
  }[];
  gallery: {
    src: string;
    caption: string;
  }[];
  demonstrates: string[];
  reflection: string;
};

/**
 * Lighter-weight entry for projects shown as a gallery card only, no
 * dedicated case study page. Per the original portfolio plan: these are
 * real, shipped projects that don't need the full problem/decisions/
 * reflection breakdown to earn their place in the work section.
 */
export type GalleryProject = {
  slug: string;
  name: string;
  category: string;
  blurb: string;
  liveUrl?: string;
  accent: "pink" | "teal" | "amber";
  /** Path under /public/work/<slug>/..., drop a real screenshot here later */
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "myphi",
    name: "MyPHI",
    category: "Healthcare",
    eyebrow: "Case study",
    lede: "An AI medical visit transcriptor and documentation platform, recording, transcription, and understanding for patients, privately and on their own terms.",
    accent: "teal",
    meta: [
      { label: "Role", value: "UI/UX Designer (Solo)" },
      { label: "Surfaces", value: "Mobile · Desktop · Watch · WhatsApp · Admin · Site" },
      { label: "Timeline", value: "January 2026" },
      { label: "Status", value: "Production-ready" },
    ],
    heroImage: "/work/myphi/hero.jpg",
    problem: {
      title: "Patients forget what their doctor said within minutes.",
      body: "Medical visits move fast, and the information that matters most, dosages, follow-ups, warning signs, gets lost the moment a patient walks out the door. MyPHI needed to capture, transcribe, and explain a visit back to the patient in plain language, without ever feeling like surveillance.",
    },
    decisions: [
      {
        title: "Consent before capture, every time",
        body: "Recording starts only after an explicit, visible consent step, never silently in the background. Trust had to be designed first, function second.",
      },
      {
        title: "Six surfaces, one mental model",
        body: "Mobile, desktop, watch, WhatsApp, admin and the marketing site all needed to feel like the same product, scaled differently, not six different apps.",
      },
    ],
    gallery: [
      { src: "/work/myphi/01.jpg", caption: "Visit capture flow" },
      { src: "/work/myphi/02.jpg", caption: "Transcript review" },
      { src: "/work/myphi/03.jpg", caption: "Admin dashboard" },
    ],
    demonstrates: [
      "Designing for trust in a sensitive, regulated context",
      "Cross-surface system thinking (6 distinct platforms)",
      "Translating clinical language into plain patient language",
    ],
    reflection: "The hardest part wasn't the interface, it was earning the right to record someone's most vulnerable conversations and proving, visually, that the product respected that.",
  },
  {
    slug: "bitwayne",
    name: "Bitwayne",
    category: "Fintech super-app",
    eyebrow: "Case study",
    lede: "A fintech super-app that collapses payments, crypto, procurement, bills, gift cards and betting into one wallet, one balance, one PIN, one receipt format.",
    accent: "amber",
    meta: [
      { label: "Role", value: "UI/UX Designer (Solo)" },
      { label: "Scope", value: "200+ screens · 11 verticals" },
      { label: "Platform", value: "Mobile (iOS / Android)" },
      { label: "Status", value: "Production-ready" },
    ],
    heroImage: "/work/bitwayne/hero.jpg",
    problem: {
      title: "Eleven financial verticals, eleven different mental models.",
      body: "Crypto trading doesn't feel like paying a bill. Betting doesn't feel like procurement. Bitwayne needed all eleven to live under one roof without the product fracturing into eleven different apps glued together.",
    },
    decisions: [
      {
        title: "One receipt format, everywhere",
        body: "Every transaction, crypto swap, bill payment, bet settlement, resolves to the exact same receipt layout. Users learn the pattern once.",
      },
      {
        title: "Progressive disclosure for power users",
        body: "Casual users see a simple wallet. Power users can drill into crypto charts and procurement ledgers without the simple view ever feeling cluttered.",
      },
    ],
    gallery: [
      { src: "/work/bitwayne/01.jpg", caption: "Buy crypto flow" },
      { src: "/work/bitwayne/02.jpg", caption: "Buy electricity flow" },
      { src: "/work/bitwayne/03.jpg", caption: "Procurement flow" },
      { src: "/work/bitwayne/04.jpg", caption: "KYC flow" },
      { src: "/work/bitwayne/05.jpg", caption: "Review flow" },
    ],
    demonstrates: [
      "Unifying disparate financial verticals into one design language",
      "Information architecture at scale (200+ screens)",
      "Designing for both novice and power users simultaneously",
    ],
    reflection: "The system only worked once we stopped designing eleven products and started designing one verb: move money, then asked what changes per context.",
  },
  {
    slug: "civicx",
    name: "CivicX Ecosystem",
    category: "Civic tech",
    eyebrow: "Case study",
    lede: "A three-app civic ecosystem, Citizen, Officer and Vendor, plus a landing page. See something, report it, get it resolved, and get rewarded for being the kind of citizen who speaks up.",
    accent: "pink",
    meta: [
      { label: "Role", value: "UI/UX Designer (Solo)" },
      { label: "Scope", value: "250+ screens · 4 products" },
      { label: "Platform", value: "Mobile (×3) + Web" },
      { label: "Status", value: "Ready-for-dev" },
    ],
    heroImage: "/work/civicx/hero.jpg",
    problem: {
      title: "Civic reporting tools die because nobody sees the loop close.",
      body: "Citizens report problems into a void and stop reporting. Officers get reports with no triage and burn out. CivicX needed all three roles to see the same incident move visibly from reported to resolved.",
    },
    decisions: [
      {
        title: "Status visibility as the core retention mechanic",
        body: "Every report shows a live status the citizen can watch change. Seeing progress is what keeps people reporting.",
      },
      {
        title: "Three apps, one shared incident model",
        body: "Citizen, Officer and Vendor all read and write to the same incident object, just through radically different UI suited to each role's urgency and context.",
      },
    ],
    gallery: [
      { src: "/work/civicx/01.jpg", caption: "Citizen report flow" },
      { src: "/work/civicx/02.jpg", caption: "Officer flow" },
      { src: "/work/civicx/03.jpg", caption: "Vendor coupon flow" },
      { src: "/work/civicx/04.jpg", caption: "SOS flow" },
      { src: "/work/civicx/05.jpg", caption: "Withdraw flow" },
    ],
    demonstrates: [
      "Multi-role product design from one shared data model",
      "Designing for trust and follow-through in civic systems",
      "Large-scale IA across 4 connected products",
    ],
    reflection: "The breakthrough was realizing the citizen app wasn't the product, the resolution loop across all three roles was the product.",
  },
  {
    slug: "precious-house",
    name: "The Precious House",
    category: "AI-native build",
    eyebrow: "Case study, AI-native build",
    lede: "A complete church membership and attendance management system, deployed, live, real members. Seven Supabase tables. Seven pages. Fifteen modals. Two hundred and nineteen functions. One HTML file.",
    accent: "amber",
    meta: [
      { label: "Role", value: "Designer · Architect · Builder" },
      { label: "Stack", value: "Claude AI · Supabase · Vercel" },
      { label: "Platform", value: "Web PWA (single HTML file)" },
      { label: "Status", value: "Live · Real users" },
    ],
    heroImage: "/work/precious-house/hero.jpg",
    problem: {
      title: "A growing church was still tracking attendance on paper.",
      body: "Membership data lived in notebooks and group leaders' memories. There was no way to see attendance trends, follow up on absences, or run reports without manually counting paper sheets.",
    },
    decisions: [
      {
        title: "PIN-based check-in over app downloads",
        body: "Members shouldn't need to install anything. A 4-digit PIN at a kiosk is faster and more inclusive than asking every member to download an app.",
      },
      {
        title: "Single-file architecture for zero-friction deployment",
        body: "Built as one self-contained HTML file connected to Supabase, meaning updates ship instantly with no build pipeline, hosting complexity, or app store review.",
      },
    ],
    gallery: [
      { src: "/work/precious-house/01.jpg", caption: "Check-in kiosk flow" },
      { src: "/work/precious-house/02.jpg", caption: "Member registry" },
      { src: "/work/precious-house/03.jpg", caption: "Attendance reporting" },
    ],
    demonstrates: [
      "End-to-end ownership: design, architecture, and shipped code",
      "AI-native development at production quality",
      "Designing for real-world, low-tech-literacy users",
    ],
    reflection: "This is the project that proved AI-assisted building isn't a shortcut, it's a multiplier, if the design thinking underneath is solid.",
  },
  {
    slug: "zylogics",
    name: "Zylogics",
    category: "Brand → build",
    eyebrow: "Case study",
    lede: "Brand identity rebuilt from scratch, seven-page website designed in Figma, and live WordPress site, by one person. Logo to live, no handoff gap.",
    accent: "teal",
    meta: [
      { label: "Role", value: "Brand · UI/UX · WordPress Dev" },
      { label: "Scope", value: "Brand identity · 7 pages · live site" },
      { label: "Timeline", value: "Completed Feb 2025" },
      { label: "Status", value: "Built, deployed, live" },
    ],
    heroImage: "/work/zylogics/hero.jpg",
    problem: {
      title: "A new identity, with no one to hand it off to.",
      body: "Zylogics needed a brand that signaled technical credibility from day one, and there was no separate development team waiting to receive a handoff file. The designer had to also be the builder.",
    },
    decisions: [
      {
        title: "Design system built for direct WordPress translation",
        body: "Every component in Figma was scoped to map cleanly onto a WordPress block or template, removing the usual translation loss between design and build.",
      },
      {
        title: "Logo-to-live in one continuous process",
        body: "No separate brand phase and web phase, typography, color, and layout decisions were tested directly in the live site as they were made.",
      },
    ],
    gallery: [
      { src: "/work/zylogics/brand-01.jpg", caption: "Logo construction" },
      { src: "/work/zylogics/brand-02.jpg", caption: "Brand collateral, tie & apparel" },
      { src: "/work/zylogics/brand-03.jpg", caption: "Stationery system" },
      { src: "/work/zylogics/brand-04.jpg", caption: "Business cards & logo variants" },
      { src: "/work/zylogics/brand-05.jpg", caption: "Brand colors & typography" },
      { src: "/work/zylogics/01.jpg", caption: "Brand identity system" },
      { src: "/work/zylogics/02.jpg", caption: "Homepage design" },
      { src: "/work/zylogics/03.jpg", caption: "Live WordPress build" },
      { src: "/work/zylogics/04.jpg", caption: "Site detail" },
    ],
    demonstrates: [
      "Full-cycle ownership from brand identity through deployment",
      "Designing systems that translate cleanly into a CMS",
      "Solo execution at agency-level scope",
    ],
    reflection: "Doing the brand and the build myself meant no decision ever got lost in translation, what I designed is exactly what shipped.",
  },
  {
    slug: "durian",
    name: "Durian Foundation",
    category: "Repositioning",
    eyebrow: "Case study",
    lede: "Repositioning a rural development organisation from charity to systems architect, brand direction, 15+ page templates, custom 3D icon system, and a live WordPress build at durian.org.ng.",
    accent: "pink",
    meta: [
      { label: "Role", value: "UX Strategist · UI Designer · Dev" },
      { label: "Scope", value: "15+ page templates · 3D icon system" },
      { label: "Platform", value: "WordPress · Figma" },
      { label: "Live", value: "durian.org.ng" },
    ],
    heroImage: "/work/durian/hero.jpg",
    problem: {
      title: "Durian looked like a charity asking for help, not an organisation building systems.",
      body: "The existing brand and site read as a fundraising appeal, but the organisation's actual work was systemic rural development. The visual language needed to reposition them as architects, not askers.",
    },
    decisions: [
      {
        title: "3D icon system over stock photography",
        body: "Custom-built 3D icons replaced generic charity stock imagery, signaling specificity and craft rather than borrowed visual language.",
      },
      {
        title: "Template architecture for 15+ page types",
        body: "Rather than one-off pages, a reusable template system was built so future content additions stay visually consistent without new design work.",
      },
    ],
    gallery: [
      { src: "/work/durian/01.jpg", caption: "Page design" },
      { src: "/work/durian/02.jpg", caption: "Page templates" },
    ],
    demonstrates: [
      "Strategic repositioning through visual design",
      "Building scalable template systems for non-technical teams",
      "Custom illustration/icon systems as brand differentiation",
    ],
    reflection: "The real deliverable wasn't a website, it was a new way for Durian to be taken seriously by funders and partners.",
  },
];

/**
 * Projects shown as gallery cards only, real, shipped work that rounds
 * out the portfolio without needing a dedicated case study page.
 */
export const galleryProjects: GalleryProject[] = [
  {
    slug: "civicx-website",
    name: "CivicX Technologies",
    category: "Corporate website",
    blurb: "A government-facing civic tech company's website, redesigned to carry the weight of work I'd already designed for their products, real screenshots, real capability claims, built for institutional buyers.",
    liveUrl: "civicxtech.com",
    accent: "teal",
    image: "/work/civicx-website/cover.jpg",
  },
  {
    slug: "applied-wisdom",
    name: "Applied Wisdom Solutions",
    category: "Wix build · assessment tool",
    blurb: "A faith-led consulting firm's website, plus a 12-question scored organizational assessment with conditional logic and automated email classification, a full lead-qualification funnel built into a form.",
    liveUrl: "appliedwisdomsolutions.com",
    accent: "amber",
    image: "/work/applied-wisdom/cover.jpg",
  },
  {
    slug: "wgh-nigeria",
    name: "Women in Global Health Nigeria",
    category: "WordPress · infrastructure",
    blurb: "Full site design and WordPress build for a national health-equity advocacy movement, plus the unglamorous parts: DNS configuration, custom team email, and a complete SEO indexing pipeline.",
    liveUrl: "wghnigeria.ng",
    accent: "pink",
    image: "/work/wgh-nigeria/cover.jpg",
  },
  {
    slug: "graceland-healthcare",
    name: "Graceland Healthcare Services",
    category: "Brand · WordPress · SEO",
    blurb: "A UK home healthcare provider's brand and website, written and designed for a reader who's scared and trying to make a decision they can live with, plus full regulated-market SEO.",
    liveUrl: "gracelandhealthcareservices.co.uk",
    accent: "teal",
    image: "/work/graceland-healthcare/cover.jpg",
  },
  {
    slug: "solformis",
    name: "Solformis",
    category: "Brand · pre-launch SaaS",
    blurb: "Logo reconstruction and a three-breakpoint landing page for a pre-launch compliance-automation startup in life sciences, built to earn trust before there were any case studies to point to.",
    liveUrl: "solformis.com",
    accent: "pink",
    image: "/work/solformis/cover.jpg",
  },
  {
    slug: "agility-autos",
    name: "Agility Autos",
    category: "Brand · WooCommerce",
    blurb: "A dealer-only vehicle wholesaler in New Zealand, WooCommerce stripped of every checkout and payment feature, rebuilt as a private catalog and quote-request engine for verified dealers only.",
    liveUrl: "agilityautos.co.nz",
    accent: "amber",
    image: "/work/agility-autos/cover.jpg",
  },
  {
    slug: "weekr",
    name: "Weekr",
    category: "AI-native build",
    blurb: "A working weekly expense tracker built end-to-end in Figma Make, including a full design-token migration across 15 files and a debugged onboarding flow. Live, not a concept.",
    liveUrl: "verse-number-01691725.figma.site",
    accent: "teal",
    image: "/work/weekr/cover.jpg",
  },
];

export function getGalleryProject(slug: string) {
  return galleryProjects.find((p) => p.slug === slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
