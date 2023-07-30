declare module 'convert-country-codes' {
  type ConvertResult = {
    iso2: string;
  };

  export function convertIocCode(IOCCode: string): ConvertResult;
}
