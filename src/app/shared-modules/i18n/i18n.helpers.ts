import {LanguageResource} from '../../../locale/language-resource';
import {FlatResource} from './i18n-store';

export const flatResource = (input: LanguageResource): { [key: string]: string } => {
  const flat: FlatResource = {};

  const keys = Object.keys(input);
  for (const key of keys) {
    if (typeof input[key] === 'string') flat[key] = input[key] as string;
    else {
      const subFlat = flatResource(input[key] as any);
      const subKeys = Object.keys(subFlat);
      for (const subKey of subKeys) {
        flat[key + '.' + subKey] = subFlat[subKey];
      }
    }
  }

  return flat;
};
