import { FC } from 'react';

import { Player } from '../../shared/types';
import { getCountryNameFromIOCCode } from '../../shared/utils';

type PlayerIdentityProps = {
  player: Player;
  reverse?: boolean;
};

const PlayerIdentity: FC<PlayerIdentityProps> = ({
  player,
  reverse = false,
}) => {
  const { shortname, picture, firstname, lastname, country } = player;

  return (
    <div className={`flex ${reverse ? ' flex-row-reverse' : ''}`}>
      <img
        src={picture.url}
        alt={shortname}
        className="h-[97px] lg:w-[73px] object-cover"
      />
      <div
        className={`p-2 flex flex-col flex-1 border-b border-b-gray-400 border-opacity-30 uppercase${
          reverse ? ' items-end' : ''
        }`}
      >
        <span className="font-bold text-lg leading-6">{firstname}</span>
        <span className="font-bold text-lg leading-6">{lastname}</span>
        <div
          className={`mt-2 flex${
            reverse ? ' flex-row-reverse' : ''
          } items-center text-xs`}
        >
          <img
            src={country.picture.url}
            alt={country.code}
            className={`h-3.5 w-[25px] ${reverse ? 'ml-1' : 'mr-1'}`}
          />
          <span>{getCountryNameFromIOCCode(country.code)}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerIdentity;
