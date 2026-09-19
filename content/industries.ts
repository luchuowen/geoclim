/** Industry links for the nav "Industries" mega-dropdown and the mobile
 * sheet's Industries accordion. Single source of truth so both stay in
 * sync with each other and with the accent colors/icons established on
 * each industry's dedicated page and on /industries. */

export const INDUSTRY_LINKS = [
  {
    href: '/industries/utilities',
    label: 'Utilities',
    desc: 'Water, electric, gas & petroleum',
    color: '#57b8ea',
    icon: 'M12 2 L12 22 M4 8 L20 8 M4 16 L20 16',
  },
  {
    href: '/industries/agriculture',
    label: 'Agriculture',
    desc: 'Climate analytics & crop monitoring',
    color: '#7ecb6f',
    icon: 'circle',
  },
  {
    href: '/industries/transportation',
    label: 'Transportation',
    desc: 'Roads, rail & airports',
    color: '#e8a83e',
    icon: 'M3 17 L9 11 L13 15 L21 7',
  },
  {
    href: '/industries/natural-resources',
    label: 'Natural Resources',
    desc: 'Environmental & mining monitoring',
    color: '#5fcf95',
    icon: 'M12 2 L20 7 L20 17 L12 22 L4 17 L4 7 Z',
  },
  {
    href: '/industries/retail-fmcg',
    label: 'Retail & FMCG',
    desc: 'Geo-marketing & distribution',
    color: '#f2789a',
    icon: 'rect',
  },
  {
    href: '/industries/insurance-finance',
    label: 'Insurance & Finance',
    desc: 'Risk, fraud & credit scoring',
    color: '#7c96c9',
    icon: 'M3 12 L8 7 L13 13 L21 5 M21 5 L21 11',
  },
] as const;
