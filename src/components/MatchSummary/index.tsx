import { FC } from 'react';

import { Match, Player } from '../../shared/types';
import { computeGameTime, formatDate } from '../../shared/utils';

type MatchSummaryProps = {
  match: Match;
  player: Player;
};

const MatchSummary: FC<MatchSummaryProps> = ({ match, player }) => {
  const opponent = match.players.find(({ id }) => id !== player.id);

  const { hours, minutes } = computeGameTime(match.startTime, match.endTime);
  const day = formatDate(new Date(match.startTime));

  return (
    <div className="p-2 sm:p-5 bg-white" data-testid="match-summary">
      <div className="mb-1 text-xxs sm:text-xs italic text-gray-900 truncate">
        {day}
      </div>
      <div className="flex items-baseline">
        {match.winner.id === player.id ? (
          <span className="font-bold text-green-700">WIN</span>
        ) : (
          <span className="font-bold text-red-700">LOSS</span>
        )}
        <span className="mx-1 text-xs">vs</span>
        <span className="flex items-center font-bold">
          {opponent?.firstname ?? '-'} {opponent?.lastname ?? '-'}
          <img
            className="h-3.5 w-[25px] ml-1"
            src={opponent?.country.picture.url ?? '-'}
            alt={opponent?.country.code ?? '-'}
          />
        </span>
        <span className="ml-2 text-xs sm:text-sm">
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
