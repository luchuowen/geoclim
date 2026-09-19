// Shared sector icon paths, keyed by `Sector.iconKey`. Ported verbatim from
// reference/geoclim_spatial_register.html's per-sector <svg class="sector-icon">
// / <svg class="dd-ic"> paths, so a sector's icon renders identically here
// (SectorCard, SectorHeader) and in the nav mega-menu (components/nav/Nav.tsx,
// which currently hard-codes its own copy pending a Session-2 import — see
// that file's TODO). Do not edit components/nav/Nav.tsx from this session.

export const SECTOR_ICON_PATHS: Record<string, string> = {
  agriculture: 'M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6',
  utilities: 'M13 2 3 14h7l-1 8 10-12h-7l1-8z',
  government: 'M12 3 3 7v2h18V7l-9-4zM5 10v9M9 10v9M15 10v9M19 10v9M3 21h18',
  climate: 'M12 2C8 6 5 9.5 5 13.5a7 7 0 0 0 14 0C19 9.5 16 6 12 2z',
  insurance: 'M12 2 4 6v6c0 5 3.5 8.7 8 10 4.5-1.3 8-5 8-10V6l-8-4z',
  transport: 'M3 12h18M3 12l4-4M3 12l4 4M21 12l-4-4M21 12l-4 4',
};
