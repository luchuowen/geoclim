/** Shared site-wide data for the "Direction C, Field" rebuild: nav links,
 * footer contact/regional info. Single source of truth so the nav and
 * footer (rendered on every page) stay in sync. */

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/industries', label: 'Industries' },
  { href: '/work', label: 'Work' },
  { href: '/partners', label: 'Partners' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const FOOTER_COMPANY_LINKS = [
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/industries', label: 'Industries' },
  { href: '/work', label: 'Work' },
  { href: '/partners', label: 'Partners' },
  { href: '/about', label: 'About' },
] as const;

export const CONTACT = {
  city: 'Nairobi, Kenya',
  phone: '+254 768 583 362',
  email: 'info@geoclimea.org',
  hours: 'Mon–Fri, 8am–5pm EAT',
} as const;

export const REGIONAL_OPS = [
  'Uganda',
  'Tanzania',
  'Rwanda',
  'Ethiopia',
  'Zambia',
  'Malawi',
  'DRC',
  'Mozambique',
  'Zimbabwe',
] as const;
