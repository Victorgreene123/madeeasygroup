export interface OfficeLocation {
  title: string;
  address: string;
  isHeadOffice?: boolean;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  headline: string;
  subheadline: string;
  description: string;
  url: string;
  phones: string[];
  primaryPhone: string;
  whatsappNumber: string;
  email: string;
  headOffice: OfficeLocation;
  branchOffices: OfficeLocation[];
  stats: {
    value: string;
    label: string;
    sublabel?: string;
  }[];
  services: {
    title: string;
    description: string;
    icon: string;
  }[];
  coreValues: {
    title: string;
    description: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  processSteps: {
    number: string;
    title: string;
    description: string;
  }[];
}

export const SITE_CONFIG: SiteConfig = {
  name: 'Made Easy Homes & Properties',
  tagline: 'Your trusted partner in affordable and secured property ownership.',
  headline: 'Own Property. Build Your Future.',
  subheadline:
    'Secure, strategically located estates across Lagos with flexible payment plans designed to make property ownership easier.',
  description:
    'Made Easy Homes & Properties is a real estate company in Lagos State with over 10 years of experience providing affordable and quality land and property solutions. The company specializes in gated and fenced estates in strategic locations with flexible payment plans.',
  url: 'https://madeeasygroup.net',
  phones: ['08086188318', '08060441161'],
  primaryPhone: '08086188318',
  whatsappNumber: '2348086188318',
  email: 'info@madeasygroup.net',
  headOffice: {
    title: 'Head Office',
    address: 'Suite 1621, 1st Floor Yemosa Plaza, 26/28 Egbeda Akowonjo Road, Egbeda, Lagos.',
    isHeadOffice: true,
  },
  branchOffices: [
    {
      title: 'Egbeda Market Office',
      address: 'Block A2, Suite 9, Olujubede Model Market, Oja B/stop, Egbeda, Lagos.',
    },
    {
      title: 'Igando Branch',
      address: 'Block 3, Igando Multipurpose Market, Igando, Lagos.',
    },
    {
      title: 'Ayobo Branch',
      address: 'Meboruko Plaza Beside Oja Market, Oja Bus Stop Igolo/Ayobo Road, Lagos.',
    },
  ],
  stats: [
    { value: '10+', label: 'Estate Locations', sublabel: 'Across Lagos & boundary corridors' },
    { value: '1,000+', label: 'Happy Clients', sublabel: 'Allocated & documented owners' },
    { value: '10+', label: 'Years Experience', sublabel: 'Proven property solutions' },
    { value: '4', label: 'Cities', sublabel: 'Strategic growth clusters' },
    { value: '100%', label: 'Client Satisfaction', sublabel: 'Commitment to peace of mind' },
  ],
  services: [
    {
      title: 'Land Sales',
      description: 'Acquisition of verified, dispute-free dry land plots in gated residential layouts.',
      icon: 'MapPin',
    },
    {
      title: 'Property Development',
      description: 'Comprehensive residential estate planning, perimeter fencing, roads, and security infrastructure.',
      icon: 'Building2',
    },
    {
      title: 'Real Estate Brokerage',
      description: 'Expert advisory helping individuals, families, and cooperatives purchase and sell prime assets.',
      icon: 'Handshake',
    },
    {
      title: 'Property Consultation',
      description: 'Professional guidance on titles, investment viability, and tailored payment schedules.',
      icon: 'MessageSquareText',
    },
    {
      title: 'Estate Management',
      description: 'Long-term maintenance, boundary protection, and ongoing support for all estate residents.',
      icon: 'ShieldCheck',
    },
  ],
  coreValues: [
    {
      title: 'Integrity',
      description: 'We do what we say. Every plot is delivered with clear legal standing and transparent terms.',
    },
    {
      title: 'Transparency',
      description: 'Zero hidden fees or unexpected charges. Complete clarity on documentation and allocation.',
    },
    {
      title: 'Excellence',
      description: 'Meticulous estate layouts, secure fencing, accessible roads, and professional execution.',
    },
    {
      title: 'Customer Focus',
      description: 'Dedicated support guiding you from the very first inspection to building your dream home.',
    },
  ],
  whyChooseUs: [
    {
      title: 'Secure Ownership',
      description: 'Government approval, verified survey demarcations, and genuine property documentation.',
    },
    {
      title: 'Flexible Payment Plans',
      description: 'Convenient outright, 12-month, and 24-month installment options tailored to your monthly cash flow.',
    },
    {
      title: 'Strategic Locations',
      description: 'Estates positioned along high-growth corridors (Magboro, Epe, Ikorodu, Atan) with rapid appreciation.',
    },
    {
      title: '10+ Years Experience',
      description: 'A solid track record of over a decade delivering reliable land and property solutions.',
    },
    {
      title: 'Professional Service',
      description: 'Experienced property advisors ready to answer your inquiries and organize guided inspections.',
    },
    {
      title: 'After-Sales Support',
      description: 'Our relationship does not end at purchase; we provide continuous allocation and development support.',
    },
  ],
  processSteps: [
    {
      number: '01',
      title: 'Explore',
      description: 'Browse our estate catalog to discover locations, plot options, and payment structures that fit your vision.',
    },
    {
      number: '02',
      title: 'Inspect',
      description: 'Join our scheduled site inspections (Thursdays & Saturdays) to personally verify the land and surroundings.',
    },
    {
      number: '03',
      title: 'Choose Your Plan',
      description: 'Select an outright payment or spread your balance conveniently across 12 to 24 flexible monthly installments.',
    },
    {
      number: '04',
      title: 'Own',
      description: 'Complete your allocation, receive official documentation and survey deeds, and commence your building journey.',
    },
  ],
};
