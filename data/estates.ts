export interface Estate {
  id: string;
  slug: string;
  name: string;
  location: string;
  region: 'Magboro' | 'Ikorodu' | 'Epe' | 'Atan / Ota';
  shortDescription: string;
  fullDescription: string;
  images: string[];
  featured: boolean;
  plotTypes: ('Full Plot (600sqm)' | 'Half Plot (300sqm)')[];
  paymentPlans: ('Outright Payment' | '12 Months Installment' | '24 Months Installment')[];
  features: string[];
  landmarks: string[];
  documentation: string;
  priceNotice: string;
  demoBasePrice: {
    fullPlot: number;
    halfPlot: number;
  };
}

export const ESTATES_DATA: Estate[] = [
  {
    id: 'city-of-joy',
    slug: 'city-of-joy-estate',
    name: 'City of Joy Estate',
    location: 'Magboro (Between Berger and Prayer City)',
    region: 'Magboro',
    shortDescription: 'Prime gated estate along the booming Lagos-Ibadan expressway corridor, minutes from Berger.',
    fullDescription: 'City of Joy Estate is strategically nestled in Magboro, positioned between Berger and Prayer City. Offering immediate proximity to the Lagos commercial hub, this estate guarantees rapid capital appreciation, dry topography, gated perimeter fencing, and well-planned residential zoning.',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
    plotTypes: ['Full Plot (600sqm)', 'Half Plot (300sqm)'],
    paymentPlans: ['Outright Payment', '12 Months Installment', '24 Months Installment'],
    features: [
      'Gated & Secured Entrance',
      'Perimeter Fencing',
      'Motorable Road Network',
      'Dry Table Land',
      'Planned Electricity & Drainage',
      'Proximity to Berger & Lagos Island'
    ],
    landmarks: [
      'Berger Bus Stop (12 mins)',
      'MFM Prayer City',
      'Punch Newspapers Head Office',
      'Mountain Top University'
    ],
    documentation: 'Approved Survey Plan, Deed of Assignment & Layout Documentation',
    priceNotice: 'Price available on enquiry',
    demoBasePrice: {
      fullPlot: 4500000,
      halfPlot: 2350000,
    }
  },
  {
    id: 'canaan-garden',
    slug: 'canaan-garden-estate-epe',
    name: 'Canaan Garden Estate Lagos',
    location: 'Itokin, Epe, Lagos State',
    region: 'Epe',
    shortDescription: 'High-growth investment haven in the new industrial and educational corridor of Epe.',
    fullDescription: 'Canaan Garden Estate in Itokin, Epe is set within the most dynamic real-estate corridor of Lagos State. With ongoing infrastructural expansions connecting Epe to Ibeju-Lekki, the Lekki Free Trade Zone, and the proposed Lekki International Airport, this estate is perfect for smart long-term wealth preservation and residential living.',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
    plotTypes: ['Full Plot (600sqm)', 'Half Plot (300sqm)'],
    paymentPlans: ['Outright Payment', '12 Months Installment', '24 Months Installment'],
    features: [
      '100% Dry Land Topography',
      'Fenced & Gated Community',
      'Fast Developing Corridor',
      'Clear Survey Beacon Marks',
      'Flexible 12 & 24 Month Plans',
      'Instant Allocation upon completion'
    ],
    landmarks: [
      'Epe Resort & Spa',
      'Alaro City & Lekki Free Trade Zone axis',
      'Itokin Junction',
      'Augustine University'
    ],
    documentation: 'Government Approved Excision / Registered Survey & Deed of Assignment',
    priceNotice: 'Price available on enquiry',
    demoBasePrice: {
      fullPlot: 3500000,
      halfPlot: 1850000,
    }
  },
  {
    id: 'fountain-of-glory-1',
    slug: 'fountain-of-glory-phase-1',
    name: 'Fountain of Glory Estate Lagos (Phase 1)',
    location: 'Agbowa, Ikorodu, Lagos State',
    region: 'Ikorodu',
    shortDescription: 'Peaceful, green suburban living situated in the expanding Agbowa-Ikorodu district.',
    fullDescription: 'Fountain of Glory Estate Phase 1 offers peaceful, secure family living in Agbowa, Ikorodu. Benefiting from the state government housing initiatives and proximity to the new Ikorodu-Epe expressway link, this estate provides high accessibility and immediate building feasibility.',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
    plotTypes: ['Full Plot (600sqm)', 'Half Plot (300sqm)'],
    paymentPlans: ['Outright Payment', '12 Months Installment', '24 Months Installment'],
    features: [
      'Fenced Perimeter with Security Post',
      'Good Road Access',
      'Serene Residential Atmosphere',
      'Documented Title',
      'Ready for Construction'
    ],
    landmarks: [
      'Lagos State Housing Scheme Agbowa',
      'Caleb University Imota',
      'Ikorodu Ferry Terminal (reachable via expressway)',
      'Agbowa Town Center'
    ],
    documentation: 'Registered Survey & Deed of Assignment',
    priceNotice: 'Price available on enquiry',
    demoBasePrice: {
      fullPlot: 2800000,
      halfPlot: 1450000,
    }
  },
  {
    id: 'fountain-of-glory-2',
    slug: 'fountain-of-glory-phase-2',
    name: 'Fountain of Glory Estate Lagos (Phase 2)',
    location: 'Agbowa, Ikorodu, Lagos State',
    region: 'Ikorodu',
    shortDescription: 'The extended phase offering high value for entry-level property owners and land investors.',
    fullDescription: 'Following the rapid acquisition of Phase 1, Fountain of Glory Estate Phase 2 expands the opportunity for families, cooperatives, and individual investors to secure dry, documented plots in Agbowa at highly affordable payment tiers.',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: false,
    plotTypes: ['Full Plot (600sqm)', 'Half Plot (300sqm)'],
    paymentPlans: ['Outright Payment', '12 Months Installment', '24 Months Installment'],
    features: [
      'Perimeter Fencing in Progress',
      'Planned Layout Design',
      'Dry Land',
      '12 to 24 Months Flexible Installments',
      'Free from Omo-onile encumbrances'
    ],
    landmarks: [
      'Fountain of Glory Phase 1',
      'Caleb University',
      'Lagos State Agbowa Housing Estate'
    ],
    documentation: 'Registered Survey & Deed of Assignment',
    priceNotice: 'Price available on enquiry',
    demoBasePrice: {
      fullPlot: 2500000,
      halfPlot: 1300000,
    }
  },
  {
    id: 'goshen-estate',
    slug: 'goshen-estate-iju-atan',
    name: 'Goshen Estate',
    location: 'Iju - Atan',
    region: 'Atan / Ota',
    shortDescription: 'Established gated community in the serene Iju-Atan axis with convenient access to commercial hubs.',
    fullDescription: 'Goshen Estate offers peace of mind with documented ownership, secured boundaries, and strategic positioning in the fast-growing Iju-Atan corridor. Developed with affordability and long-term security in mind.',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
    plotTypes: ['Full Plot (600sqm)', 'Half Plot (300sqm)'],
    paymentPlans: ['Outright Payment', '12 Months Installment', '24 Months Installment'],
    features: [
      'Gated Community Entrance',
      'Perimeter Fencing',
      'Accessible Motorable Roads',
      'Fast Developing Neighborhood',
      'Direct Developer Documentation'
    ],
    landmarks: [
      'Atan Commercial Center',
      'Covenant University & Canaanland axis',
      'Iju Road Network'
    ],
    documentation: 'Approved Survey Plan & Deed of Assignment',
    priceNotice: 'Price available on enquiry',
    demoBasePrice: {
      fullPlot: 2200000,
      halfPlot: 1150000,
    }
  },
  {
    id: 'divine-estate',
    slug: 'divine-estate-atan-iju',
    name: 'Divine Estate',
    location: 'Atan / Iju',
    region: 'Atan / Ota',
    shortDescription: 'Affordable, secure land ownership option with straightforward documentation and payment options.',
    fullDescription: 'Divine Estate provides accessible land ownership for working professionals and smart investors. Featuring dry ground, clear layout demarcation, and gated security, this estate ensures maximum peace of mind.',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: false,
    plotTypes: ['Full Plot (600sqm)', 'Half Plot (300sqm)'],
    paymentPlans: ['Outright Payment', '12 Months Installment', '24 Months Installment'],
    features: [
      'Dry Land',
      'Fenced Boundaries',
      'Easy Documentation Process',
      'Flexible Monthly Contributions',
      'Safe from Government Acquisition'
    ],
    landmarks: [
      'Atan-Ota Expressway',
      'Iju Town Square',
      'Local Markets and Transport Links'
    ],
    documentation: 'Registered Survey & Deed of Assignment',
    priceNotice: 'Price available on enquiry',
    demoBasePrice: {
      fullPlot: 2000000,
      halfPlot: 1050000,
    }
  },
  {
    id: 'beulah-estate',
    slug: 'beulah-estate-atan-obere',
    name: 'Beulah Estate',
    location: 'Atan / Obere',
    region: 'Atan / Ota',
    shortDescription: 'Well-situated estate in Obere with fertile land and great potential for residential and farming estates.',
    fullDescription: 'Beulah Estate in the Atan/Obere vicinity is crafted for individuals seeking tranquility and space. Whether building a custom suburban home or securing land for value retention, Beulah Estate gives you full control and security.',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: false,
    plotTypes: ['Full Plot (600sqm)', 'Half Plot (300sqm)'],
    paymentPlans: ['Outright Payment', '12 Months Installment', '24 Months Installment'],
    features: [
      '100% Dry Land Topography',
      'Planned Estate Layout',
      'Installment Options Up to 24 Months',
      'Friendly Neighborhood Environment'
    ],
    landmarks: [
      'Obere Junction',
      'Atan Central Hub',
      'Proposed Inter-State Transport routes'
    ],
    documentation: 'Registered Survey & Deed of Assignment',
    priceNotice: 'Price available on enquiry',
    demoBasePrice: {
      fullPlot: 1900000,
      halfPlot: 980000,
    }
  },
  {
    id: 'city-of-david-1',
    slug: 'city-of-david-phase-1',
    name: 'City of David Phase 1',
    location: 'Atan (Akoore)',
    region: 'Atan / Ota',
    shortDescription: 'Established community in Akoore featuring secure boundaries and immediate allocation.',
    fullDescription: 'City of David Phase 1 in Akoore, Atan stands as a testament to Made Easy\'s commitment to gated and fenced developments. An ideal choice for families planning their home construction with clear title and zero disputes.',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: false,
    plotTypes: ['Full Plot (600sqm)', 'Half Plot (300sqm)'],
    paymentPlans: ['Outright Payment', '12 Months Installment', '24 Months Installment'],
    features: [
      'Gated Entryway',
      'Perimeter Fencing',
      'Internal Layout Roads',
      'High Ground & Free from Flooding',
      'Verified Survey Data'
    ],
    landmarks: [
      'Akoore Village Center',
      'Atan Junction Commercial Corridor',
      'Gateway State Industrial Link'
    ],
    documentation: 'Approved Survey Plan & Deed of Assignment',
    priceNotice: 'Price available on enquiry',
    demoBasePrice: {
      fullPlot: 2100000,
      halfPlot: 1100000,
    }
  },
  {
    id: 'city-of-david-2',
    slug: 'city-of-david-phase-2',
    name: 'City of David Phase 2',
    location: 'Atan (Akoore)',
    region: 'Atan / Ota',
    shortDescription: 'Phase 2 offering expansion opportunities with identical security and documentation standards.',
    fullDescription: 'City of David Phase 2 offers additional residential and commercial plots in Akoore, Atan. With structured 12 and 24-month payment structures, securing property here is both achievable and stress-free.',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: false,
    plotTypes: ['Full Plot (600sqm)', 'Half Plot (300sqm)'],
    paymentPlans: ['Outright Payment', '12 Months Installment', '24 Months Installment'],
    features: [
      'Perimeter Demarcation',
      'Accessible Terrain',
      'Documented Ownership',
      'Flexible Down Payment Support'
    ],
    landmarks: [
      'City of David Phase 1',
      'Akoore Community School',
      'Atan Main Road'
    ],
    documentation: 'Registered Survey & Deed of Assignment',
    priceNotice: 'Price available on enquiry',
    demoBasePrice: {
      fullPlot: 1950000,
      halfPlot: 1000000,
    }
  },
  {
    id: 'grace-land',
    slug: 'grace-land-estate-atan-ota',
    name: 'Grace Land Estate',
    location: 'Akinde Town, Atan-Ota',
    region: 'Atan / Ota',
    shortDescription: 'Strategically located in Akinde Town, offering rapid residential development and tranquil surroundings.',
    fullDescription: 'Grace Land Estate in Akinde Town, Atan-Ota is meticulously mapped out for smart builders and land banking. Benefit from Made Easy\'s 10+ years of local property management and genuine title protection.',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: false,
    plotTypes: ['Full Plot (600sqm)', 'Half Plot (300sqm)'],
    paymentPlans: ['Outright Payment', '12 Months Installment', '24 Months Installment'],
    features: [
      'Gated & Fenced Framework',
      'Dry Land Topography',
      'Serene Residential Atmosphere',
      'Prompt Allocation System',
      'Structured 12 & 24 Month Plans'
    ],
    landmarks: [
      'Akinde Town Junction',
      'Atan-Ota Express link',
      'Ota Industrial Belt'
    ],
    documentation: 'Approved Survey Plan & Deed of Assignment',
    priceNotice: 'Price available on enquiry',
    demoBasePrice: {
      fullPlot: 1850000,
      halfPlot: 950000,
    }
  }
];
