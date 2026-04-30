import { Element } from '../models/element.model';

const BASE = [
  { id: 1, name: 'Gmail',      value: 12, notes: 'ContrasenyaGmail' },
  { id: 2, name: 'Instagram',  value: 16, notes: 'ContrasenyaInstagram' },
  { id: 3, name: 'Facebook',   value: 10, notes: 'ContrasenyaFacebook' },
  { id: 4, name: 'Amazon',     value: 14, notes: 'ContrasenyaAmazon' },
  { id: 5, name: 'Netflix',    value: 18, notes: 'ContrasenyaNetflix' },
  { id: 6, name: 'Spotify',    value: 20, notes: 'ContrasenyaSpotify' },
  { id: 7, name: 'GitHub',     value: 15, notes: 'ContrasenyaGitHub' },
  { id: 8, name: 'Microsoft',  value: 22, notes: 'ContrasenyaMicrosoft' },
  { id: 9, name: 'Steam',      value: 16, notes: 'ContrasenyaSteam' },
  { id: 10, name: 'AppleID',   value: 24, notes: 'ContrasenyaAppleID' }
];

export const DADES_MOCK: Element[] = Array.from({ length: 50 }).map((_, i) => {
  const base = BASE[i % BASE.length];
  return {
    id: i + 1,
    name: base.name + ' ' + (i + 1),
    value: base.value,
    notes: base.notes
  };
});
