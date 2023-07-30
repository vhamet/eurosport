import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import PlayerCard from '../components/PlayerCard';
import FaceOffsSummary from '../components/FaceOffsSummary';

const Game = () => {
  const players = useSelector((state: RootState) => state.players.value);
  const matches = useSelector((state: RootState) => state.matches.value);

  return (
    <div className="w-full px-28 flex flex-col items-center">
      <div className="w-3/4 flex [&>div]:flex-1">
        {players?.map((player, index) => (
          <PlayerCard key={player.id} player={player} reversed={index === 1} />
        ))}
      </div>
      <div className="w-3/4 mt-8">
        <FaceOffsSummary players={players} matches={matches} />
      </div>
    </div>
  );
};

export default Game;
