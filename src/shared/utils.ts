import { convertIocCode } from 'convert-country-codes';

const getCountryName = new Intl.DisplayNames(['en'], { type: 'region' });
export const getCountryNameFromIOCCode = (IOCcode: string): string => {
  const codes = convertIocCode(IOCcode);
  if (codes) {
    const countryName = getCountryName.of(codes.iso2);
    if (countryName) return countryName;
  }

  return '-';
};

export const formatWeight = (weight: number): string =>
  weight ? `${Math.trunc(weight / 1000)}KG` : '-';

export const formatHeight = (height: number): string =>
  height ? `${height / 100}M` : '-';
