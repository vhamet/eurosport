import PlayerStats from './index';
import { Stats } from '../../shared/types';
import { formatHeight, formatWeight } from '../../shared/utils';

const stats: Stats = {
  rank: 21,
  points: 1784,
  weight: 81000,
  height: 183,
  age: 33,
};

describe('<PlayerStats />', () => {
  beforeEach(() => {
    cy.mount(<PlayerStats stats={stats} />);
  });

  it("shows the player's ATP ranking", () => {
    cy.get('[data-testid="ps-ranking"]').contains(stats.rank);
  });

  it("shows the player's ATP points", () => {
    cy.get('[data-testid="ps-points"]').contains(stats.points);
  });

  it("shows the player's age", () => {
    cy.get('[data-testid="ps-age"]').contains(stats.age);
  });

  it("shows the player's formatted height", () => {
    cy.get('[data-testid="ps-height"]').contains(formatHeight(stats.height));
  });

  it("shows the player's formatted weight", () => {
    cy.get('[data-testid="ps-weight"]').contains(formatWeight(stats.weight));
  });
});
