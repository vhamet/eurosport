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

export const computeGameTime = (
  start: string,
  end: string
): { hours: string; minutes: string } => {
  const time = getStringDatesDiff(end, start);
  const hours = Math.trunc(time / 3600000)
    .toString()
    .padStart(2, '0');
  const minutes = ((time % 3600000) / 60000).toString().padStart(2, '0');

  return { hours, minutes };
};

export const formatHoursPlayed = (totalPlayTime: number): string =>
  (totalPlayTime / 3600000).toFixed(2);
