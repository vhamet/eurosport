import { gql, useQuery } from '@apollo/client';
import { batch, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Game from './pages/Game';
import PlayerVictories from './pages/PlayerVictories';
import Header from './components/Header';
import { setPlayers } from './redux/slices/playerSlice';
import { setMatches } from './redux/slices/matchSlice';
import { Match, Player } from './shared/types';

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
        picture {
          url
        }
      }
      picture {
        url
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
        firstname
        lastname
        country {
          code
          picture {
            url
          }
        }
        picture {
          url
        }
      }
      winner {
        id
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
    <div className="App h-screen flex flex-col">
      <Header />
      <main className="h-max py-10 px-3 sm:px-16 flex-1 bg-gray-100">
        {error ? (
          <div className="text-red-800">Error</div>
        ) : loading ? (
          <div className="text-white">Loading...</div>
        ) : (
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/player/:id" element={<PlayerVictories />} />
          </Routes>
        )}
      </main>
    </div>
  );
};

export default App;
