import { convertIocCode } from 'convert-country-codes';
import { DateTime } from 'luxon';

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

export const getDatesDiff = (date1: Date, date2: Date): number => {
  const time1 = date1.getTime(),
    time2 = date2.getTime();

  return date2 > date1 ? time2 - time1 : time1 - time2;
};
export const getStringDatesDiff = (date1: string, date2: string): number =>
  getDatesDiff(new Date(date1), new Date(date2));

export const formatDate = (date: Date): string => {
  return DateTime.fromJSDate(date).toFormat('ffff');
};
