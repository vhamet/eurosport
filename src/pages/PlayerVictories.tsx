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

  return (
    <div className="px-36">
      <Link to="/" className="mb-5 inline-block font-bold hover:text-gray-800">
        ❮ Back
      </Link>
      <PlayerIdentity player={player} />
      <div className="[&>div]:mt-5">
        {matches.reduce(
          (victories, match) =>
            match.winner.id === id
              ? [
                  ...victories,
                  <MatchSummary key={match.id} match={match} player={player} />,
                ]
              : victories,
          [] as JSX.Element[]
        )}
      </div>
    </div>
  );
};

export default PlayerVictories;
