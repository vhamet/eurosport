import { FC } from 'react';

import { Match, Player } from '../../shared/types';
import { formatDate, getStringDatesDiff } from '../../shared/utils';

type MatchSummaryProps = {
  match: Match;
  player: Player;
};

const MatchSummary: FC<MatchSummaryProps> = ({ match, player }) => {
  const opponent = match.players.find(({ id }) => id !== player.id);
  if (!opponent) {
    return <div></div>;
  }

  const time = getStringDatesDiff(match.endTime, match.startTime);
  const hours = Math.trunc(time / 3600000)
    .toString()
    .padStart(2, '0');
  const minutes = ((time % 3600000) / 60000).toString().padStart(2, '0');
  const day = formatDate(new Date(match.startTime));

  return (
    <div className="p-5 bg-white">
      <div className="mb-1 text-xs italic text-gray-900">{day}</div>
      <div className="flex items-baseline">
        {match.winner.id === player.id ? (
          <span className="font-bold text-green-700">WIN</span>
        ) : (
          <span className="font-bold text-red-700">LOSS</span>
        )}
        <span className="mx-1 text-xs">vs</span>
        <span className="flex items-center font-bold">
          {opponent.firstname} {opponent.lastname}
          <img
            className="h-3.5 w-[25px] ml-1"
            src={opponent.country.picture.url}
            alt={opponent.country.code}
          />
        </span>
        <span className="ml-2 text-sm">
          - GAME TIME:{' '}
          <span className="font-bold">
            {hours}:{minutes}
          </span>
        </span>
      </div>
    </div>
  );
};

export default MatchSummary;
