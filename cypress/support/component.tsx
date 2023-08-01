// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

import { mount } from 'cypress/react18';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { store } from '../../src/redux/store';

Cypress.Commands.add('mount', (component, options = {}) => {
  const {
    reduxStore = store,
    routerProps = { initialEntries: ['/'] },
    ...mountOptions
  } = options;

  const wrapped = (
    <Provider store={reduxStore}>
      <MemoryRouter {...routerProps}>{component}</MemoryRouter>
    </Provider>
  );

  return mount(wrapped, mountOptions);
});

// Example use:
// cy.mount(<MyComponent />)
