import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Player } from '../../shared/types';
import { getCountryNameFromIOCCode } from '../../shared/utils';

type PlayerIdentityProps = {
  player: Player;
  withLinkToDetail?: boolean;
  reversed?: boolean;
};

const PlayerIdentity: FC<PlayerIdentityProps> = ({
  player,
  withLinkToDetail = false,
  reversed = false,
}) => {
  const { shortname, picture, firstname, lastname, country } = player;

  const classes = `flex ${reversed ? ' flex-row-reverse' : ''}`;
  const jsxContent = (
    <>
      <img
        src={picture.url}
        alt={shortname}
        className="h-[97px] lg:w-[73px] object-cover"
      />
      <div
        className={`p-2 flex flex-col flex-1 border-b border-b-gray-400 border-opacity-30 uppercase${
          reversed ? ' items-end' : ''
        }`}
      >
        <span className="text-xs sm:text-lg leading-6 font-bold">
          {firstname}
        </span>
        <span className="text-xs sm:text-lg leading-6 font-bold">
          {lastname}
        </span>
        <div
          className={`mt-2 flex${
            reversed ? ' flex-row-reverse' : ''
          } items-center text-xxs sm:text-xs`}
        >
          <img
            src={country.picture.url}
            alt={country.code}
            className={`h-3.5 w-[25px] ${reversed ? 'ml-1' : 'mr-1'}`}
          />
          <span>{getCountryNameFromIOCCode(country.code)}</span>
        </div>
      </div>
    </>
  );

  return withLinkToDetail ? (
    <Link
      to={`/player/${player.id}`}
      className={classes}
      data-testid="player-identity"
    >
      {jsxContent}
    </Link>
  ) : (
    <div className={classes} data-testid="player-identity">
      {jsxContent}
    </div>
  );
};

export default PlayerIdentity;
