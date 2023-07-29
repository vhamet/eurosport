import { gql, useQuery } from '@apollo/client';
import { batch, useDispatch } from 'react-redux';

import { setPlayers } from './redux/slices/playerSlice';
import { setMatches } from './redux/slices/matchSlice';
import Game from './Game';
import { Match, Player } from './shared/types';

import './App.css';

const PLAYERS_AND_MATCHES_QUERY = gql`
  query {
    players {
      id
      firstname
      lastname
      shortname
      sex
      country {
        code
      }
      stats {
        rank
        points
        weight
        height
        age
      }
    }
    matches {
      id
      players {
        id
      }
      winner {
        id
        firstname
        lastname
        shortname
      }
      startTime
      endTime
    }
  }
`;

type AppData = {
  players: Player[];
  matches: Match[];
};

const App = () => {
  const dispatch = useDispatch();
  const { error, loading } = useQuery<AppData>(PLAYERS_AND_MATCHES_QUERY, {
    onCompleted: (data: AppData) => {
      batch(() => {
        dispatch(setPlayers(data.players));
        dispatch(setMatches(data.matches));
      });
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold text-blue-800">Eurosport</h1>
      </header>
      <main>
        {error ? (
          <div className="text-red-800">Error</div>
        ) : loading ? (
          <div className="text-white">Loading...</div>
        ) : (
          <Game />
        )}
      </main>
    </div>
  );
};

export default App;
