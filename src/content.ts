export const CONTACT = {
  email: 'info@valleygroup.co.za',
  phoneDisplay: '+27 11 656 0601',
  phoneHref: 'tel:+27116560601',
  addressLines: ['145 Western Service Road', 'Woodmead, Johannesburg, 2191'],
  mapsHref: 'https://www.google.com/maps?q=145+Western+Service+Road,+Woodmead,+Johannesburg,2191',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.1884722892837!2d28.087353476162342!3d-26.060096208121916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95728ab8d19539%3A0x698858fd880f0a24!2s145%20Western%20Service%20Rd%2C%20Woodmead%2C%20Sandton%2C%202191!5e0!3m2!1sen!2sza!4v1773909267575!5m2!1sen!2sza',
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Impact', href: '#impact' },
  { label: 'Approach', href: '#approach' },
]

export const APPROACH_POINTS = [
  { term: 'Disciplined', rest: 'reinvestment into high-impact sectors' },
  { term: 'Operational', rest: 'excellence across our operating businesses' },
  { term: 'Sustainable', rest: 'value creation for our people and communities' },
  { term: 'Long-term', rest: 'partnership with the communities and clients we serve' },
  { term: 'Lean, owner-led', rest: 'decision-making that lets us move quickly on the opportunities that matter' },
]

export const VALUES = [
  {
    title: 'Integrity & Accountability',
    body: 'We do what is right, even when no one is watching. We hold ourselves and each other accountable for upholding the highest ethical standards. We take ownership of our responsibilities, honour our commitments, and address challenges with transparency and professionalism.',
  },
  {
    title: 'Empowerment & Inclusion',
    body: 'We rise by lifting others. We champion diversity and foster environments where everyone feels seen, heard, and valued. We actively support growth and development, creating access and equity across our operations.',
  },
  {
    title: 'Excellence & Innovation',
    body: "We never settle for average. We push boundaries, challenge assumptions, and strive to deliver outstanding results. Innovation drives our approach as we continuously improve to meet tomorrow's challenges.",
  },
  {
    title: 'Collaboration & Partnership',
    body: 'We go further, together. We work as one across our businesses, teams, and communities to create meaningful, sustainable impact. We build trust through open communication, mutual respect, and shared goals.',
  },
  {
    title: 'Impact & Transformation',
    body: "We are purpose-driven. Every action we take is rooted in creating positive change: in business, in society, and in people's lives. We are committed to real, measurable transformation aligned with our vision for a better Africa.",
  },
  {
    title: 'Sustainability & Stewardship',
    body: 'We build for generations. We think long-term, act responsibly, and care deeply about the legacy we leave behind. Stewardship means protecting our resources (people, planet and capital) and reinvesting wisely in a better future.',
  },
]

export const SECTORS = [
  {
    title: 'Sustainability & Transformation Advisory',
    image: '/images/advisory.jpg',
    href: 'https://www.sts-africa.co.za',
    body: "One of Africa's leading names in sustainability and transformation consulting. Operating at 100% black ownership and B-BBEE Level 1 status, it partners with blue-chip companies and organisations to navigate complex sustainability, compliance and transformation landscapes.",
    capabilities: [
      'B-BBEE & Transformation Advisory',
      'Sustainability & Compliance',
      'Accredited Education & Training',
      'HR & Labour Solutions',
      'Programme Management & M&E',
    ],
  },
  {
    title: 'Agro-processing & Food Manufacturing',
    image: '/images/agro.jpg',
    href: 'https://f2ffood.co.za',
    body: 'A vertically integrated agro-processing and manufacturing operation controlling every element of the value chain from farm to fork. Backed by over 30 years of operational excellence, it delivers trusted, high-quality food products to retail, hospitality and multinational clients across Southern Africa.',
    capabilities: [
      'Food Manufacturing & Packaging',
      'Fresh Produce & Commodity Sourcing',
      'Emerging Farmer Development',
      'Central Kitchen Operations',
      'Retail & Wholesale Distribution',
      'Venue Hire & Banqueting',
    ],
  },
  {
    title: 'Global Trade, Procurement & Logistics',
    image: '/images/trade.jpg',
    href: 'https://agrigrow.co.za',
    body: 'Connecting global manufacturing hubs across Asia, Europe, the Middle East and South America with high-demand enterprise channels across Southern Africa and the wider continent, managing procurement, quality assurance, trade finance and multimodal logistics from source to shelf.',
    capabilities: [
      'International Procurement & Sourcing',
      'Factory Audits & Quality Assurance',
      'Trade Finance & Currency Risk Management',
      'Customs, Tariff & Regulatory Compliance',
      'Multimodal Logistics (Ocean, Air, Rail & Road)',
    ],
  },
]

export type Stat = { value: number; prefix?: string; suffix?: string; label: string }

export const STATS: Stat[] = [
  { value: 80000, suffix: '+', label: 'Learners trained & employed' },
  { value: 3000, suffix: '+', label: 'Hectares under production' },
  { value: 100, suffix: '+', label: 'Clients guided through B-BBEE compliance' },
  { value: 80, suffix: '+', label: 'Black farmers empowered' },
  { value: 15, suffix: '+', label: 'Countries in global operations' },
  { value: 100, suffix: '%', label: 'Compliance track record since inception' },
  { value: 100, suffix: '%', label: 'Black ownership in key businesses' },
  { value: 1, prefix: 'Level ', label: 'B-BBEE contributor' },
]

export const IMPACT_CONTEXT = [
  {
    title: 'Global reach',
    points: [
      'Trade and sourcing operations spanning 15+ countries across Africa, Asia, Europe, the Middle East and South America',
      'ZA Export and GFSI-certified supply chains',
      'End-to-end quality assurance from factory floor to final delivery',
    ],
  },
  {
    title: 'Economic participation',
    points: [
      '100% black ownership across key operating businesses',
      'B-BBEE Level 1 contributors',
      'Sustainable community investment',
    ],
  },
]

export const PILLARS = [
  {
    title: 'Growth philosophy',
    lead: 'We build and grow businesses that demonstrate:',
    points: [
      'Strong alignment with socio-economic development priorities',
      'Potential for sustainable, self-funded profitability and growth',
      'Measurable impact on communities and stakeholders',
      'Operational excellence and scalability',
    ],
  },
  {
    title: 'Value creation',
    lead: 'Through active, hands-on involvement, we:',
    points: [
      'Strengthen operational capabilities across our businesses',
      'Reinvest profits to drive sustainable growth',
      'Ensure compliance and governance excellence',
      'Build long-term value for our people, clients and communities',
    ],
  },
  {
    title: 'How we work',
    lead: "Because we're privately held and owner-led, we're able to:",
    points: [
      'Move quickly on the opportunities that matter, without layers of external approval',
      'Align strategy directly with market opportunities as they arise',
      'Foster innovation and continuous improvement across our businesses',
      'Develop leadership and talent from within',
      'Create shared value for all stakeholders',
    ],
  },
]

export const PARTNER_LOGOS = [
  { name: 'Synergy Transformation Solutions', src: '/images/logos/sts.png' },
  { name: 'AgriGrow', src: '/images/logos/agrigrow.png' },
  { name: 'Mzansi Fresh', src: '/images/logos/mzansi-fresh.png' },
  { name: 'HQ Kyalami', src: '/images/logos/hq.png' },
  { name: 'United Way South Africa', src: '/images/logos/united-way.png' },
  { name: 'Nova Pioneer', src: '/images/logos/nova-pioneer.png' },
  { name: 'ICFF', src: '/images/logos/icff.png' },
  { name: 'SAAFF', src: '/images/logos/saaff.png' },
  { name: 'TI Auto', src: '/images/logos/ti-auto.png' },
  { name: 'Tolcon', src: '/images/logos/tolcon-black-logo.png' },
  { name: 'BB Entrepreneurship', src: '/images/logos/bb-enterpreneurship.png' },
]
