import {countries, Country} from '../../../../data/countries';
import {callSignPrefixes} from '../../../../data/call-sign-prefixes';

export const extrapolateString = (from: string, to: string): string[] => {
  if (from.length !== to.length) throw Error(`"${from}" and "${to}" must have same length for interpolation!`);
  const length = from.length;
  for (let i = 0; i < length - 1; i++) {
    if (from[i] !== to[i]) throw Error(`"${from}" and "${to}" only may differ in last character!`);
  }

  const rv: string[] = [];
  for (let i = from.codePointAt(length - 1); i <= to.codePointAt(length - 1); i++)
    rv.push((from.substring(0, length - 1) + String.fromCharCode(i)).toUpperCase());

  return rv;
};

export const matchCallSign = (callSign: string, compareTo: string): boolean => {
  const compareItems = compareTo.split('-');
  const compareRange = compareItems.length === 1 ? [compareTo.toUpperCase()] : extrapolateString(compareItems[0], compareItems[1]);

  return compareRange.some(_ => callSign.toUpperCase().startsWith(_));
};

export const getCountryByCallSign = (callSign: string): Country | null => {
  const candidates = callSignPrefixes.filter(_ => matchCallSign(callSign, _.COUNTRY_PREFIX));
  if (candidates.length === 0) return null;
  const prefix = candidates.sort((x, y) => y.COUNTRY_PREFIX.length - x.COUNTRY_PREFIX.length)[0];

  if (!prefix) return null;
  return countries.find(_ => _.ID === Number(prefix.COUNTRY_ID));
};

