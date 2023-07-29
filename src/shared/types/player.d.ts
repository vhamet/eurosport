import Country from './country';
import Picture from './picture';
import Stats from './stats';

export enum Sex {
  MAN,
  WOMAN,
}

type Player = {
  id: string;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: Sex;
  picture: Picture;
  country: Country;
  stats: Stats;
};

export default Player;
