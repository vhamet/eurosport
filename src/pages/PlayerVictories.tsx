import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import PlayerIdentity from '../components/PlayerIdentity';
import MatchSummary from '../components/MatchSummary';

const PlayerVictories = () => {
  const { id } = useParams();
  const matches = useSelector((state: RootState) => state.matches.value);
  const players = useSelector((state: RootState) => state.players.value);
  const player = players.find((player) => player.id === id);

  if (!player) {
    return <div>Player not found</div>;
  }

  const victories = matches.reduce(
    (victories, match) =>
      match.winner.id === id
        ? [
            ...victories,
            <MatchSummary key={match.id} match={match} player={player} />,
          ]
        : victories,
    [] as JSX.Element[]
  );

  return (
    <div className="px-2 lg:px-36">
      <h1 className="mb-5 text-2xl font-bold text-gray-700">
        PLAYER VICTORIES
      </h1>
      <PlayerIdentity player={player} />
      <div className="w-full mt-5 inline-block font-bold text-center">
        {victories.length} victories / {matches.length - victories.length}{' '}
        losses
      </div>
      <div className="[&>div]:mt-5">{victories}</div>
    </div>
  );
};

export default PlayerVictories;
