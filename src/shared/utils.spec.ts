import {
  computeGameTime,
  formatDate,
  formatHeight,
  formatHoursPlayed,
  formatWeight,
  getCountryNameFromIOCCode,
  getDatesDiff,
} from './utils';

describe('getCountryNameFromIOCCode', () => {
  it('should return the corresponding country name for a valid IOC code', () => {
    expect(getCountryNameFromIOCCode('FRA')).toBe('France');
  });

  it('should return a dash if the code is not valid', () => {
    expect(getCountryNameFromIOCCode('FR')).toBe('-');
  });
});

describe('formatWeight', () => {
  it('should return the weight in grams formatted in kilos as "XXKG"', () => {
    expect(formatWeight(95000)).toBe('95KG');
  });

  it('should not show the grams', () => {
    expect(formatWeight(95123)).toBe('95KG');
  });

  it('should return a dash if weight is invalid', () => {
    expect(formatWeight(-4)).toBe('-');
  });
});

describe('formatHeight', () => {
  it('should return the height in centimeters formatted in meters as "X.XXM"', () => {
    expect(formatHeight(189)).toBe('1.89M');
  });

  it('should only show digits down to centimeters', () => {
    expect(formatHeight(189.123)).toBe('1.89M');
  });

  it('should return a dash if height is invalid', () => {
    expect(formatHeight(-4)).toBe('-');
  });
});

describe('getDatesDiff', () => {
  it('should return the difference in milliseconds between two dates', () => {
    const date1 = new Date('2023-08-01T12:00:00.000Z');
    const date2 = new Date('2023-08-02T12:00:00.000Z');
    const expectedDifference = 24 * 60 * 60 * 1000;

    const result = getDatesDiff(date1, date2);

    expect(result).toBe(expectedDifference);
  });

  it('should return a positive difference even if date1 is greater than date2', () => {
    const date1 = new Date('2023-08-05T12:00:00.000Z');
    const date2 = new Date('2023-08-02T12:00:00.000Z');
    const expectedDifference = 3 * 24 * 60 * 60 * 1000;

    const result = getDatesDiff(date1, date2);

    expect(result).toBe(expectedDifference);
  });

  it('should return 0 if both dates are the same', () => {
    const date1 = new Date('2023-08-02T12:00:00.000Z');
    const date2 = new Date('2023-08-02T12:00:00.000Z');

    const result = getDatesDiff(date1, date2);

    expect(result).toBe(0);
  });
});

describe('formatDate', () => {
  it('should format the date with verbose localized date and time', () => {
    const date = new Date('2022-01-31T07:12:00.000Z');
    const expectedFormattedDate =
      'Monday, 31 January 2022, 08:12 Central European Standard Time';

    const result = formatDate(date);

    expect(result).toBe(expectedFormattedDate);
  });

  it('should return a dash for an invalid date', () => {
    const date = new Date('invalid date');
    const expectedFormattedDate = '-';

    const result = formatDate(date);

    expect(result).toBe(expectedFormattedDate);
  });
});

describe('computeGameTime', () => {
  it('should compute the correct number of hours and minutes between two dates', () => {
    const start = '2023-08-02T12:00:00.000Z';
    const end = '2023-08-02T15:30:00.000Z';
    const expectedTime = { hours: '03', minutes: '30' };

    const result = computeGameTime(start, end);

    expect(result).toEqual(expectedTime);
  });

  it('should handle negative time difference', () => {
    const start = '2023-08-02T15:00:00.000Z';
    const end = '2023-08-02T12:30:00.000Z';
    const expectedTime = { hours: '02', minutes: '30' };

    const result = computeGameTime(start, end);

    expect(result).toEqual(expectedTime);
  });

  it('should handle same start and end dates and return "00" hours and "00" minutes', () => {
    const start = '2023-08-02T12:00:00.000Z';
    const end = '2023-08-02T12:00:00.000Z';
    const expectedTime = { hours: '00', minutes: '00' };

    const result = computeGameTime(start, end);

    expect(result).toEqual(expectedTime);
  });

  it('should handle end date earlier than start date', () => {
    const start = '2023-08-02T19:00:00.000Z';
    const end = '2023-08-02T12:00:00.000Z';
    const expectedTime = { hours: '07', minutes: '00' };

    const result = computeGameTime(start, end);

    expect(result).toEqual(expectedTime);
  });
});

describe('formatHoursPlayed', () => {
  it('should convert time from milliseconds to hours with two decimal places', () => {
    const totalPlayTime = 3600000;
    const expectedFormattedTime = '1.00';

    const result = formatHoursPlayed(totalPlayTime);

    expect(result).toBe(expectedFormattedTime);
  });

  it('should convert time from milliseconds to hours with two decimal places for 30 minutes', () => {
    const totalPlayTime = 1800000; // 30 minutes in milliseconds
    const expectedFormattedTime = '0.50';

    const result = formatHoursPlayed(totalPlayTime);

    expect(result).toBe(expectedFormattedTime);
  });

  it('should handle zero totalPlayTime and return "0.00" hours', () => {
    const totalPlayTime = 0;
    const expectedFormattedTime = '0.00';

    const result = formatHoursPlayed(totalPlayTime);

    expect(result).toBe(expectedFormattedTime);
  });

  it('should handle negative totalPlayTime', () => {
    const totalPlayTime = -3600000; // -1 hour in milliseconds
    const expectedFormattedTime = '-1.00';

    const result = formatHoursPlayed(totalPlayTime);

    expect(result).toBe(expectedFormattedTime);
  });
});
