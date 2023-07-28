import { gql, useQuery } from "@apollo/client";

import "./App.css";

const PLAYERS_QUERY = gql`
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
  }
`;

interface Player {
  id: string;
  shortname: string;
}

interface PlayersData {
  players: Player[];
}

const App = () => {
  const { error, loading, data } = useQuery<PlayersData>(PLAYERS_QUERY);

  const players = data?.players || [];

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
          <>
            {players.map(({ id, shortname }) => (
              <div key={id}>{shortname}</div>
            ))}
          </>
        )}
      </main>
    </div>
  );
};

export default App;
