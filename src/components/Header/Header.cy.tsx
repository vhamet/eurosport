import Header from './index';

describe('<Header />', () => {
  beforeEach(() => {
    cy.mount(<Header />);
  });

  it('shows the app logo', () => {
    cy.get('[data-testid="app-logo"]');
  });

  it('redirects to the home page', () => {
    cy.get('header a').should('have.attr', 'href', '/');
  });
});
