import PlayerCard from './index';
import { Player } from '../../shared/types';
import { Sex } from '../../shared/types/enums';

const player: Player = {
  id: 'player-1',
  firstname: 'Stan',
  lastname: 'Wawrinka',
  shortname: 'S.WAW',
  sex: Sex.MAN,
  picture: {
    url: 'https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg',
  },
  country: {
    code: 'SUI',
    picture: {
      url: 'https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png',
    },
  },
  stats: {
    rank: 21,
    points: 1784,
    weight: 81000,
    height: 183,
    age: 33,
  },
};

describe('<PlayerCard />', () => {
  beforeEach(() => {
    cy.mount(<PlayerCard player={player} />);
  });

  it("shows the player's identity", () => {
    cy.get('[data-testid="player-card"]').find(
      '[data-testid="player-identity"]'
    );
  });

  it("redirects to the player's detail", () => {
    cy.get('[data-testid="player-card"] a').should(
      'have.attr',
      'href',
      `/player/${player.id}`
    );
  });

  it("shows the player' stats", () => {
    cy.get('[data-testid="player-card"]').find('[data-testid="player-stats"]');
  });
});
