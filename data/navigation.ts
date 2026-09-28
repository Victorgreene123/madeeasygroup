export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Estates', href: '/estates' },
  { label: 'Why Made Easy', href: '/#why-made-easy' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Book Inspection', href: '/book-inspection' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  explore: [
    { label: 'All Estates', href: '/estates' },
    { label: 'Payment Calculator', href: '/#calculator' },
    { label: 'Book an Inspection', href: '/book-inspection' },
    { label: 'Why Made Easy', href: '/#why-made-easy' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Photo Gallery', href: '/gallery' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Mission & Vision', href: '/about#mission' },
    { label: 'Core Values', href: '/about#values' },
    { label: 'Contact & Offices', href: '/contact' },
    { label: 'Book an Inspection', href: '/book-inspection' },
  ],
  estatesQuick: [
    { label: 'City of Joy (Magboro)', href: '/estates/city-of-joy-estate' },
    { label: 'Canaan Garden (Epe)', href: '/estates/canaan-garden-estate-epe' },
    { label: 'Fountain of Glory (Ikorodu)', href: '/estates/fountain-of-glory-phase-1' },
    { label: 'Goshen Estate (Atan)', href: '/estates/goshen-estate-iju-atan' },
    { label: 'City of David (Akoore)', href: '/estates/city-of-david-phase-1' },
  ],
};
