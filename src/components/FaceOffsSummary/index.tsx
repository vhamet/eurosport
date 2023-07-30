import { FC } from 'react';

import { Match, Player } from '../../shared/types';
import { getStringDatesDiff } from '../../shared/utils';

type FaceOffsSummaryProps = {
  players: Player[];
  matches: Match[];
};

const FaceOffsSummary: FC<FaceOffsSummaryProps> = ({ players, matches }) => {
  const idFirstPlayer = players[0].id;
  const idSecondPlayer = players[1].id;
  const [firstPlayerWins, secondPlayerWins, totalPlayTime] = matches.reduce(
    (totals, match) => {
      let [firstPlayerWins, secondPlayerWins, totalPlayTime] = totals;
      totalPlayTime += getStringDatesDiff(match.endTime, match.startTime);

      if (match.winner.id === idFirstPlayer) firstPlayerWins++;
      if (match.winner.id === idSecondPlayer) secondPlayerWins++;

      return [firstPlayerWins, secondPlayerWins, totalPlayTime];
    },
    [0, 0, 0]
  );

  return (
    <div className="py-3 px-16 flex justify-around bg-white">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{firstPlayerWins}</span>
        <span className="text-xs">WINS</span>
      </div>
      <div className="w-3/6 flex flex-col items-center">
        <span className="mb-2 text-xs">
          {matches.length} GAME{matches.length > 1 ? 'S' : ''} -{' '}
          {(totalPlayTime / 3600000).toFixed(2)} HOURS PLAYED
        </span>
        <div className="w-full flex">
          <div
            className="h-3 bg-blue-700"
            style={{ width: `${(firstPlayerWins / matches.length) * 100}%` }}
          ></div>
          <div
            className="h-3 bg-gray-200"
            style={{
              width: `${
                ((matches.length - firstPlayerWins - secondPlayerWins) /
                  matches.length) *
                100
              }%`,
            }}
          ></div>
          <div
            className="h-3 bg-gray-700"
            style={{ width: `${(secondPlayerWins / matches.length) * 100}%` }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{secondPlayerWins}</span>
        <span className="text-xs">WINS</span>
      </div>
    </div>
  );
};

export default FaceOffsSummary;
