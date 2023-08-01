import PlayerCard from './index';
import { Player } from '../../shared/types';

describe('<PlayerCard />', () => {
  let player: Player;
  beforeEach(() => {
    cy.fixture<{ players: Player[] }>('data').then(({ players }) => {
      [player] = players;
      cy.mount(<PlayerCard player={player} />);
    });
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
