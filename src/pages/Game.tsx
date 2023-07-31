import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import PlayerCard from '../components/PlayerCard';
import FaceOffsSummary from '../components/FaceOffsSummary';

const Game = () => {
  const players = useSelector((state: RootState) => state.players.value);
  const matches = useSelector((state: RootState) => state.matches.value);

  return (
    <div className="w-full px-0 lg:px-28 flex flex-col">
      <h1
        className="mb-5 text-2xl font-bold text-gray-700"
        data-testid="po-title"
      >
        PLAYERS OVERVIEW
      </h1>
      <div className="flex [&>div]:flex-1">
        {players?.map((player, index) => (
          <PlayerCard key={player.id} player={player} reversed={index === 1} />
        ))}
      </div>
      <div className="w-full mt-8">
        <FaceOffsSummary players={players} matches={matches} />
      </div>
    </div>
  );
};

export default Game;
